import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons in React/Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const center = [41.830, -87.650]; // central Chicago-ish

const areas = [
  { name: "Hyde Park", position: [41.7943, -87.5907] },
  { name: "Kenwood", position: [41.8097, -87.5934] },
  { name: "South Loop", position: [41.8600, -87.6250] },
  { name: "Bronzeville", position: [41.8317, -87.6177] },
  { name: "West Town", position: [41.8936, -87.6722] },
  { name: "Logan Square", position: [41.9295, -87.7071] },
];

export default function ServiceAreaMap() {
  return (
    <div className="service-map-wrap">
      <MapContainer
        center={center}
        zoom={11}
        scrollWheelZoom={false}
        className="service-map"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Circle
          center={center}
          radius={9000}
          pathOptions={{ color: "#8faf9f", fillColor: "#8faf9f", fillOpacity: 0.15 }}
        />

        {areas.map((area) => (
          <Marker key={area.name} position={area.position}>
            <Popup>{area.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}