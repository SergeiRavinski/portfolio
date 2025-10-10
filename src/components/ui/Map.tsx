"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapMagazineProps } from "@/types/about-page";
import { usePathname } from "next/navigation";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

export default function Map(props: MapMagazineProps) {
	const { lng, lat, map } = props || {};
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const isContactPage = usePathname().includes("contact");
	const mapStyle =
		map === "light"
			? "mapbox://styles/mapbox/light-v11"
			: "mapbox://styles/mapbox/streets-v12";
	const style = isContactPage
		? "flex md:h-[300px] h-[200px] w-full"
		: "flex h-full w-full";

	useEffect(() => {
		if (!mapContainerRef.current) return;

		let map: mapboxgl.Map;

		try {
			// Initialize the map
			map = new mapboxgl.Map({
				container: mapContainerRef.current,
				style: mapStyle,
				center: [lng, lat],
				zoom: 12,
				cooperativeGestures: true,
			});
			// Add navigation controls
			map.addControl(new mapboxgl.NavigationControl(), "top-left");
			// Add geolocate control to the map
			map.addControl(
				new mapboxgl.GeolocateControl({
					positionOptions: { enableHighAccuracy: true },
					trackUserLocation: true,
					showUserHeading: true,
				}),
				"top-right"
			);

			// Add a marker at the specified coordinates
			new mapboxgl.Marker({
				color: "var(--color-tertiary-dark)",
			})
				.setLngLat([lng, lat])
				.addTo(map);
		} catch (err) {
			console.error("Failed to initialize the map:", err);
		}

		return () => {
			map?.remove();
		};
	}, [lng, lat, mapStyle]);

	return <div ref={mapContainerRef} className={style} />;
}
