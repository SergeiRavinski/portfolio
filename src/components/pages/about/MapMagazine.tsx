import Map from "@/components/ui/Map";
import { MapMagazineProps } from "@/types/about-page";

export default function MapMagazine(props: MapMagazineProps) {
	const { lng, lat, map } = props || {};

	return (
		<div className="col-span-1 row-span-1 block min-h-70 w-full overflow-hidden rounded-xs border-1 border-solid border-(--color-secondary-dark) lg:col-span-2 lg:row-span-2 lg:h-[calc(100%-0.75rem)]">
			<Map lng={lng} lat={lat} map={map} />
		</div>
	);
}
