import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView } from "react-native";
import Slider from '@react-native-community/slider'; 
import { launchImageLibrary } from 'react-native-image-picker'; // <-- Ensure the import
import BoatScreen from "../displays/BoatScreen";

const CodeOcean = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [bait, setBait] = useState('Bait for sharks');
  const [weight, setWeight] = useState(1);
  const [showSlider, setShowSlider] = useState(false); // Controls slider visibility
  const [isBoatLaunched, setIsBoatLaunched] = useState(false); // New state for boat launch

  const pickImage = () => {
    launchImageLibrary({}, (response) => {
      if (!response.didCancel && !response.error && response.assets.length > 0) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  // Function to handle the "Next" button click
  const handleNextPress = () => {
    setShowSlider(true); // Show the slider block
  };

  // Function to handle the "Launch the boat" button click
  const handleLaunchBoat = () => {
    setIsBoatLaunched(true); // Launch the boat and show the new screen
  };

  return (
    <View style={styles.container}>
      {/* Заголовок */}<SafeAreaView></SafeAreaView>
      <View style={styles.header}>
          <Text style={styles.title}>PACIFIC OCEAN
          </Text>
          <Image
            source={require("../svg/home_img/settings.png")}
            style={styles.settings_img}
          />
        </View>

      {/* Conditional Rendering */}
      {!showSlider && !isBoatLaunched ? (
        // Initial content before pressing "Next"
        <>
          {/* Опис */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              Scan the QR code of the boat you are currently in to start baiting fish on the radio controlled boat.
            </Text>
          </View>

          {/* Background Image */}
          <Image
            source={require("../svg/code_img/sea.png")}
            style={styles.backgroundImage}
          />

          {/* Кнопка "Next" */}
          <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </>
      ) : !isBoatLaunched ? (
        // Content shown after pressing "Next" (Slider Screen)
        <View style={styles.card}>
          <Text style={styles.title}>Choose the type of bait</Text>

          {/* Image Picker */}
          <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
            {selectedImage ? (
              <Image source={{ uri: selectedImage }} style={styles.image} />
            ) : (
              <Text style={styles.imagePlaceholder}>R</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.pickItemText}>Pick item</Text>

          {/* Bait TextInput */}
          <TextInput
            style={styles.input}
            value={bait}
            onChangeText={(text) => setBait(text)}
            placeholder="Type of bait"
          />

          {/* Slider */}
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>1 kg</Text>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={5}
              value={weight}
              step={1}
              onValueChange={(value) => setWeight(value)}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
            <Text style={styles.sliderLabel}>5 kg</Text>
          </View>

          {/* Description */}
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Depending on the weight of the fish you want to catch, the type of bait will be selected.
          </Text>

          {/* Launch the Boat Button */}
          <TouchableOpacity style={styles.launchButton} onPress={handleLaunchBoat}>
            <Text style={styles.launchButtonText}>Launch the boat</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // New screen content shown after pressing "Launch the boat"
       <BoatScreen/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6BD8DE", // Darker teal for a better contrast
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    height: '7%',
    paddingVertical:5,
    backgroundColor: "#004D40",
    borderRadius:15,
    marginTop:10
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
  settingsIcon: {
    padding: 10,
    backgroundColor: "#004D40",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5, // Add shadow for a modern effect
  },
  icon: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  descriptionContainer: {
    backgroundColor: "#1E4F4F",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  descriptionTitle: {
    fontSize: 22, // Slightly larger
    color: "#FFFFFF",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "#B0CCCC",
    lineHeight: 22, // Increased line-height for better readability
  },
  nextButton: {
    backgroundColor: "#00ACC1",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 30,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4, // Button shadow for depth
  },
  nextButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "115%",
    height: "60%",
    resizeMode: "cover",
    opacity: 0.7, // Added opacity for a subtle background effect
  },
  card: {
    backgroundColor: "#E0F2F1", // Softer background color
    padding: 25,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  imagePicker: {
    position: "absolute",
    top: -30,
    right: -20,
    width: 60,
    height: 60,
    backgroundColor: "#00796B",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  imagePlaceholder: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  pickItemText: {
    color: "#004D40",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#B2DFDB", // Slightly lighter background
    width: "90%",
    padding: 12, // More padding for better usability
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
    color: "#004D40",
    borderColor: "#00796B",
    borderWidth: 1, // Added a subtle border for better input visibility
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 25,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  sliderLabel: {
    color: "#004D40",
    fontSize: 14,
  },
  launchButton: {
    backgroundColor: "#00796B", // Match with theme color
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  launchButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  smallBoatImage: {
    width: 60, // Slightly larger for better clarity
    height: 60,
    marginRight: 15,
  },
 
  
});

export default CodeOcean;
