"use client";
import React, { useEffect, useState } from "react";
import {
  APIProvider,
  AdvancedMarker,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";

const Googlemap = () => {
  const [buses, setBuses] = useState<any[]>([]);
  console.log(buses);
  useEffect(() => {
    const fetchBusesData = async () => {
      try {
        const responce = await fetch("http://localhost:3000/api");
        const data = await responce.json();

        setBuses(data.buses);
      } catch (error) {
        console.log("Error fetching school buses data:", error);
      }
    };

    // Fetch taxi data periodically (every 30 seconds)
    const interval = setInterval(fetchBusesData, 10000);

    // Initial fetch
    fetchBusesData();

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <Map
        zoom={11}
        center={{ lat: 44.94291830769146, lng: -123.03498208934943 }}
        mapId="a8e6f337dba53b0"
      >
        {buses.map((bus) => (
          <AdvancedMarker
            key={bus.id}
            position={{ lat: bus.lat, lng: bus.lng }}
          >
            <span className=" resize">{`${bus.route}`}🚌</span>
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
};

export default Googlemap;
