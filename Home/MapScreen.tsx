import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import BookedMapScreen from './BookedMapScreen';
import Maps from './Map';
import Bsg from '../svg/back';
import {findFocusedRoute} from '@react-navigation/native';
import LoaderModal from '../Modal/modal';

const today = new Date();
const currentDate = today.getDate();

const createDatesArray = (startDate, numberOfDays) => {
  const datesArray = [];
  const date = new Date(today);
  for (let i = 0; i < numberOfDays; i++) {
    date.setDate(startDate + i);
    datesArray.push(date.getDate().toString());
  }
  return datesArray;
};

const dates = createDatesArray(currentDate + 1, 7);

function getDate(props: number) {
  return new Date(2024, 9, props).toDateString().slice(0, 3);
}

const daysOfWeek = [
  getDate(dates[0]),
  getDate(dates[1]),
  getDate(dates[2]),
  getDate(dates[3]),
  getDate(dates[4]),
  getDate(dates[5]),
  getDate(dates[6]),
];

const generateRandomPlacesForAllDays = () => {
  return daysOfWeek.map(() => {
    const totalPlaces = 10;
    const bookedPlaces = Math.floor(Math.random() * (totalPlaces + 1));
    return {booked: bookedPlaces, total: totalPlaces};
  });
};

const first = [3, 0, 5, 2, 1, 0, 1];
const two = [1, 5, 7, 3, 0, 0, 1];

const MapScreen = ({
  selectedOption,
  setIsMapOpen,
  cancelBooking,
  preDa,
}: {
  selectedOption: string;
  setIsMapOpen: any;
  cancelBooking: any;
  preDa: any;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalCloseVisible, setModalCloseVisible] = useState(false);
  const [isMapLaunched, setIsMapLaunched] = useState(preDa ? true : false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [placesForDays, setPlacesForDays] = useState(
    generateRandomPlacesForAllDays(),
  );

  const [selectedDate, setSelectedDate] = useState<number | null>(
    preDa ? preDa.Ikey : 0,
  );
  const [selectedDay, setSelectedDay] = useState({
    day: daysOfWeek[0],
    date: dates[0],
    places: placesForDays[0],
  });

  const handleSelectDay = (day: string, index: number) => {
    setSelectedDate(index);
    setSelectedDay({day, date: dates[index], places: placesForDays[index]});
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlacesForDays(generateRandomPlacesForAllDays());
    }, 600000);

    return () => clearInterval(intervalId);
  }, []);

  const generateRandomCode = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return result;
  };

  function end() {
    setIsMapLaunched(!isMapLaunched);
    setModalVisible(false);
  }

  function bookButtonPress() {
    setModalVisible(true);
  }

  function endTwo() {
    cancelBooking();
  }

  function cancelCancelBooking() {
    setModalCloseVisible(true);
  }

  useEffect(() => {
    setGeneratedCode(generateRandomCode());
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View style={styles.header}>
          {!isMapLaunched && (
            <TouchableOpacity onPress={() => setIsMapOpen(false)}>
              <Bsg
                col={'#7A9EA0'}
                sis={Dimensions.get('screen').width * 0.06}
              />
            </TouchableOpacity>
          )}

          <Text style={styles.title}>PACIFIC OCEAN</Text>
        </View>

        {!isMapLaunched ? (
          <View style={styles.dateContainer}>
            <Text style={styles.dateLabel}>Date of dispatch:</Text>
            <Text style={styles.dateText}>{selectedDay.date}</Text>
          </View>
        ) : (
          <View />
        )}

        <Maps
          key={selectedDate}
          selectedDate={selectedDate}
          selectedOption={selectedOption}
        />

        <Text style={styles.descriptionTitle}>Description</Text>

        {!isMapLaunched ? (
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              On this page you can see which route the boat will take today.
              Also, the number of free places and book a trip. To cancel the
              trip, open the settings.
            </Text>
          </View>
        ) : (
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              If your plans have changed, you can easily cancel the reservation
              with just one click in the settings or on this page
            </Text>
          </View>
        )}

        {!isMapLaunched ? (
          <View style={styles.dateBarContainer}>
            <View style={styles.calendarGrid}>
              {daysOfWeek.map((day, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.calendarDateContainer}
                  onPress={() => handleSelectDay(day, index)}>
                  <Text style={styles.ofWeek}>{day}</Text>
                  <Text style={styles.dateText}>{dates[index]}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.selectedDayDetails}>
              <View style={{gap: 4}}>
                <Text style={styles.selectedDayText}>
                  {selectedDay.day} {selectedDay.date}
                </Text>
                <View style={styles.progressBarContainer}>
                  <View
                    style={[
                      styles.progressBarFilled,
                      {
                        width: `${((selectedOption === 'sailing' ? first[selectedDate] : two[selectedDate]) / 10) * 100}%`,
                      },
                    ]}
                  />
                </View>
                <Text style={styles.placesCount}>
                  Places{' '}
                  {selectedOption === 'sailing'
                    ? first[selectedDate]
                    : two[selectedDate]}
                  /{10}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.bookButton}
                onPress={bookButtonPress}>
                <Text style={styles.bookButtonText}>Book</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <BookedMapScreen
            Ikey={selectedDate}
            selectedDate={selectedDate}
            selectedOption={selectedOption}
            cancelBooking={cancelCancelBooking}
            preDa={preDa}
          />
        )}
      </View>

      {modalVisible && (
        <LoaderModal
          modalVisible={modalVisible}
          end={end}
          title={'Success'}
          description={
            'You have successfully registered for the next sailing. Thank you for being a part of our team!'
          }
        />
      )}

      {modalCloseVisible && (
        <LoaderModal
          modalVisible={modalCloseVisible}
          end={endTwo}
          title={'Success'}
          description={'You have successfully canceled the scheduled sailing'}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#063a3d',
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#7A9EA0',
    textAlign: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#073b3e',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
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
    width: '90%',
    alignSelf: 'center',
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
    padding: 10,
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  calendarGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
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
    paddingVertical: 10,
    paddingHorizontal: '5%',
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
  },
  bookButton: {
    backgroundColor: '#54666A',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionTitle: {
    color: 'white',
    fontSize: 18,
    width: '90%',
    alignSelf: 'center',
  },
});

export default MapScreen;
