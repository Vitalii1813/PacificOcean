import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline, Region } from 'react-native-maps';

// Функція для генерації випадкових координат з більшим розкидом
const getRandomNearbyCoordinates = (baseCoordinate: { latitude: number; longitude: number }, rangeFactor: number) => {
  const randomOffset = (range: number) => (Math.random() - 0.5) * range * rangeFactor;
  const latitude = baseCoordinate.latitude + randomOffset(1); // Діапазон пропорційний масштабу
  const longitude = baseCoordinate.longitude + randomOffset(1);
  return { latitude, longitude };
};

const Map: React.FC = () => {
  const [markers, setMarkers] = useState<{ latitude: number; longitude: number }[]>([]);
  const [region, setRegion] = useState<Region>({
    latitude: 15.0,
    longitude: 10.0,
    latitudeDelta: 20.0, // Початковий масштаб
    longitudeDelta: 20.0,
  });

  useEffect(() => {
    // Генеруємо маркери лише при першому рендері
    const baseCoordinate = { latitude: 15.0, longitude: 10.0 };
    const randomMarkers = Array.from({ length: 4 }, () => getRandomNearbyCoordinates(baseCoordinate, region.latitudeDelta));
    setMarkers(randomMarkers);
  }, []); // Порожній масив залежностей забезпечує виконання лише при першому завантаженні

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={setRegion} // Оновлюємо тільки регіон
        zoomEnabled={true}
        scrollEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
      >
        {markers.map((marker, index) => (
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

        {/* Лінія, що з'єднує маркери */}
        {markers.length > 1 && (
          <Polyline
            coordinates={markers}
            strokeColor="#1E90FF" // Колір лінії - синій для кращого контрасту
            strokeWidth={4}       // Товщина лінії
            lineDashPattern={[10, 5]} // Пунктирна лінія з великими пропусками
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 400, // Висота для кращого перегляду
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
    backgroundColor: '#FFD700', // Яскраво-жовтий колір для маркера
    borderRadius: 7,
  },
});

export default Map;
