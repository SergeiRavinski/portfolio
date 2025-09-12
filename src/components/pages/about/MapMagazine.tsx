import Map from "@/components/ui/Map";
import { MapMagazineProps } from "@/types/about-page";

export default function MapMagazine(props: MapMagazineProps) {
	const { lng, lat } = props || {};

	return (
		<div className="h-[calc(100%-0.75rem)] block w-full overflow-hidden col-span-2 row-span-2">
			<Map lng={lng} lat={lat} />
		</div>
	);
}
