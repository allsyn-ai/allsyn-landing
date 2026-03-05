export const config = {
  runtime: "edge",
};

const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY;

const PRICE_MAP: Record<string, string> = {
  pro: "price_1T7SbHF45mRdAEF8WVFGuoNA",
  enterprise: "price_1T7SbPF45mRdAEF843eKAMwi",
};

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

  if (!STRIPE_SECRET) {
    return Response.json(
      { error: "Stripe not configured" },
      { status: 500, headers: { "Access-Control-Allow-Origin": "*" } }
    );
  }

  try {
    const body = await req.json();
    const { tier } = body;

    const priceId = PRICE_MAP[tier];
    if (!priceId) {
      return Response.json(
        { error: "Invalid tier. Use 'pro' or 'enterprise'." },
        { status: 400, headers: { "Access-Control-Allow-Origin": "*" } }
      );
    }

    const origin = req.headers.get("origin") || "https://allsyn.ai";

    // Create Stripe Checkout Session via API
    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        "mode": "subscription",
        "line_items[0][price]": priceId,
        "line_items[0][quantity]": "1",
        "success_url": `${origin}?checkout=success`,
        "cancel_url": `${origin}?checkout=cancel`,
        "allow_promotion_codes": "true",
      }).toString(),
    });

    const session = await response.json();

    if (!response.ok) {
      console.error("[checkout] Stripe error:", JSON.stringify(session));
      return Response.json(
        { error: "Failed to create checkout session" },
        { status: 500, headers: { "Access-Control-Allow-Origin": "*" } }
      );
    }

    return Response.json(
      { url: session.url },
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );
  } catch (err) {
    console.error("[checkout] Error:", err);
    return Response.json(
      { error: "Something went wrong" },
      { status: 500, headers: { "Access-Control-Allow-Origin": "*" } }
    );
  }
}
