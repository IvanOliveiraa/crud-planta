"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useRef } from "react";
import L from "leaflet";

type Position = [any, any];

interface MapComponentProps {
  initialPosition: Position;
}

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro durante a solicitação:", error);
    throw error; // Rejeita a promessa para que o erro possa ser capturado externamente
  }
};

const MapComponent: React.FC<MapComponentProps> = ({ initialPosition }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await fetchData();
        console.log("Dados recebidos:", data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    // Verifica se o componente está sendo renderizado no lado do cliente
    if (typeof window !== "undefined") {
      fetchDataFromApi();
    }
  }, []);
  const customIcon = new L.Icon({
    iconUrl: "/marker.png", // Substitua pelo caminho real do seu ícone
    iconSize: [32, 60], // Tamanho do ícone
    iconAnchor: [16, 32], // Posição do ponto de ancoragem em relação ao ícone
    popupAnchor: [0, -32], // Posição do ponto de ancoragem do popup em relação ao ícone
  });
  const customIcon2 = new L.Icon({
    iconUrl: "/markerme.png", // Substitua pelo caminho real do seu ícone
    iconSize: [22, 40], // Tamanho do ícone
    iconAnchor: [16, 32], // Posição do ponto de ancoragem em relação ao ícone
    popupAnchor: [0, -32], // Posição do ponto de ancoragem do popup em relação ao ícone
  });
  return (
    <div className=" border-2 rounded-[15px]">
      <MapContainer
        center={initialPosition}
        zoom={16}
        style={{ width: "100%", height: "400px" }}
        ref={mapRef}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker icon={customIcon} position={initialPosition}>
          <Popup>ultima posição publicada da planta</Popup>
        </Marker>
        <Marker icon={customIcon2} position={[-8.745667, -63.864312]}></Marker>
      </MapContainer>
    </div>
  );
};

// Adicione a diretiva `use client` na linha abaixo se necessário
export { MapComponent as default, fetchData };
