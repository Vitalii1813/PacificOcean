import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BookedMapScreen from './BookedMapScreen';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const [isMapLaunched, setIsMapLaunched] = useState(false);
  const navigation = useNavigation();

  const handleImagePress = () => {
    navigation.navigate('Settings');
  };

  const handleLaunchMap = () => {
    setIsMapLaunched(true);
  };

  return (
    <View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Date of dispatch:</Text>
        <Text style={styles.dateText}>17</Text>
      </View>

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
            <View style={styles.marker} />
          </Marker>
        </MapView>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          On this page you can see which route the boat will take today. Also, the number of free places and book a trip. To cancel the trip, open the settings.
        </Text>
      </View>

      {!isMapLaunched ? (
        <View style={styles.dateBarContainer}>
          <View style={styles.calendarGrid}>
            {['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'].map((day, index) => (
              <View key={index} style={styles.calendarDateContainer}>
                <Text style={styles.dayOfWeek}>{day}</Text>
                <Text style={styles.dateText}>13</Text>
              </View>
            ))}
          </View>

          <View style={styles.selectedDayDetails}>
            <View style={styles.textAndProgress}>
              <Text style={styles.selectedDayText}>Fri 13 places</Text>
              <View style={styles.progressBarContainer}>
                <View style={styles.progressBarFilled} />
              </View>
              <Text style={styles.placesCount}> 6/10 </Text>
            </View>

            <TouchableOpacity style={styles.bookButton} onPress={handleLaunchMap}>
              <Text style={styles.bookButtonText}>Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <BookedMapScreen />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerNew: {

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#7A9EA0",
    textAlign: 'center',
    marginRight: 28,
    marginLeft: 25
  },
  settings_img: {
    width: 24,
    height: 24,
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