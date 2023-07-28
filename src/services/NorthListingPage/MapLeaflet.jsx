import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from "react-leaflet";
import { LatLngBounds } from "leaflet";

function Map({ Data }) {
  const [center, setCenter] = useState([0, 0]);
  const markersRef = useRef(null);

  useEffect(() => {
    if (Data && Data.length > 0) {
      let totalLatitude = 0;
      let totalLongitude = 0;
      let minLatitude = 90;
      let maxLatitude = -90;
      let minLongitude = 180;
      let maxLongitude = -180;

      Data.forEach((city) => {
        totalLatitude += city?.latitude;
        totalLongitude += city?.longitude;
        minLatitude = Math.min(minLatitude, city.latitude);
        maxLatitude = Math.max(maxLatitude, city.latitude);
        minLongitude = Math.min(minLongitude, city.longitude);
        maxLongitude = Math.max(maxLongitude, city.longitude);
      });

      const avgLatitude = totalLatitude / Data.length;
      const avgLongitude = totalLongitude / Data.length;
      const bounds = new LatLngBounds(
        [minLatitude, minLongitude],
        [maxLatitude, maxLongitude]
      );

      setCenter([avgLatitude, avgLongitude]);
      markersRef.current = bounds;
    }
  }, [Data]);

  const FitBounds = () => {
    const map = useMap();

    useEffect(() => {
      if (markersRef.current) {
        map.fitBounds(markersRef.current);
      }
    }, [map]);

    return null;
  };

  return (
    <MapContainer className="main" center={center} scrollWheelZoom={true} style={{ height: "70vh" }}>
      <FitBounds />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {Data && Data.length > 0 && (
        Data.map((city, idx) => (
          <Marker position={[city.latitude, city.longitude]} key={idx}>
            <Popup>
              <b>{city.night_rate}$</b>
            </Popup>
            <Tooltip permanent={true} style={{ fontSize: "50px" }}>
              {city.night_rate}$
            </Tooltip>
          </Marker>
        ))
      )}
    </MapContainer>
  );
}

export default Map;
