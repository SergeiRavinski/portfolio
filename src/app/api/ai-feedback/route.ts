import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { value, hint } = await req.json();

		if (!process.env.OPENAI_API_KEY) {
			throw new Error("Missing OPENAI_API_KEY");
		}

		const response = await fetch("https://api.openai.com/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
			},
			body: JSON.stringify({
				model: "gpt-3.5-turbo",
				messages: [
					{
						role: "system",
						content: `You are a helpful assistant. Give feedback on: "${hint}"`,
					},
					{ role: "user", content: value },
				],
				max_tokens: 200,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error(JSON.stringify(data));
		}

		return NextResponse.json({ reply: data.choices[0].message.content });
	} catch (err: unknown) {
		console.error("API route error:", err);
		const errorMessage = err instanceof Error ? err.message : "Internal server error";
		return NextResponse.json({ error: errorMessage }, { status: 500 });
	}
}
