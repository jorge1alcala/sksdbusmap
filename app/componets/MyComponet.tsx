"use client";

import React, { useEffect } from "react";
import { faBus } from "@fortawesome/free-solid-svg-icons";

const MapComponent: React.FC = () => {
  useEffect(() => {
    const center = { lat: 36.6163, lng: -100.605 };

    const map = new window.google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 15,
        center,
      }
    );

    // Add a FontAwesome SVG marker
    new window.google.maps.Marker({
      position: { lat: 36.6163, lng: -100.61 },
      map,
      icon: {
        path: faBus.icon[4] as string,
        fillColor: "#0000ff",
        fillOpacity: 1,
        anchor: new window.google.maps.Point(
          faBus.icon[0] / 2, // width
          faBus.icon[1] // height
        ),
        strokeWeight: 1,
        strokeColor: "#ffffff",
        scale: 0.075,
      },
      title: "FontAwesome SVG Marker",
    });

    // Add a Material Icon font marker
    new window.google.maps.Marker({
      position: { lat: 36.6163, lng: -100.6 },
      map,
      label: {
        text: "\ue530", // codepoint from https://fonts.google.com/icons
        fontFamily: "Material Icons",
        color: "#ffffff",
        fontSize: "18px",
      },
      title: "Material Icon Font Marker",
    });
  }, []); // Empty dependency array means "run this once on first mount"

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default MapComponent;
