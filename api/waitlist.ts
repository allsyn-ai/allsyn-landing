export const config = {
  runtime: "edge",
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

  try {
    const body = await req.json();
    const { email, tier } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }

    const validTiers = ["core", "pro", "enterprise"];
    const selectedTier = validTiers.includes(tier) ? tier : "pro";

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
