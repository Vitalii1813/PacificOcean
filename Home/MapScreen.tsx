import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BookedMapScreen from './BookedMapScreen';
import Maps from './Map';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const [isMapLaunched, setIsMapLaunched] = useState(false);
  const navigation = useNavigation();
  const [generatedCode, setGeneratedCode] = useState('');
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

  const [placesForDays, setPlacesForDays] = useState(generateRandomPlacesForAllDays());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState({
    day: 'Fri',
    date: '13',
    places: placesForDays[3], // Ініціалізуємо як п'ятницю
  });
  

  const handleSelectDay = (day: string, index: number) => {
    setSelectedDate(index);
    setSelectedDay({ day, date: dates[index], places: placesForDays[index] });
  };

  // Оновлюємо дані через певний час (10 хвилин у прикладі)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlacesForDays(generateRandomPlacesForAllDays());
    }, 600000); // 10 хвилин

    return () => clearInterval(intervalId);
  }, []);

  const generateRandomCode = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  // Генеруємо новий код при завантаженні компонента
  useEffect(() => {
    setGeneratedCode(generateRandomCode());
  }, []);

  return (
    <View>
      {!isMapLaunched ? (
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Date of dispatch:</Text>
          <Text style={styles.dateText}>17</Text>
        </View>
      ) : (
        <View />
      )}

      <Maps key={selectedDate} />

      <View>
        <Text style={styles.descriptionTitle}>Description</Text>
      </View>
      {!isMapLaunched ? (
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            On this page you can see which route the boat will take today. Also, the number of free places and book a trip. To cancel the trip, open the settings.
          </Text>
        </View>
      ) : (
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            If your plans have changed, you can easily cancel the reservation with just one click in the settings
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
                <Text style={styles.ofWeek}>{day}</Text>
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

            <TouchableOpacity style={styles.bookButton} onPress={() => setIsMapLaunched(!isMapLaunched)}>
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
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#073b3e",
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
  ofWeek: {
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
    marginLeft: 12,
  },
});

export default MapScreen;