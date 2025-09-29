import { Button, Card } from "@sanity/ui";
import { useState } from "react";
import { InputProps } from "sanity";

export const AIInput = (props: InputProps) => {
	const [response, setResponse] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleClick() {
		if (loading) return;
		setLoading(true);

		try {
			const res = await fetch("/api/ai-feedback", {
				method: "POST",
				body: JSON.stringify({
					value: props.value,
					hint:
						props.schemaType.options?.openAI?.hint ||
						props.schemaType.description,
				}),
			});

			const data = await res.json();

			setResponse(data.reply || "No response from AI");
		} catch (err) {
			console.error(err);
			setResponse("Error fetching AI feedback");
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<div>{props.renderDefault(props)}</div>
			<Button
				style={{ margin: "1rem 0" }}
				onClick={handleClick}
				disabled={loading}
			>
				{loading ? "Loading..." : "Get AI Feedback"}
			</Button>
			{response && (
				<Card style={{ padding: "12px" }} tone="primary">
					{response}
				</Card>
			)}
		</>
	);
};
