import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';

const MapScreen = () => {
  // Example coordinates for a random route
  const routeCoordinates = [
    { latitude: 37.3318456, longitude: -122.0296002 },
    { latitude: 38.771707, longitude: -122.4053769 },
    { latitude: 37.75223, longitude: -118.243683 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Date of dispatch */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>Date of dispatch: 17</Text>
      </View>

      {/* Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.3318456,
          longitude: -122.0296002,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
        customMapStyle={mapStyle}
      >
        {/* Polyline showing a random route */}
        <Polyline
          coordinates={routeCoordinates}
          strokeColor="#FF0000" // Line color for the route
          strokeWidth={3}
        />
        {/* Marker at the starting point */}
        <Marker coordinate={routeCoordinates[0]}>
          <View style={styles.marker}>
            <Text style={styles.markerText}>R</Text>
          </View>
        </Marker>
      </MapView>

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          On this page you can see which route the boat will take today. Also, the number of free places and book a trip. To cancel the trip, open the settings.
        </Text>
      </View>

      {/* Date Bar */}
      <View style={styles.dateBarContainer}>
        <View style={[styles.dayContainer, styles.selectedDayContainer]}>
          <Text style={styles.dayText}>Fri</Text>
          <Text style={styles.dayText}>13</Text>
        </View>
        <View style={styles.dayContainer}>
          <Text style={styles.dayText}>Sat</Text>
          <Text style={styles.dayText}>14</Text>
        </View>
        <View style={styles.dayContainer}>
          <Text style={styles.dayText}>Sun</Text>
          <Text style={styles.dayText}>15</Text>
        </View>
      </View>

      {/* Progress */}
      <Text style={styles.placesText}>6/10 places</Text>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>

      {/* Book Button */}
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Custom map style to change the water color to #227B7A
const mapStyle = [
  {
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#227B7A', // Water color
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#1D7072", // Main background color to match the design
    padding: 20,
    justifyContent: 'flex-start',
  },
  dateContainer: {
    backgroundColor: "#809E9F",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  dateText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  map: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  marker: {
    backgroundColor: "#374049",
    borderRadius: 50,
    padding: 10,
  },
  markerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: "#D1D6D7",
    opacity: 0.9,
  },
  dateBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  dayContainer: {
    backgroundColor: "#809E9F",
    borderRadius: 10,
    padding: 10,
    width: 50,
    alignItems: "center",
  },
  selectedDayContainer: {
    backgroundColor: "#344E51",
  },
  dayText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  placesText: {
    color: "#D1D6D7",
    marginBottom: 10,
    textAlign: "center",
  },
  progressBarContainer: {
    backgroundColor: "#374049",
    borderRadius: 10,
    height: 10,
    width: "80%",
    overflow: "hidden",
    marginBottom: 20,
    alignSelf: 'center',
  },
  progressBar: {
    backgroundColor: "#7EB58A",
    height: "100%",
    width: "60%",
  },
  bookButton: {
    backgroundColor: "#54666A",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 20,
    alignSelf: 'center',
  },
  bookButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MapScreen;
