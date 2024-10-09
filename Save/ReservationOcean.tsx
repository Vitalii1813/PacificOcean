import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const ReservationOcean = () => {
  const navigation = useNavigation(); // Use navigation hook

  const [reservationCode, setReservationCode] = useState(generateReservationCode());
  // Function to handle cancel button press
  const handleCancelReservation = () => {
    navigation.navigate('Save'); // Navigate to SaveOcean screen
  };

  const handleSettings = () => {
    navigation.navigate('Settings'); // Navigate to SaveOcean screen
  };

  function generateReservationCode() {
    return Math.random().toString(36).substring(2, 15); // Generates a random alphanumeric string
  }
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView></SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>PACIFIC OCEAN</Text>
        <TouchableOpacity onPress={handleSettings}>
          <Image
            source={require("../svg/home_img/settings.png")}
            style={styles.settings_img}
          />
        </TouchableOpacity>
      </View>

      {/* Description Section */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          Spend a wonderful time with your family on a small yacht enjoying the beauty of the ocean and delicious food and drinks
        </Text>
      </View>

      {/* Yacht Image */}
      <Image
        source={require("../svg/save_img/bottom_yacht.png")}
        style={styles.yachtImage}
      />

      {/* Reservation Confirmation */}
      <View style={styles.reservationContainer}>
        <Text style={styles.reservedTitle}>Reserved</Text>
        <Text style={styles.reservationText}>
          Your reservation has been successfully confirmed. Save your personal reservation number. You can cancel your reservation at any time by opening the settings.
        </Text>

        {/* Reservation Code */}
        <View style={styles.reservationCodeContainer}>
          <Text style={styles.reservationCodeTitle}>Reservation code</Text>
          <TextInput style={styles.reservationCodeInput} value={reservationCode} editable={false} />
        </View>

        {/* Cancel Reservation Button */}
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancelReservation}>
          <Text style={styles.cancelButtonText}>Cancel reservation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#073b3e',
    padding: 20,
  },
  header: {
    flex: 1.1,
    flexDirection: 'row',
    height: '10%',
    marginTop: 20,
    marginBottom: 20
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
    marginTop: 2,
  },
  descriptionContainer: {
    marginTop: 0,
  },
  descriptionTitle: {
    color: '#D1D6D7',
    fontSize: 20,
    fontWeight: 'bold',
  },
  descriptionText: {
    color: '#D1D6D7',
    fontSize: 16,
    marginTop: 10,
  },
  yachtImage: {
    width: '100%',
    height: 180,
    marginTop: 30,
    resizeMode: 'cover',
  },
  reservationCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically centered
    marginTop: 10,
    marginBottom:5
  },
  reservationCodeTitle: {
    color: '#0A5754',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10, // Add some space between title and input
  },
  reservationCodeInput: {
    backgroundColor: '#A7C5C4',
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
    marginTop: 30,
  },
  reservedTitle: {
    fontSize: 24,
    color: '#0A5754',
    fontWeight: 'bold',
  },
  reservationText: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
    width: '90%',
  },
  cancelButton: {
    backgroundColor: '#2A3F3F',
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