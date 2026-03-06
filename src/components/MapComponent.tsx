"use client";

import { useEffect, useState } from "react";
// @ts-ignore
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// @ts-ignore
import L from "leaflet";

// Fix for default marker icons in Leaflet with Next.js
const icon = typeof window !== 'undefined' ? L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
}) : null;

interface LocationPickerProps {
  onLocationSelect: (lat: number, lng: number) => void;
}

const LocationMarker = ({ onLocationSelect }: LocationPickerProps) => {
  const [position, setPosition] = useState<any>(null);
  const map = useMapEvents({
    click(e: any) {
      setPosition(e.latlng);
      onLocationSelect(e.latlng.lat, e.latlng.lng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null || icon === null ? null : (
    <Marker position={position} icon={icon}></Marker>
  );
};

const MapComponent = ({ onLocationSelect }: LocationPickerProps) => {
  const [mounted, setMounted] = useState(false);
  const defaultCenter: [number, number] = [28.6139, 77.2090]; // Default to New Delhi (example)

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[400px] w-full bg-slate-100 animate-pulse rounded-xl"></div>;

  return (
    <div className="h-[400px] w-full lg:h-[600px] rounded-xl overflow-hidden shadow-md border border-gray-200 z-0 relative">
      <MapContainer
        center={defaultCenter}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker onLocationSelect={onLocationSelect} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
