import { NextResponse } from "next/server";

const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null || !("email" in body)) {
    return NextResponse.json({ ok: false, error: "Email is required." }, { status: 400 });
  }

  const email = String((body as { email: unknown }).email).trim();
  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email format." }, { status: 400 });
  }

  console.info("[waitlist]", { email, at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
