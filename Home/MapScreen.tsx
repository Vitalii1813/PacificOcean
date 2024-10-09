import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BookedMapScreen from './BookedMapScreen';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const [isMapLaunched, setIsMapLaunched] = useState(false);
  const handleLaunchMap = () => {
    setIsMapLaunched(!isMapLaunched);
  };
  const navigation = useNavigation();
  const handleImagePress = () => {
    navigation.navigate('Settings');
  };
  const daysOfWeek = ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];
  const dates = ['10', '11', '12', '13', '14', '15', '16'];
  // Функція для генерації кількості заброньованих місць для кожного дня
  const generateRandomPlacesForAllDays = () => {
    return daysOfWeek.map(() => {
      const totalPlaces = 10;
      const bookedPlaces = Math.floor(Math.random() * (totalPlaces + 1));
      return { booked: bookedPlaces, total: totalPlaces };
    });
  };

  // Стан для зберігання кількості місць для кожного дня
  const [placesForDays, setPlacesForDays] = useState(generateRandomPlacesForAllDays());

  // Стан для вибраного дня
  const [selectedDay, setSelectedDay] = useState({
    day: 'Fri',
    date: '13',
    places: placesForDays[3], // Ініціалізуємо як п'ятницю
  });

  // Оновлюємо дані через певний час (10 хвилин у прикладі)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlacesForDays(generateRandomPlacesForAllDays());
    }, 600000); // 10 хвилин

    return () => clearInterval(intervalId);
  }, []);

  // Обробка вибору дня
  const handleSelectDay = (day, index) => {
    setSelectedDay({ day, date: dates[index], places: placesForDays[index] });
  };

  return (
    <View>
      {!isMapLaunched ? (
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Date of dispatch:</Text>
          <Text style={styles.dateText}>17</Text>
        </View>) : (
        <View></View>
      )}

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          zoomEnabled={true}      // Дозволяє збільшення/зменшення масштабу
          scrollEnabled={true}    // Дозволяє прокручування карти
          pitchEnabled={true}     // Дозволяє нахил карти
          rotateEnabled={true}    // Дозволяє обертання карти
        >
          <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
            <View style={styles.marker} />
          </Marker>
        </MapView>
      </View>


      <View><Text style={styles.descriptionTitle}>Description</Text></View>
      {!isMapLaunched ? (<View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          On this page you can see which route the boat will take today. Also, the number of free places and book a trip. To cancel the trip, open the settings.
        </Text>
      </View>) : (
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            If your plans have changed, you can easily cancel the
            reservation with just one click in the settings
          </Text>
        </View>
      )}


      {!isMapLaunched ? (
          <View style={styles.dateBarContainer}>
          {/* Сітка календаря */}
          <View style={styles.calendarGrid}>
            {daysOfWeek.map((day, index) => (
              <TouchableOpacity
                key={index}
                style={styles.calendarDateContainer}
                onPress={() => handleSelectDay(day, index)}
              >
                <Text style={styles.dayOfWeek}>{day}</Text>
                <Text style={styles.dateText}>{dates[index]}</Text>
              </TouchableOpacity>
            ))}
          </View>
    
          {/* Деталі вибраного дня */}
          <View style={styles.selectedDayDetails}>
            <View style={styles.textAndProgress}>
              <Text style={styles.selectedDayText}>
                {selectedDay.day} {selectedDay.date} places
              </Text>
              <View style={styles.progressBarContainer}>
                <View
                  style={[
                    styles.progressBarFilled,
                    { width: `${(selectedDay.places.booked / selectedDay.places.total) * 100}%` },
                  ]}
                />
              </View>
              <Text style={styles.placesCount}>
                {selectedDay.places.booked}/{selectedDay.places.total}
              </Text>
            </View>
    
            <TouchableOpacity style={styles.bookButton} onPress={handleLaunchMap}>
              <Text style={styles.bookButtonText}>Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <><BookedMapScreen/></>
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
    marginBottom: 30,
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
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: '#7A9EA0',

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
  descriptionTitle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 12
  }
});

export default MapScreen;