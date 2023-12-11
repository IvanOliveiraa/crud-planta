"use client";

// use client
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";

interface MapComponentProps {
  initialPosition: [number, number];
}

const MapComponent: React.FC<MapComponentProps> = () => {
  const mapRef = useRef<any>(null); // Mude para useRef<MapContainer>(null) se a versão suportar
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );

  useEffect(() => {
    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Erro ao obter a localização:", error);
        }
      );
    };

    getUserLocation();
  }, []); // Executa apenas uma vez durante a montagem do componente

  const handleDragEnd = (event: L.LeafletEvent) => {
    const marker = event.target;
    if (marker) {
      const position = marker.getLatLng();
      setUserLocation([position.lat, position.lng]);
    }
  };

  const initialPosition = userLocation || [0, 0]; // Usar a localização do usuário, se disponível

  const customIcon = new L.Icon({
    iconUrl: "/marker.png",
    iconSize: [32, 60],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const customIcon2 = new L.Icon({
    iconUrl: "/markerme.png",
    iconSize: [22, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className="border-2 rounded-[15px]">
      <MapContainer
        center={initialPosition}
        zoom={16}
        style={{ width: "100%", height: "400px" }}
        ref={mapRef}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {userLocation && (
          <Marker
            icon={customIcon2}
            position={userLocation}
            draggable={true}
            eventHandlers={{ dragend: handleDragEnd }}
          >
            <Popup>Sua posição</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
