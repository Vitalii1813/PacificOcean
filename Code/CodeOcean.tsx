import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Keyboard,
  Dimensions,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {launchImageLibrary} from 'react-native-image-picker';
import BoatScreen from '../Code/BoatScreen';
import {useNavigation} from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import Bsg from '../svg/back';
import SSG from '../svg/setting';

const CodeOcean = () => {
  const [coordinates, setCoordinates] = useState({x: 0, y: 0});
  const device = useCameraDevice('back');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [bait, setBait] = useState('null');
  const [weight, setWeight] = useState(1);
  const [showSlider, setShowSlider] = useState(false);
  const [isBoatLaunched, setIsBoatLaunched] = useState(false);
  const containerStyle = isBoatLaunched
    ? styles.containerActive
    : styles.container;

  const pickImage = () => {
    launchImageLibrary({}, response => {
      if (response.assets && response.assets.length > 0) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  function close() {
    setCoordinates({x: 0, y: 0});
    setSelectedImage(null);
    setShowNext(false);
    setBait('null');
    setWeight(1);
    setShowSlider(false);
    setIsBoatLaunched(false);
  }

  const handleNextPress = () => {
    setShowSlider(true);
  };

  const handleLaunchBoat = () => {
    setIsBoatLaunched(true);
  };

  const onSuccess = () => {
    setShowNext(true);
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      onSuccess();
    },
  });

  function backButt() {
    if (coordinates.x !== 0 && coordinates.y !== 0) {
      setCoordinates({x: 0, y: 0});
    } else {
      setIsBoatLaunched(false);
    }
  }

  const handleSettings = () => {
    navigation.navigate('Settings'); // Navigate to SaveOcean screen
  };

  const navigation = useNavigation();

  return (
    <View style={containerStyle} onTouchStart={Keyboard.dismiss}>
      <SafeAreaView />

      <View style={styles.header}>
        {isBoatLaunched && (
          <TouchableOpacity onPress={backButt}>
            <Bsg col={'#7A9EA0'} sis={Dimensions.get('screen').width * 0.06} />
          </TouchableOpacity>
        )}

        <Text style={styles.title}>PACIFIC OCEAN</Text>

        {!isBoatLaunched && (
          <TouchableOpacity onPress={handleSettings}>
            <SSG col={'#7A9EA0'} sis={Dimensions.get('screen').width * 0.08} />
          </TouchableOpacity>
        )}
      </View>

      {!showSlider && !isBoatLaunched ? (
        <>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              Scan the QR code of the boat you are currently in to start baiting
              fish on the radio-controlled boat.
            </Text>
          </View>

          <Image
            source={require('../svg/code_img/sea.png')}
            style={styles.backgroundImage}
          />

          <View style={styles.qrWrapper}>
            <View style={styles.qrTextSecond}>
              <View style={styles.qrTextFirst}>
                <Text style={styles.qrText}>Scan QR</Text>
              </View>
            </View>

            <View style={styles.qrContainer}>
              {device && (
                <Camera
                  codeScanner={codeScanner}
                  style={{position: 'absolute', width: '100%', height: '100%'}}
                  device={device}
                  isActive={true}
                />
              )}

              <Image
                source={require('../svg/code_img/qr-code.png')}
                style={styles.qrCodeIcon}
              />
            </View>
          </View>

          {showNext && (
            <TouchableOpacity
              style={[styles.nextButton, {width: '90%', alignSelf: 'center'}]}
              onPress={handleNextPress}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          )}
        </>
      ) : !isBoatLaunched ? (
        <View style={styles.card}>
          <Text style={styles.titleBait}>Choose the type of bait</Text>
          <Text style={styles.pickItemText}>Pick item</Text>

          <RNPickerSelect
            onValueChange={value => setBait(value)}
            items={[
              {label: 'Sharks', value: 'sharks'},
              {label: 'Tuna', value: 'Tuna'},
              {label: 'Barracuda', value: 'Barracuda'},
              {label: 'Sea Bass', value: 'Sea Bass'},
              {label: 'Mackerel', value: 'Mackerel'},
              {label: 'Squid', value: 'Squid'},
              {label: 'Salmon', value: 'Salmon'},
              {label: 'Shrimp', value: 'Shrimp'},
              {label: 'Grouper', value: 'Grouper'},
              {label: 'Mahi Mahi', value: 'Mahi Mahi'},
              {label: 'Snapper', value: 'Snapper'},
            ]}>
            <View style={styles.inputContainer}>
              <Text style={styles.input}>
                {bait === 'null' ? 'Default selection is tuna' : bait}
              </Text>
            </View>
          </RNPickerSelect>

          <Text style={styles.titleBait}>Select the bait weight: {weight}</Text>

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
            Depending on the weight of the fish you want to catch, the type of
            bait will be selected.
          </Text>
          <>
            <TouchableOpacity
              style={[styles.nextButton]}
              onPress={() => {
                setShowSlider(false), setShowNext(false);
              }}>
              <Text style={styles.nextButtonText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.launchButton, {marginTop: 15}]}
              onPress={handleLaunchBoat}>
              <Text style={styles.launchButtonText}>Launch the boat</Text>
            </TouchableOpacity>
          </>
        </View>
      ) : (
        <BoatScreen
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          close={close}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#073B3E',
  },
  containerActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#68D8DE', // Змінений фон
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 25,
    backgroundColor: '#073B3E',
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
  titleBait: {
    fontSize: 20,
    fontWeight: '500',
    color: '#D9D9D9',
    textAlign: 'left',
    fontFamily: 'Montserrat',
  },
  settings_img: {
    marginTop: 5,
  },
  descriptionContainer: {
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '500',
    marginBottom: 10,
    marginRight: 5,
  },
  descriptionText: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 22,
    marginLeft: 15,
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  nextButtonText: {
    fontSize: 18,
    color: '#073B3E',
    fontWeight: 'bold',
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '115%',
    height: '60%',
    resizeMode: 'cover',
    opacity: 0.7,
  },
  qrWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  qrTextSecond: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '20%',
  },
  qrTextFirst: {
    flex: 1,
    height: 250,
    width: 140,
    justifyContent: 'center',
  },
  qrText: {
    color: '#FFFFFF',
    fontSize: 32,
    transform: [{rotate: '-90deg'}],
    marginTop: 10,
    flexWrap: 'nowrap',
  },
  qrContainer: {
    flex: 1,
    height: 250,
    backgroundColor: '#000000',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 30,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  qrCodeIcon: {
    width: 94,
    height: 94,
  },
  card: {
    backgroundColor: '#7A9EA0',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: '95%',

    marginBottom: 30,
    marginTop: 50,
    alignSelf: 'center',
  },
  imagePicker: {
    position: 'absolute',
    top: -30,
    right: -20,
    width: 60,
    height: 60,
    backgroundColor: '#00796B',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  imagePlaceholder: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  pickItemText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#D9D9D9',
    marginTop: 10,
    textAlign: 'right',
  },
  inputContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  input: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  slider: {
    flex: 1,
    height: 70,
    marginHorizontal: 10,
  },
  sliderLabel: {
    fontSize: 16,
    color: '#D9D9D9',
    fontWeight: '400',
  },
  launchButton: {
    backgroundColor: '#002224',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
  launchButtonText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  descriptionTitleNew: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 5,
  },
});

export default CodeOcean;
