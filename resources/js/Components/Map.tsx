import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from '../../../public/images/map/map-pin-svgrepo-com.svg'; // Adjust the path as needed

// Create a custom icon
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  iconSize: [25, 41], // Adjust the size as needed
  iconAnchor: [12, 41], // Adjust the anchor as needed
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  shadowSize: [41, 41], // Adjust the shadow size as needed
});

type params = {
    c1?: number;
    c2?: number;
    popup?: string;
}

export default function Map(p: params) {
    const center: [number, number] = p.c1 && p.c2 ? [p.c1, p.c2] : [50.8503, 4.3517]

    return (
    <div style={{ height: '50vh', width: '100%' }}>
      <MapContainer center={center} zoom={12} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center} icon={customIcon}>
          <Popup>{p.popup ? p.popup : "Welcome to Brussels!"}</Popup>
        </Marker>
      </MapContainer>
    </div>
    );
}
