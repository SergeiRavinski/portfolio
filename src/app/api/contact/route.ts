import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
	const { firstName, lastName, email, message } = await req.json();

	const msg = {
		from: `"Website Contact Form" <${process.env.EMAIL_SENDER!}>`,
		to: `"Portfolio Inbox" <${process.env.EMAIL_RECEIVER!}>`,
		replyTo: `"${firstName} ${lastName}" <${email}>`,
		subject: "Thanks for your message",
		text: message,
	};

	try {
		await sgMail.send(msg);

		return NextResponse.json({ success: true });
	} catch (error: any) {
		console.error("SendGrid error:", error);
		return NextResponse.json({ success: false, error: error.message }, { status: 500 });
	}
}
