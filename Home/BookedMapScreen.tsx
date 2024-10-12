import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const BookedMapScreen = ({
  date,
  Ikey,
  selectedDate,
  selectedOption,
  cancelBooking,
  preDa,
}: any) => {
  function generateCode(length: number) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }

    return code;
  }

  const generatedCode = generateCode(5);

  function handleCancelPress() {
    cancelBooking();
  }

  async function saveDate() {
    const aoos = await AsyncStorage.getItem('map');
    if (!aoos) {
      const kasd = {Ikey, selectedDate, selectedOption, date, generatedCode};

      await AsyncStorage.setItem('map', JSON.stringify(kasd));
    }
  }

  useEffect(() => {
    saveDate();
  }, []);

  return (
    <View style={{width: '90%', alignSelf: 'center', marginBottom: 20}}>
      <View style={styles.bookedOnButton}>
        <Text style={styles.bookedOnButtonText}>Booked on {date}</Text>
      </View>

      <View style={styles.containerStep}>
        <View style={styles.header}></View>

        <Text style={styles.successText}>
          Your booking is successful. Save your personal code that you can use
          to cancel the reservation.
        </Text>

        <View style={styles.codeContainer}>
          <View style={styles.secondCodeContainer}>
            <Text style={styles.codeLabel}>Your reservation code:</Text>
            <Text style={styles.codeText}>
              {preDa?.generatedCode ? preDa.generatedCode : generatedCode}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={handleCancelPress}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    textAlign: 'justify',
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
    paddingVertical: 10,
    paddingHorizontal: 25,
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

  bookedOnButton: {
    backgroundColor: '#7A9EA0',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 40,
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
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
    marginLeft: 12,
  },
});

export default BookedMapScreen;
