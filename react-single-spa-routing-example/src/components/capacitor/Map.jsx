import React, { useState } from "react";

import { GoogleMap } from "@capacitor/google-maps";
import { useRef } from "react";

const MyMap = () => {
  const mapRef = useRef();
  let newMap;

  const [journeys, setJourneys] = useState([
    {
      start: { lat: 51.481583, lng: -3.17909 },
      end: { lat: 51.5007292, lng: -0.1268141 },
    },
    {
      start: { lat: 51.481583, lng: -3.17909 },
      end: { lat: 51.454513, lng: -2.58791 },
    },
    {
      start: { lat: 51.481583, lng: -3.17909 },
      end: { lat: 51.4613, lng: -2.4603 },
    },
  ]);

  async function createMap() {
    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: "my-cool-map",
      element: mapRef.current,
      apiKey: "AIzaSyBv6YWXJXv1FIr0bRf2GubImYgKj0-rdEw",
      config: {
        center: {
          lat: 51.481583,
          lng: -3.17909,
        },
        zoom: 12,
      },
    });

    const markerId = await newMap.addMarker({
      coordinate: {
        lat: 33.6,
        lng: -117.9,
      },
    });

    // add a marker for each journey start and end

    journeys.forEach(async (journey) => {
      await newMap.addMarker({
        coordinate: {
          lat: journey.start.lat,
          lng: journey.start.lng,
        },
      });

      await newMap.addMarker({
        coordinate: {
          lat: journey.end.lat,
          lng: journey.end.lng,
        },
      });
      // await newMap.addPolyline({
      //     points: [journey.start, journey.end],
      //     map: newMap,
      //     color: '#FF0000',
      //     width: 2
      //   });
    });
  }

  return (
    <div className="component-wrapper">
      <capacitor-google-map
        ref={mapRef}
        style={{
          display: "inline-block",
          width: 275,
          height: 400,
        }}
      ></capacitor-google-map>

      <button onClick={createMap}>Create Map</button>
    </div>
  );
};

export default MyMap;
