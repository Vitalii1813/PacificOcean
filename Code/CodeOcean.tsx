import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView } from "react-native";
import Slider from '@react-native-community/slider';
import { launchImageLibrary } from 'react-native-image-picker';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import BoatScreen from "../Code/BoatScreen";
import { useNavigation } from "@react-navigation/native";

const CodeOcean = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [bait, setBait] = useState('Bait for sharks');
  const [weight, setWeight] = useState(1);
  const [showSlider, setShowSlider] = useState(false);
  const [isBoatLaunched, setIsBoatLaunched] = useState(false);
  const containerStyle = isBoatLaunched ? styles.containerActive : styles.container;

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

  const handleSettings = () => {
    navigation.navigate('Settings'); // Navigate to SaveOcean screen
  };

  const navigation = useNavigation();

  return (
    <View style={containerStyle}>
      <SafeAreaView />
      <View style={styles.header}>
        <Text style={styles.title}>PACIFIC OCEAN</Text>
        <TouchableOpacity onPress={handleSettings}>
        <Image source={require("../svg/home_img/settings.png")}
         style={styles.settings_img} />
        </TouchableOpacity>
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
          <Text style={styles.titleBait}>Choose the type of bait</Text>
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
              step={0.5}
              onValueChange={setWeight}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
            <Text style={styles.sliderLabel}>5 kg</Text>
          </View>

          <Text style={styles.descriptionTitleNew}>Description</Text>
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
  containerActive: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#68D8DE", // Змінений фон
  },
  header: {
    flexDirection: 'row',
    height: '7%',
    paddingVertical: 7,
    paddingHorizontal:7,
    backgroundColor: "#073B3E",
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
  titleBait:{
    fontSize: 20,
    fontWeight: "500",
    color: "#D9D9D9",
    textAlign: 'left',
    fontFamily:'Montserrat'
  },
  settings_img: {
    marginTop: 5,
  },
  descriptionContainer: {
    alignItems:'flex-end',
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight:'500',
    marginBottom: 10,
    marginRight:5
  },
  descriptionText: {
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 22,
    marginLeft:15,
    textAlign:'center'
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
    fontSize: 32,
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
    backgroundColor: "#7A9EA0",
    paddingVertical: 25,
    paddingHorizontal:10,
    borderRadius: 15,
    width: "100%",
    //alignItems: "flex-start",
    marginBottom: 30,
    marginTop:50
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
    fontSize: 14,
    fontWeight: "bold",
    color: "#D9D9D9",
    marginTop: 10,
    textAlign:'right'
  },
  input: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    fontSize: 16,
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  slider: {
    flex: 1,
    height: 70,
    marginHorizontal: 10,
  },
  sliderLabel: {
    fontSize: 16,
    color: "#D9D9D9",
    fontWeight:'400',
  },
  launchButton: {
    backgroundColor: "#002224",
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  },
  launchButtonText: {
    fontSize: 17,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  descriptionTitleNew:{
    fontSize:20,
    textAlign:'center',
    fontWeight:'500',
    color:"#FFFFFF",
    marginBottom:5
  }
});

export default CodeOcean;