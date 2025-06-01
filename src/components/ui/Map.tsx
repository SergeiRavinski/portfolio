"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || null;

export default function Map() {
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const [showHint, setShowHint] = useState(false);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainerRef.current!,
			style: "mapbox://styles/mapbox/streets-v12",
			center: [10.81278, 59.89595], // Havredalen, Manglerud
			zoom: 14,
		});

		map.scrollZoom.disable();

		const handleWheel = (e: WheelEvent) => {
			if (e.ctrlKey || e.metaKey) {
				map.scrollZoom.enable();
			} else {
				map.scrollZoom.disable();
				showCtrlScrollHint();
			}
		};

		const showCtrlScrollHint = () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
			setShowHint(true);
			timeoutRef.current = setTimeout(() => setShowHint(false), 2000);
		};

		map.getCanvas().addEventListener("wheel", handleWheel);

		// Add navigation (zoom and rotation) controls
		map.addControl(new mapboxgl.NavigationControl(), "top-left");

		// Add geolocate control
		map.addControl(
			new mapboxgl.GeolocateControl({
				positionOptions: { enableHighAccuracy: true },
				trackUserLocation: true,
				showUserHeading: true,
			}),
			"top-right"
		);

		new mapboxgl.Marker({ color: "var(--color-primary-dark)" })
			.setLngLat([10.81278, 59.89595])
			.addTo(map);

		return () => {
			map.getCanvas().removeEventListener("wheel", handleWheel);
			map.remove();
		};
	}, []);

	return (
		<div className="relative">
			{/* Hint Popup */}
			{showHint && (
				<div className="absolute normal-case bottom-4 left-1/2 -translate-x-1/2 bg-(--color-primary-dark) text-(--color-primary-light) px-4 py-2 text-sm rounded-md shadow-md z-10">
					Hold Ctrl (or ⌘ on Mac) and scroll to zoom the map
				</div>
			)}

			<div
				ref={mapContainerRef}
				className="w-full h-[500px] rounded-md"
			/>
		</div>
	);
}
