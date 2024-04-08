This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Overview

Goal: Create a Google Map application that displays the real-time locations of school buses for the Salem Keizer School District. Users should be able to search for specific buses and view details such as bus number, time, and route.

## Data Source:

API that provides real-time school bus location data
Technical Implementation:

1. Set up Google Cloud Platform (GCP) Project:

Create a new GCP project and enable the Google Maps Platform API.
Obtain an API key for the project. 2. Create a Google Map:

Use the Google Maps JavaScript API to create a map centered on the Salem Keizer School District area.
Add a layer to the map to display the bus locations. 3. Fetch Bus Data from API:

Make API calls to retrieve real-time bus location data.
Parse the data and extract relevant information such as bus number, time, and route. 4. Display Bus Locations on Map:

Use the Google Maps API to create markers for each bus location.
Set the marker position based on the latitude and longitude provided by the API.
Customize the marker icon to represent a school bus. 5. Implement Search Functionality:

Create a search bar that allows users to enter a bus number or route.
Use the Google Maps API's Geocoding service to convert the search query into a location.
Filter the bus data to find the matching bus and display its location on the map. 6. Display Bus Details:

When a user clicks on a bus marker, display a pop-up window with details such as:
Bus number
Current time
Route information 7. Manage Bus Updates:

Set up a mechanism to periodically fetch updated bus location data from the API.
Update the bus markers on the map in real-time to reflect the new locations.
Additional Features:

Zoom and Pan Controls: Allow users to zoom in and out of the map and pan around the area.
Legend: Include a legend on the map to explain the different marker colors or icons.
Traffic Layer: Add a traffic layer to the map to provide users with information about traffic conditions.
Mobile Optimization: Optimize the application for mobile devices to ensure a seamless user experience on smartphones and tablets.
