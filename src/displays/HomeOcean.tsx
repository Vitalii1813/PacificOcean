import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

const HomeOcean = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://your-background-image-url.jpg' }} // Update with actual background image
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>PACIFIC OCEAN</Text>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.subtext}>
            Book a ship and sail with us for fishing in the open ocean for a whole day from 9 am to 9 pm.
          </Text>
        </View>

        {/* Options Section */}
        <View style={styles.options}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Sailing yacht</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Motor yacht</Text>
          </TouchableOpacity>
        </View>

        {/* Open Map Button */}
        <TouchableOpacity style={styles.mapButton}>
          <Text style={styles.mapText}>Open map</Text>
        </TouchableOpacity>

        {/* Footer Icons (if needed) */}
        <View style={styles.footer}>
          {/* Add navigation buttons or icons here */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004d40',
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 10,
  },
  subtext: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  options: {
    marginBottom: 20,
  },
  optionButton: {
     // Dark green background for buttons
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mapButton: {
    backgroundColor: '#00897b', // Lighter green for the map button
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 20,
    alignItems: 'center',
    width: '100%',
  },
  mapText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#ffffff30',
  },
});

export default HomeOcean;