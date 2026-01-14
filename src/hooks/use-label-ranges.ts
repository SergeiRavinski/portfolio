import { useMemo } from "react";

export function useLabelRanges(rawText: string, sections: { label: string }[]) {
	return useMemo(
		() =>
			sections.map((section) => {
				const start = rawText.indexOf(section.label);

				return {
					label: section.label,
					start,
					end: start + section.label.length,
				};
			}),
		[rawText, sections],
	);
}
