const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Load your catalog on the server.
// IMPORTANT: path might vary depending on your build tooling.
// This usually works in Netlify Functions when the file is deployed with the function bundle.
// If it fails, I’ll show the alternative (hardcode catalog in function or move to a JS module).
const products = require("../../src/data/products.json");

function buildCatalog(productsArr) {
  const catalog = {};
  for (const p of productsArr) {
    catalog[p.sku] = {
      name: p.name,
      unitAmount: Math.round(Number(p.price) * 100),
    };
  }
  return catalog;
}

const CATALOG = buildCatalog(products);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const items = Array.isArray(body.items) ? body.items : [];

    if (!items.length) {
      return { statusCode: 400, body: JSON.stringify({ error: "Cart is empty." }) };
    }

    const line_items = items.map((item) => {
      const sku = String(item.sku || "");
      const qty = Math.max(1, Number(item.quantity || 1));

      const p = CATALOG[sku];
      if (!p) throw new Error(`Unknown SKU: ${sku}`);

      return {
        quantity: qty,
        price_data: {
          currency: "usd",
          product_data: { name: p.name },
          unit_amount: p.unitAmount,
        },
      };
    });

    const origin = event.headers.origin || `https://${event.headers.host}`;
    const successPath = body.successPath || "/success";
    const cancelPath = body.cancelPath || "/cart";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}${successPath}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}${cancelPath}`,
    });

    return { statusCode: 200, body: JSON.stringify({ url: session.url }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message || "Server error" }) };
  }
};
