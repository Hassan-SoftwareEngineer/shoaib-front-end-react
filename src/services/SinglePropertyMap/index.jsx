import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";

function SinglePropertyMap({ SinglePropertyDetail }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      map.setView([SinglePropertyDetail?.latitude ? SinglePropertyDetail?.latitude : 0, SinglePropertyDetail?.longitude ? SinglePropertyDetail?.longitude : 0], 15);
    }
  }, [SinglePropertyDetail]);

  return (
    <MapContainer ref={mapRef} className="main" style={{ height: "70vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
      
      <Marker position={[SinglePropertyDetail?.latitude ? SinglePropertyDetail?.latitude : 0, SinglePropertyDetail?.longitude ? SinglePropertyDetail?.longitude : 0]}>
      
        <Tooltip permanent={true} style={{ fontSize: "80px" }} className="custom-tooltip">
          {SinglePropertyDetail?.night_rate}$ <br></br><b>{SinglePropertyDetail?.location}</b>
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}

export default SinglePropertyMap;