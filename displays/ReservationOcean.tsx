import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const ReservationOcean = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>PACIFIC OCEAN</Text>

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
        <Text style={styles.reservationCodeTitle}>Reservation code</Text>
        <TextInput style={styles.reservationCodeInput} value="hcw82r98flsak" editable={false} />

        {/* Cancel Reservation Button */}
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel reservation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A5754',
    padding: 20,
  },
  header: {
    color: '#D1D6D7',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  descriptionContainer: {
    marginTop: 20,
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
    height: 200,
    marginTop: 20,
    resizeMode: 'cover',
  },
  reservationContainer: {
    backgroundColor: '#C0D1D0',
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  reservedTitle: {
    fontSize: 20,
    color: '#0A5754',
    fontWeight: 'bold',
  },
  reservationText: {
    color: '#0A5754',
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
  },
  reservationCodeTitle: {
    color: '#0A5754',
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold',
  },
  reservationCodeInput: {
    backgroundColor: '#A7C5C4',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    marginTop: 10,
    color: '#fff',
    textAlign: 'center',
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
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2A3F3F',
    paddingVertical: 15,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    color: '#D1D6D7',
    fontSize: 24,
  },
});

export default ReservationOcean;