import { useEffect, useRef, useState } from "react";

function ServiceAreaMap() {
  const mapRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let intervalId;

    const initMap = () => {
      if (!window.google || !window.google.maps || !mapRef.current) {
        setError("Google Maps failed to load.");
        return;
      }

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 41.8505, lng: -87.6505 },
        zoom: 11,
        disableDefaultUI: true,
      });

      const serviceZones = [
        {
          name: "South Lakefront",
          center: { lat: 41.7945, lng: -87.594 },
          radius: 4200,
        },
        {
          name: "Southwest",
          center: { lat: 41.8315, lng: -87.673 },
          radius: 2600,
        },
        {
          name: "South Loop",
          center: { lat: 41.8575, lng: -87.6255 },
          radius: 1800,
        },
        {
          name: "Near Northwest",
          center: { lat: 41.9085, lng: -87.6775 },
          radius: 3000,
        },
      ];

      serviceZones.forEach((zone) => {
        const circle = new window.google.maps.Circle({
          strokeColor: "#5a7d6a",
          strokeOpacity: 0.9,
          strokeWeight: 2,
          fillColor: "#5a7d6a",
          fillOpacity: 0.14,
          map,
          center: zone.center,
          radius: zone.radius,
        });

        circle.addListener("click", () => {
          console.log(zone.name);
        });
      });
    };

    if (window.google && window.google.maps) {
      initMap();
    } else {
      intervalId = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(intervalId);
          initMap();
        }
      }, 300);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height: "420px",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      />
    </div>
  );
}

export default ServiceAreaMap;