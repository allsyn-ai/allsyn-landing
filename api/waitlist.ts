export const config = {
  runtime: "edge",
};

const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY;

export default async function handler(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await req.json();
    const { email, tier } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "Invalid email address" },
        { status: 400, headers: { "Access-Control-Allow-Origin": "*" } }
      );
    }

    const validTiers = ["core", "pro", "enterprise"];
    const selectedTier = validTiers.includes(tier) ? tier : "pro";

    // Persist to Stripe as a customer with waitlist metadata
    if (STRIPE_SECRET) {
      // Check if customer already exists
      const searchRes = await fetch(
        `https://api.stripe.com/v1/customers/search?query=${encodeURIComponent(`email:"${email}"`)}`,
        {
          headers: { Authorization: `Bearer ${STRIPE_SECRET}` },
        }
      );
      const searchData = await searchRes.json();

      if (searchData.data && searchData.data.length > 0) {
        // Update existing customer's waitlist tier
        const customerId = searchData.data[0].id;
        await fetch(`https://api.stripe.com/v1/customers/${customerId}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${STRIPE_SECRET}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            "metadata[waitlist_tier]": selectedTier,
            "metadata[waitlist_updated]": new Date().toISOString(),
          }).toString(),
        });
      } else {
        // Create new customer
        await fetch("https://api.stripe.com/v1/customers", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${STRIPE_SECRET}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            email,
            "metadata[source]": "waitlist",
            "metadata[waitlist_tier]": selectedTier,
            "metadata[waitlist_date]": new Date().toISOString(),
          }).toString(),
        });
      }
    }

    console.log(
      JSON.stringify({
        event: "waitlist_signup",
        email,
        tier: selectedTier,
        timestamp: new Date().toISOString(),
      })
    );

    return Response.json(
      { success: true, message: "You're on the list. We'll be in touch." },
      {
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    );
  } catch {
    return Response.json(
      { error: "Invalid request body" },
      { status: 400, headers: { "Access-Control-Allow-Origin": "*" } }
    );
  }
}
