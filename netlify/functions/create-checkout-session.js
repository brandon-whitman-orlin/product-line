const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const products = require("./_data/products.json"); 
// ⬆️ recommended: copy products.json to netlify/functions/_data/products.json
// so the function bundling/import path is reliable

function buildCatalog(productsArr) {
  const catalog = {};
  for (const p of productsArr) {
    if (!p.sku || !p.stripePriceId) continue;
    catalog[p.sku] = {
      name: p.name,
      stripePriceId: p.stripePriceId,
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
        price: p.stripePriceId, // ✅ Uses your real Stripe catalog Price
        quantity: qty,
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
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || "Server error" }),
    };
  }
};
