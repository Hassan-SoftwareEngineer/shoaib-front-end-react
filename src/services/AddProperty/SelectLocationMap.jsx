import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';


function SelectionMap({ markerPosition, setMarkerPosition, setlocation }) {

	const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      map.setView([markerPosition?.lat ? markerPosition?.lat : 0, markerPosition?.long ? markerPosition?.long : 0], 15);
	  map.flyTo(markerPosition);

    }
  }, [markerPosition]);

	const handleMapClick = async (e) => {
		setMarkerPosition(e.latlng);
		try {
			const geocodingAPI = `https://www.mapquestapi.com/geocoding/v1/reverse?key=GOLjOmQOmIVdCg06IRzaP9QWsF0Nz3LJ&location=${e?.latlng?.lat},${e.latlng?.lng}`;
			const response = await axios.get(geocodingAPI);

			setlocation(`${response.data.results[0]?.locations[0]?.adminArea5Type} , ${response.data.results[0]?.locations[0]?.adminArea4} , ${response.data.results[0]?.locations[0]?.adminArea5}`)
			console.log('Location Name:', response.data.results[0]?.locations[0]?.adminArea4);
			console.log('Location 1:', response.data.results[0]?.locations[0]?.adminArea5Type);
			console.log('Location 2:', response.data.results[0]?.locations[0]?.adminArea5);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const MapClickHandler = () => {
		useMapEvents({
			click: handleMapClick,
		});

		return null;
	};


	return (
		<MapContainer ref={mapRef} className="main"  style={{ height: '400px' }}   scrollWheelZoom={true}>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			{markerPosition && <Marker position={markerPosition} />}
			<MapClickHandler />
		</MapContainer>
	);
}

export default SelectionMap;