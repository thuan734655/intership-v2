import type { NextRequest } from "next/server";

export async function GET(_req: NextRequest, context: { params: { barcode: string } }) {
  const { barcode } = context.params;

  const backendBase = process.env.BACKEND_URL || "http://localhost:3000";
  const targetUrl = `${backendBase.replace(/\/$/, "")}/product/info/${encodeURIComponent(barcode)}`;

  try {
    const res = await fetch(targetUrl, { next: { revalidate: 0 } });

    const contentType = res.headers.get("content-type") || "application/json";
    const body = await res.text();

    return new Response(body, {
      status: res.status,
      headers: { "content-type": contentType },
    });
  } catch (err) {
    console.error("API proxy error:", err);
    return new Response(JSON.stringify({ success: false, message: "Proxy request failed" }), {
      status: 502,
      headers: { "content-type": "application/json" },
    });
  }
}
