"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

export default function Map() {
	const mapContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!mapContainerRef.current) return;

		let map: mapboxgl.Map;

		try {
			// Initialize the map
			map = new mapboxgl.Map({
				container: mapContainerRef.current,
				style: "mapbox://styles/mapbox/streets-v12",
				center: [10.81278, 59.89595],
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
			new mapboxgl.Marker({ color: "var(--color-primary-dark)" })
				.setLngLat([10.81278, 59.89595])
				.addTo(map);
		} catch (err) {
			console.error("Failed to initialize the map:", err);
		}

		return () => {
			map?.remove();
		};
	}, []);

	return (
		<div>
			<div
				ref={mapContainerRef}
				style={{ width: "100%", height: "500px" }}
			/>
		</div>
	);
}
