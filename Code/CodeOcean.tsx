import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView } from "react-native";
import Slider from '@react-native-community/slider';
import { launchImageLibrary } from 'react-native-image-picker';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import BoatScreen from "../Code/BoatScreen";

const CodeOcean = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [bait, setBait] = useState('Bait for sharks');
  const [weight, setWeight] = useState(1);
  const [showSlider, setShowSlider] = useState(false);
  const [isBoatLaunched, setIsBoatLaunched] = useState(false);

  const pickImage = () => {
    launchImageLibrary({}, (response) => {
      if (response.assets && response.assets.length > 0) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  const handleNextPress = () => {
    setShowSlider(true);
  };

  const handleLaunchBoat = () => {
    setIsBoatLaunched(true);
  };

  const onSuccess = (e) => {
    console.log('QR Code Data:', e.data);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.header}>
        <Text style={styles.title}>PACIFIC OCEAN</Text>
        <Image source={require("../svg/home_img/settings.png")} style={styles.settings_img} />
      </View>

      {!showSlider && !isBoatLaunched ? (
        <>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              Scan the QR code of the boat you are currently in to start baiting fish on the radio-controlled boat.
            </Text>
          </View>

          <Image source={require("../svg/code_img/sea.png")} style={styles.backgroundImage} />

          <View style={styles.qrWrapper}>
            <View style={styles.qrTextSecond}>
            <View style={styles.qrTextFirst}>
            <Text style={styles.qrText}>Scan QR</Text>
            </View>
              
              </View>
            <View style={styles.qrContainer}>
              <QRCodeScanner
                onRead={onSuccess}
                flashMode={RNCamera.Constants.FlashMode.auto}
                reactivate={true}
                showMarker={true}
              />
              <Image source={require("../svg/code_img/qr-code.png")} style={styles.qrCodeIcon} />
            </View>
          </View>

          <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </>
      ) : !isBoatLaunched ? (
        <View style={styles.card}>
          <Text style={styles.title}>Choose the type of bait</Text>
          <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
            {selectedImage ? (
              <Image source={{ uri: selectedImage }} style={styles.image} />
            ) : (
              <Text style={styles.imagePlaceholder}>R</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.pickItemText}>Pick item</Text>

          <TextInput
            style={styles.input}
            value={bait}
            onChangeText={setBait}
            placeholder="Type of bait"
          />

          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>1 kg</Text>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={5}
              value={weight}
              step={1}
              onValueChange={setWeight}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
            <Text style={styles.sliderLabel}>5 kg</Text>
          </View>

          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Depending on the weight of the fish you want to catch, the type of bait will be selected.
          </Text>

          <TouchableOpacity style={styles.launchButton} onPress={handleLaunchBoat}>
            <Text style={styles.launchButtonText}>Launch the boat</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <BoatScreen />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#073B3E",
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    height: '7%',
    paddingVertical: 5,
    backgroundColor: "transparent",
    borderRadius: 15,
    marginTop: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#7A9EA0",
    textAlign: 'center',
    marginRight: 28,
    marginLeft: 25,
  },
  settings_img: {
    marginTop: 2,
  },
  descriptionContainer: {
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 22,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "#B0CCCC",
    lineHeight: 22,
  },
  nextButton: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 30,
  },
  nextButtonText: {
    fontSize: 18,
    color: "#073B3E",
    fontWeight: "bold",
  },
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "115%",
    height: "60%",
    resizeMode: "cover",
    opacity: 0.7,
  },
  qrWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:40
  },
  qrTextSecond: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width:'20%'
  },
  qrTextFirst:{
    flex:1,
    height:250,
    width:140,
    justifyContent:'center',
    
  },
  qrText: {
    color: "#FFFFFF",
    fontSize: 30,
    transform: [{ rotate: "-90deg" }],
    marginTop: 10,
    flexWrap:'nowrap'
  },
  qrContainer: {
    flex: 1,
    height: 250,
    backgroundColor: "#000000",
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 30,
  },
  qrCodeIcon: {
    width: 94,
    height: 94,
    marginBottom: 70,
  },
  card: {
    backgroundColor: "#E0F2F1",
    padding: 25,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#00796B",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 20,
    fontSize: 16,
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  slider: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
  },
  sliderLabel: {
    fontSize: 16,
    color: "#00796B",
    fontWeight: "bold",
  },
  launchButton: {
    backgroundColor: "#004D40",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  },
  launchButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default CodeOcean;