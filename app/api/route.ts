import { NextResponse } from "next/server";

// Dummy buses data
interface Bus {
  id: number;
  lat: number;
  lng: number;
  route: number;
}

let buses: Bus[] = [
  { id: 1, route: 613, lat: 45.025649, lng: -123.012577 }, // Example taxi 1
  { id: 2, route: 617, lat: 45.028329, lng: -123.025177 }, // Example taxi 2
  { id: 3, route: 619, lat: 45.0249902, lng: -123.0141797 }, // Example taxi 3
  { id: 4, route: 622, lat: 44.9076088842247, lng: -122.89587442066878 },
  { id: 5, route: 620, lat: 44.9034169561525, lng: -122.90895117097313 },
  { id: 6, route: 618, lat: 44.91844930965937, lng: -122.96211229215851 },
  { id: 7, route: 621, lat: 44.92036705733273, lng: -122.96922451804566 },
  { id: 8, route: 615, lat: 44.92803214619825, lng: -122.97273105515303 },
  { id: 9, route: 616, lat: 44.942281515205856, lng: -122.9913255909044 },
  { id: 10, route: 617, lat: 44.94214260301118, lng: -122.99130868507162 },
  { id: 11, route: 623, lat: 44.942281515205866, lng: -122.9913255909072 },
  { id: 12, route: 625, lat: 44.942281515205886, lng: -122.9913255909055 },
  { id: 13, route: 626, lat: 44.942281515205869, lng: -122.9913255909056 },
  { id: 14, route: 627, lat: 44.94228151520587, lng: -122.9913255909066 },
  { id: 15, route: 628, lat: 44.94228151520586, lng: -122.9913255909045 },
  { id: 16, route: 629, lat: 44.904748572927716, lng: -123.0320695337723 },
  { id: 17, route: 630, lat: 44.90504155495765, lng: -123.03690100202458 },
  { id: 18, route: 631, lat: 44.90679447057719, lng: -123.04881886190452 },
  { id: 19, route: 632, lat: 44.89756206022196, lng: -123.04699746591199 },
  { id: 20, route: 633, lat: 44.88305416230516, lng: -123.06117866287745 },
  { id: 21, route: 634, lat: 44.85164811622397, lng: -123.02704171479395 },
  // Add more taxi data as needed
];

export async function GET() {
  buses = buses.map((bus) => ({
    ...bus,
    lat: bus.lat + Math.random() * 0.01 - 0.005,
    lng: bus.lng + Math.random() * 0.01 - 0.005,
  }));

  return NextResponse.json({
    buses,
  });
}
