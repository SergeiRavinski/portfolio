import { NextResponse } from "next/server";
// Library to send emails
import nodemailer from "nodemailer";

export async function POST(req: Request) {
	const { firstName, lastName, email, message } = await req.json();

	// Nodemailer allowing to send emails
	const transporter = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	try {
		await transporter.sendMail({
			from: email,
			to: process.env.EMAIL_RECEIVER,
			subject: `Message from ${firstName} ${lastName}`,
			text: message,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ success: false }, { status: 500 });
	}
}
