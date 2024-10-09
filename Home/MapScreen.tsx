import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BookedMapScreen from './BookedMapScreen';
import Maps from './Map';
import { useNavigation } from '@react-navigation/native';
import DateBar from './DateBar';

const MapScreen = () => {
  const [isMapLaunched, setIsMapLaunched] = useState(false);
  const navigation = useNavigation();
  const daysOfWeek = ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];
  const dates = ['10', '11', '12', '13', '14', '15', '16'];

  const generateRandomPlacesForAllDays = () => {
    return daysOfWeek.map(() => {
      const totalPlaces = 10;
      const bookedPlaces = Math.floor(Math.random() * (totalPlaces + 1));
      return { booked: bookedPlaces, total: totalPlaces };
    });
  };

  const [placesForDays, setPlacesForDays] = useState(generateRandomPlacesForAllDays());
  const [selectedDay, setSelectedDay] = useState({
    day: 'Fri',
    date: '13',
    places: placesForDays[3], 
  });

  const handleSelectDay = (day: string, index: number) => {
    const newPlaces = placesForDays[index];
    setSelectedDay({ day, date: dates[index], places: newPlaces });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlacesForDays(generateRandomPlacesForAllDays());
    }, 600000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
      {!isMapLaunched ? (
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Date of dispatch:</Text>
          <Text style={styles.dateText}>{selectedDay.date}</Text>
        </View>
      ) : (
        <View />
      )}

      <Maps />

      <View>
        <Text style={styles.descriptionTitle}>Description</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          {!isMapLaunched 
            ? 'On this page you can see which route the boat will take today. Also, the number of free places and book a trip. To cancel the trip, open the settings.'
            : 'If your plans have changed, you can easily cancel the reservation with just one click in the settings'}
        </Text>
      </View>

      {!isMapLaunched ? (
        <DateBar
          daysOfWeek={daysOfWeek}
          dates={dates}
          selectedDay={selectedDay}
          handleSelectDay={handleSelectDay}
          setIsMapLaunched={setIsMapLaunched} previousDay={null}        />
      ) : (
        <BookedMapScreen selectedDay={null} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  descriptionContainer: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 5,
    marginBottom: 0,
  },
  descriptionText: {
    fontSize: 16,
    color: '#7A9EA0',
  },
 
  descriptionTitle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 12,
  },
});

export default MapScreen;