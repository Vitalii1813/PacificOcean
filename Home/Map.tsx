import React, {useState, useRef, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {View, StyleSheet, Button} from 'react-native';
import MapView, {Marker, Polyline, Region} from 'react-native-maps';

const Map: React.FC = ({
  selectedDate,
  selectedOption,
}: {
  selectedDate: any;
  selectedOption: any;
}) => {
  const mapRef = useRef<MapView | null>(null);

  const routeCoordinates = [
    [
      {latitude: 55.0522, longitude: -135.2437},
      {latitude: 50.0522, longitude: -175.2437},
      {latitude: 20.0522, longitude: -175.2437},
      {latitude: 55.0522, longitude: -135.2437},
    ],
    [
      {latitude: 55.0522, longitude: -135.2437},
      {latitude: 40.0522, longitude: -135.2437},
      {latitude: 20.0522, longitude: -115.2437},
      {latitude: 0.0522, longitude: -85.2437},
    ],
    [
      {latitude: 55.0522, longitude: -135.2437},
      {latitude: 50.0522, longitude: -175.2437},
      {latitude: 0.0522, longitude: -175.2437},
      {latitude: 0.0522, longitude: -145.2437},
      {latitude: 55.0522, longitude: -135.2437},
    ],
    [
      {latitude: 55.0522, longitude: -135.2437},
      {latitude: 50.0522, longitude: -175.2437},
      {latitude: -10.0522, longitude: -175.2437},
      {latitude: -10.0522, longitude: -155.2437},
      {latitude: -20.0522, longitude: -145.2437},
      {latitude: -20.0522, longitude: -105.2437},
      {latitude: 20.0522, longitude: -145.2437},
      {latitude: 55.0522, longitude: -135.2437},
    ],
    [
      {latitude: 55.0522, longitude: -135.2437},
      {latitude: 0.0522, longitude: -125.2437},
      {latitude: 20.0522, longitude: -175.2437},
      {latitude: 55.0522, longitude: -135.2437},
    ],
    [
      {latitude: 55.0522, longitude: -135.2437},
      {latitude: 0.0522, longitude: -135.2437},
      {latitude: -20.0522, longitude: -105.2437},
      {latitude: -0.0522, longitude: -165.2437},
      {latitude: 30.0522, longitude: -165.2437},
      {latitude: 55.0522, longitude: -135.2437},
    ],
    [
      {latitude: 55.0522, longitude: -135.2437},
      {latitude: 50.0522, longitude: -175.2437},
      {latitude: 20.0522, longitude: -175.2437},
      {latitude: 0.0522, longitude: -135.2437},
      {latitude: 55.0522, longitude: -135.2437},
    ],
  ];

  const routeSailingCoordinates = [
    [
      {latitude: 55.0522, longitude: -135.2437},
      {latitude: 50.0522, longitude: -175.2437},
      {latitude: 20.0522, longitude: -175.2437},
      {latitude: 0.0522, longitude: -135.2437},
      {latitude: 55.0522, longitude: -135.2437},
    ],
    [
      {latitude: 55.0522, longitude: -135.2437},
      {latitude: 40.0522, longitude: -135.2437},
      {latitude: 20.0522, longitude: -115.2437},
      {latitude: 0.0522, longitude: -85.2437},
    ],

    [
      {latitude: 55.0522, longitude: -135.2437},
      {latitude: 50.0522, longitude: -175.2437},
      {latitude: 20.0522, longitude: -175.2437},
      {latitude: 55.0522, longitude: -135.2437},
    ],
    [
      {latitude: 55.0522, longitude: -135.2437},
      {latitude: 50.0522, longitude: -175.2437},
      {latitude: -10.0522, longitude: -175.2437},
      {latitude: -10.0522, longitude: -155.2437},
      {latitude: -20.0522, longitude: -145.2437},
      {latitude: -20.0522, longitude: -105.2437},
      {latitude: 20.0522, longitude: -145.2437},
      {latitude: 55.0522, longitude: -135.2437},
    ],
    [
      {latitude: 55.0522, longitude: -135.2437},
      {latitude: 0.0522, longitude: -125.2437},
      {latitude: 20.0522, longitude: -175.2437},
      {latitude: 55.0522, longitude: -135.2437},
    ],
    [
      {latitude: 55.0522, longitude: -135.2437},
      {latitude: 0.0522, longitude: -135.2437},
      {latitude: -20.0522, longitude: -105.2437},
      {latitude: -0.0522, longitude: -165.2437},
      {latitude: 30.0522, longitude: -165.2437},
      {latitude: 55.0522, longitude: -135.2437},
    ],
    [
      {latitude: 55.0522, longitude: -135.2437},
      {latitude: 50.0522, longitude: -175.2437},
      {latitude: 0.0522, longitude: -175.2437},
      {latitude: 0.0522, longitude: -145.2437},
      {latitude: 55.0522, longitude: -135.2437},
    ],
  ];

  return (
    <View style={styles.mapContainer}>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={{
          latitude: 20.0522, // Середина Африки
          longitude: -130.2437,
          latitudeDelta: 100,
          longitudeDelta: 0.1,
        }}
        zoomEnabled={false}
        scrollEnabled={false}
        pitchEnabled={false}
        rotateEnabled={false}>
        {/* Додаємо лінію маршруту */}
        <Polyline
          coordinates={
            selectedOption === 'sailing'
              ? routeSailingCoordinates[selectedDate]
              : routeCoordinates[selectedDate]
          }
          strokeColor="#FF0000" // Колір лінії (червоний)
          strokeWidth={3} // Товщина лінії
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: '90%',
    height: Dimensions.get('screen').height * 0.35,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  marker: {
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
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
