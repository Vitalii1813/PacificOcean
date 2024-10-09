import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import MapView, { Marker, Polyline, Region } from 'react-native-maps';

const predefinedRoutesArray = [
  [ // Масив 1 - Південноафриканська Республіка
    { latitude: -33.9249, longitude: 18.4241 }, // Кейптаун
    { latitude: -26.2041, longitude: 28.0473 }, // Йоганнесбург
    { latitude: -29.8587, longitude: 31.0218 }, // Дурбан
  ],
  [ // Масив 2 - Кенія
    { latitude: -1.286389, longitude: 36.817223 }, // Найробі
    { latitude: -1.2865, longitude: 36.8172 },     // Найробі (позначення)
    { latitude: -3.2287, longitude: 35.6895 },     // Масай-Мара
  ],
  [ // Масив 3 - Нігерія
    { latitude: 6.5244, longitude: 3.3792 },      // Лагос
    { latitude: 8.9806, longitude: 7.4951 },      // Абуджа
    { latitude: 12.6392, longitude: 8.5619 },     // Кано
  ],
  [ // Масив 4 - Єгипет
    { latitude: 30.0444, longitude: 31.2357 },    // Каїр
    { latitude: 25.7617, longitude: 32.7157 },    // Луксор
    { latitude: 27.0189, longitude: 31.2001 },     // Асуан
  ],
  [ // Масив 5 - Танзанія
    { latitude: -6.7924, longitude: 39.2083 },    // Дар-ес-Салам
    { latitude: -3.3674, longitude: 38.1494 },    // Нгоронгоро
    { latitude: -6.8652, longitude: 38.1962 },     // Кіліманджаро
  ],
  [ // Масив 6 - Уганда
    { latitude: 0.3476, longitude: 32.5825 },     // Кампала
    { latitude: 1.3733, longitude: 32.2903 },     // Мбале
    { latitude: 0.6000, longitude: 32.6580 },     // Джинджа
  ],
  [ // Масив 7 - Гана
    { latitude: 5.6037, longitude: -0.1870 },     // Аккра
    { latitude: 7.0220, longitude: -0.5130 },     // Кумасі
    { latitude: 5.6460, longitude: -1.5771 },     // Такораді
  ],
];

const getRandomRoutes = () => {
  const randomIndex = Math.floor(Math.random() * predefinedRoutesArray.length);
  return predefinedRoutesArray[randomIndex];
};

const Map: React.FC = () => {
  const [predefinedRoutes, setPredefinedRoutes] = useState(getRandomRoutes());
  const [region, setRegion] = useState<Region>({
    latitude: -2.0, // Середина Африки
    longitude: 23.0,
    latitudeDelta: 10.0,
    longitudeDelta: 10.0,
  });

  const mapRef = useRef<MapView | null>(null);

  useEffect(() => {
    if (mapRef.current && predefinedRoutes.length > 0) {
      mapRef.current.fitToCoordinates(predefinedRoutes, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true,
      });
    }
  }, [predefinedRoutes]);

  const zoomIn = () => {
    setRegion((prevRegion) => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta / 2,
      longitudeDelta: prevRegion.longitudeDelta / 2,
    }));
  };

  const zoomOut = () => {
    setRegion((prevRegion) => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta * 2,
      longitudeDelta: prevRegion.longitudeDelta * 2,
    }));
  };

  return (
    <View style={styles.mapContainer}>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
        zoomEnabled={true}
        scrollEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
      >
        {predefinedRoutes.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker}
            title={`Point ${index + 1}`}
          >
            <View style={styles.marker}>
              <View style={styles.markerInner} />
            </View>
          </Marker>
        ))}

        {predefinedRoutes.length > 1 && (
          <Polyline
            coordinates={predefinedRoutes}
            strokeColor="#1E90FF"
            strokeWidth={4}
            lineDashPattern={[10, 5]}
          />
        )}
      </MapView>

      <View style={styles.zoomButtons}>
        <Button title="+" onPress={zoomIn} />
        <Button title="-" onPress={zoomOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 290,
    marginBottom: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  markerInner: {
    width: 14,
    height: 14,
    backgroundColor: '#FFD700',
    borderRadius: 7,
  },
  zoomButtons: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
  },
});

export default Map;