import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import navigation hook
import SSG from '../svg/setting';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderModal from '../Modal/modal';

const ReservationOcean = ({setCodeScreen, codeScreen}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); // Use navigation hook
  const firstNum = codeScreen !== 2 ? codeScreen : generateReservationCode();

  const [reservationCode, setReservationCode] = useState(firstNum);
  // Function to handle cancel button press
  const handleCancelReservation = async () => {
    setModalVisible(true);
  };

  const handleSettings = () => {
    navigation.navigate('Settings'); // Navigate to SaveOcean screen
  };

  function generateReservationCode() {
    return Math.random().toString(36).substring(2, 15); // Generates a random alphanumeric string
  }

  async function end() {
    await AsyncStorage.setItem('SaveOcean', '');
    setCodeScreen(1);
  }

  useEffect(() => {
    async function askdaksd() {
      await AsyncStorage.setItem('SaveOcean', reservationCode);
    }

    askdaksd();
  }, [codeScreen]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.title}>PACIFIC OCEAN</Text>

          <TouchableOpacity onPress={handleSettings}>
            <SSG col={'#7A9EA0'} sis={Dimensions.get('screen').width * 0.08} />
          </TouchableOpacity>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Spend a wonderful time with your family on a small yacht enjoying
            the beauty of the ocean and delicious food and drinks
          </Text>
        </View>

        <View>
          <Image
            source={require('../svg/save_img/bottom_yacht.png')}
            style={styles.yachtImage}
          />

          <View style={styles.reservationContainer}>
            <Text style={styles.reservedTitle}>Reserved</Text>
            <Text style={styles.reservationText}>
              Your reservation has been successfully confirmed. Save your
              personal reservation number. You can cancel your reservation at
              any time by opening the settings.
            </Text>

            <View style={styles.reservationCodeContainer}>
              <Text style={styles.reservationCodeTitle}>
                {'Reservation\ncode'}
              </Text>

              <View style={styles.reservationCodeInput}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#7A9EA0',
                    fontSize: Dimensions.get('screen').width * 0.045,
                    fontWeight: '500',
                  }}>
                  {reservationCode}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.cancelButton}
              onPress={handleCancelReservation}>
              <Text style={styles.cancelButtonText}>Cancel reservation</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {modalVisible && (
        <LoaderModal
          modalVisible={modalVisible}
          end={end}
          title={'You have successfully canceled the reservation'}
          description={
            'If needed, you can reserve again for the date that works for you'
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#073b3e',
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 25,
    backgroundColor: '#073b3e',
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
  settings_img: {
    marginTop: 2,
  },
  descriptionContainer: {
    width: '70%',
    alignSelf: 'flex-end',
    marginRight: '2.5%',
    marginTop: 0,
  },
  descriptionTitle: {
    color: '#D1D6D7',
    fontSize: 20,
    fontWeight: 'bold',
  },
  descriptionText: {
    color: '#7A9EA0',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'justify',
  },
  yachtImage: {
    width: '70%',
    height: Dimensions.get('screen').height * 0.2,
    alignSelf: 'flex-end',
    bottom: -20,
  },
  reservationCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically centered
    marginTop: 10,
  },
  reservationCodeTitle: {
    color: '#073B3E',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10, // Add some space between title and input
    textAlign: 'center',
  },
  reservationCodeInput: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    color: '#fff',
    flex: 1, // Allow the TextInput to take up available space
    marginLeft: 10, // Add some space between title and input
  },
  reservationContainer: {
    backgroundColor: '#7a9ea0',
    padding: 20,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  reservedTitle: {
    fontSize: 24,
    color: '#073B3E',
    fontWeight: 'bold',
  },
  reservationText: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
    width: '90%',
    textAlign: 'justify',
    marginBottom: 5,
  },
  cancelButton: {
    backgroundColor: '#002224',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReservationOcean;
