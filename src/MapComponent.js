import React, { useEffect, useRef } from 'react';

const MapComponent = () => {
	const mapRef = useRef(null);

	useEffect(() => {
		const restaurantAddress = 'Av. Sacadura Cabral 17A, 1100-273 Lisboa';
		const geocoder = new window.google.maps.Geocoder();

		if (window.google) {
			geocoder.geocode({ address: restaurantAddress }, function (results, status) {
				if (status === 'OK') {
					const map = new window.google.maps.Map(mapRef.current, {
						zoom: 15,
						center: results[0].geometry.location,
					});

					new window.google.maps.Marker({
						map: map,
						position: results[0].geometry.location,
					});
				} else {
					console.error('Geocode was not successful for the following reason: ' + status);
				}
			});
		}
	}, []);

	return <div id='map' ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default MapComponent;
