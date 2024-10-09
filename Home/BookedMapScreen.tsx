import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BookedMapScreen = () => {
  const [isMapLaunched, setIsMapLaunched] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const handleLaunchMap = () => {
    setIsMapLaunched(!isMapLaunched)
  }
  const navigation = useNavigation();
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

  const handleCancelPress = () => {
    setIsMapLaunched(!isMapLaunched);
  };

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
        <>
          <View style={styles.bookedOnWrapper}>
            <TouchableOpacity style={styles.bookedOnButton}>
              <Text style={styles.bookedOnButtonText}>
                Booked on {selectedDay.date} {selectedDay.day}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerStep}>
            <View style={styles.header}></View>
            <Text style={styles.successText}>
              Your booking is successful. Save your personal code that you can use to cancel the reservation.
            </Text>
            <View style={styles.codeContainer}>
              <View style={styles.secondCodeContainer}>
                <Text style={styles.codeLabel}>Your reservation code:</Text>
                <Text style={styles.codeText}>{generatedCode}</Text>
              </View>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancelPress}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <View>
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
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStep: {
    marginTop: 10,
    backgroundColor: '#7A9EA0',
    padding: 15,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 0,
  },
  successText: {
    fontSize: 16,
    color: '#073B3E',
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  codeLabel: {
    fontSize: 16,
    color: '#002224',
  },
  codeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002224',
  },
  cancelButton: {
    backgroundColor: '#54666A',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  cancelButtonText: {
    textAlign: 'right',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondCodeContainer: {
    color: '#002224',
  },
  bookedOnWrapper: {
    paddingHorizontal: 10,
    marginBottom: 0,
    alignItems: 'flex-end',
  },
  bookedOnButton: {
    backgroundColor: '#7A9EA0',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 40,
    justifyContent: 'space-between',
  },
  bookedOnButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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

export default BookedMapScreen;