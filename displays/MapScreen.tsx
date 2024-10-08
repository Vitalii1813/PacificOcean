import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>PACIFIC OCEAN</Text>
      </View>

      {/* Date Input */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Date of dispatch:</Text>
        <Text style={styles.dateText}>17</Text>
      </View>

      {/* Map */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
            <View style={styles.marker}>
              
            </View>
          </Marker>
        </MapView>
      </View>

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          On this page you can see which route the boat will take today. Also, the number of free places and book a trip. To cancel the trip, open the settings.
        </Text>
      </View>

      {/* Date Bar */}
      <View style={styles.dateBarContainer}>
        {/* Days of the week and Dates combined */}
        <View style={styles.calendarGrid}>
          {['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'].map((day, index) => (
            <View key={index} style={styles.calendarDateContainer}>
              <Text style={styles.dayOfWeek}>{day}</Text>
              <Text style={styles.dateText}>13</Text>
            </View>
          ))}
        </View>

        {/* Selected Day Section */}
        <View style={styles.selectedDayDetails}>
          <View style={styles.textAndProgress}>
            <Text style={styles.selectedDayText}>Fri 13 places</Text>

            {/* Progress Bar */}
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarFilled} />
            </View>
            <Text style={styles.placesCount}> 6/10 </Text>
          </View>

          {/* Book Button */}
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004D40',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#809E9F',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  dateLabel: {
    fontSize: 16,
    color: 'white',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  mapContainer: {
    width: '100%',
    height: 250,
    marginBottom: 20,
    overflow: 'hidden',
    borderRadius: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    backgroundColor: '#374049',
    borderRadius: 50,
    padding: 10,
  },
  markerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
  },
  dateBarContainer: {
    backgroundColor: '#809E9F',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  calendarDateContainer: {
    width: '14.28%',
    alignItems: 'center',
    marginBottom: 10,
  },
  dayOfWeek: {
    color: '#D1D6D7',
    fontSize: 16,
    marginBottom: 5,
  },
  selectedDayDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#344E51',
    borderRadius: 10,
    padding: 15,
  },
  selectedDayText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  progressBarContainer: {
    width: 100,
    height: 10,
    backgroundColor: '#374049',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFilled: {
    width: '60%',
    backgroundColor: '#7EB58A',
    height: '100%',
  },
  placesCount: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
  bookButton: {
    backgroundColor: '#54666A',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MapScreen;