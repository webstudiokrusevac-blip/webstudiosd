import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type InquiryPayload = {
  nameCompany?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  website?: string;
};

const contactTo = process.env.CONTACT_TO_EMAIL ?? "webstudiokrusevac@gmail.com";
const gmailUser = process.env.GMAIL_USER ?? contactTo;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
const contactFrom = process.env.CONTACT_FROM_EMAIL ?? `Web Studio Krusevac <${gmailUser ?? "webstudiokrusevac@gmail.com"}>`;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const runtime = "nodejs";
export const maxDuration = 10;

const clean = (value: unknown) => String(value ?? "").trim();

const sendWithGmail = async (inquiry: {
  nameCompany: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}) => {
  if (!gmailUser || !gmailAppPassword) {
    throw new Error("GMAIL_MISSING_CONFIG");
  }

  const emailBody = `
Novi upit za sajt

Ime i firma:
${inquiry.nameCompany}

Email:
${inquiry.email}

Tip projekta:
${inquiry.projectType}

Budzet:
${inquiry.budget}

Sta zele da napravimo:
${inquiry.message}
`;

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.55;">
      <h2 style="margin: 0 0 16px;">Novi upit za sajt</h2>
      <p><strong>Ime i firma:</strong><br>${inquiry.nameCompany}</p>
      <p><strong>Email:</strong><br>${inquiry.email}</p>
      <p><strong>Tip projekta:</strong><br>${inquiry.projectType}</p>
      <p><strong>Budzet:</strong><br>${inquiry.budget}</p>
      <p><strong>Sta zele da napravimo:</strong><br>${inquiry.message.replace(/\n/g, "<br>")}</p>
    </div>
  `;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword
    }
  });

  return transporter.sendMail({
    from: contactFrom,
    to: contactTo,
    replyTo: inquiry.email,
    subject: `Novi upit za sajt - ${inquiry.nameCompany}`,
    text: emailBody,
    html: emailHtml
  });
};

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  let payload: InquiryPayload;

  try {
    payload = contentType.includes("application/json")
      ? ((await request.json()) as InquiryPayload)
      : (Object.fromEntries((await request.formData()).entries()) as InquiryPayload);
  } catch {
    return NextResponse.json({ error: "Neispravan zahtev." }, { status: 400 });
  }

  const inquiry = {
    nameCompany: clean(payload.nameCompany),
    email: clean(payload.email).toLowerCase(),
    projectType: clean(payload.projectType),
    budget: clean(payload.budget),
    message: clean(payload.message),
    website: clean(payload.website)
  };

  if (inquiry.website) {
    return NextResponse.json({ ok: true });
  }

  if (
    !inquiry.nameCompany ||
    !inquiry.email ||
    !inquiry.projectType ||
    !inquiry.budget ||
    inquiry.message.length < 12
  ) {
    return NextResponse.json({ error: "Nedostaju obavezna polja." }, { status: 400 });
  }

  if (!emailPattern.test(inquiry.email)) {
    return NextResponse.json({ error: "Email adresa nije ispravna." }, { status: 400 });
  }

  try {
    const info = await sendWithGmail(inquiry);
    return NextResponse.json({
      ok: true,
      accepted: info.accepted ?? [],
      rejected: info.rejected ?? []
    });
  } catch (error) {
    if (error instanceof Error && error.message === "GMAIL_MISSING_CONFIG") {
      return NextResponse.json({ error: "GMAIL_APP_PASSWORD nije podesen na serveru." }, { status: 503 });
    }

    return NextResponse.json({ error: "Email servis trenutno nije dostupan." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
