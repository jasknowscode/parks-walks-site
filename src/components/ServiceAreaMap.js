import { useEffect, useRef, useState } from "react";

function ServiceAreaMap() {
  const mapRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      setError("Google Maps API key is missing.");
      return;
    }

    let cancelled = false;
    let intervalId;

    const initMap = async () => {
      try {
        if (!window.google || !window.google.maps || !mapRef.current) {
          setError("Google Maps failed to load.");
          return;
        }

        const { Map, Circle } = await window.google.maps.importLibrary("maps");

        if (cancelled || !mapRef.current) return;

        const chicagoCenter = { lat: 41.8369, lng: -87.6486 };

        const map = new Map(mapRef.current, {
          center: chicagoCenter,
          zoom: 11,
          disableDefaultUI: true,
        });

        new Circle({
          map,
          center: chicagoCenter,
          radius: 9875,
          strokeColor: "#5a7d6a",
          strokeOpacity: 0.9,
          strokeWeight: 2,
          fillColor: "#5a7d6a",
          fillOpacity: 0.14,
        });
      } catch (err) {
        console.error(err);
        setError("Google Maps failed to initialize.");
      }
    };

    const existingScript = document.querySelector(
      'script[data-google-maps="true"]'
    );

    if (window.google && window.google.maps) {
      initMap();
      return () => {
        cancelled = true;
        if (intervalId) clearInterval(intervalId);
      };
    }

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async`;
      script.async = true;
      script.defer = true;
      script.dataset.googleMaps = "true";
      script.onload = () => initMap();
      script.onerror = () => {
        setError("Google Maps script failed to load.");
      };
      document.head.appendChild(script);
    } else {
      intervalId = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(intervalId);
          initMap();
        }
      }, 300);
    }

    return () => {
      cancelled = true;
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="service-map-wrap">
      {error && <p>{error}</p>}
      <div ref={mapRef} className="service-map" />
    </div>
  );
}

export default ServiceAreaMap;