import Map from "@/components/ui/Map";
import { MapMagazineProps } from "@/types/about-page";

export default function MapMagazine(props: MapMagazineProps) {
	const { lng, lat, map } = props || {};

	return (
		<div className="lg:h-[calc(100%-0.75rem)] min-h-70 block w-full overflow-hidden lg:col-span-2 lg:row-span-2 col-span-1 row-span-1 border-1 border-solid border-(--color-secondary-dark) rounded-xs">
			<Map lng={lng} lat={lat} map={map} />
		</div>
	);
}
