import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
  LayoutAnimation,
  Alert,
} from 'react-native';
import ArrowIcon from '../svg/home_img/ArrowRight';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import MapScreen from './MapScreen';
import SSG from '../svg/setting';
import DSG from '../svg/done';
import YSG from '../svg/yacht';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeOcean = () => {
  const navigation = useNavigation();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#0C757A');
  const [preDa, setPreDa] = useState();

  const handleImagePress = () => {
    navigation.navigate('Settings');
  };

  const handleMapPress = () => {
    if (selectedOption) {
      setIsMapOpen(!isMapOpen);
      setBackgroundColor(isMapOpen ? '#0C757A' : '#FFFFFF');
    } else {
      Alert.alert('First, select a yacht for sailing');
    }
  };

  const toggleOption = option => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedOption(prev => (prev === option ? null : option));
  };

  useFocusEffect(
    React.useCallback(() => {
      async function getDa() {
        const dadasd = await AsyncStorage.getItem('map');
        if (dadasd) {
          setPreDa(JSON.parse(dadasd));
          setIsMapOpen(true);
        } else {
          setPreDa(undefined);
          setIsMapOpen(false);
        }
      }

      getDa();
    }, [navigation]),
  );

  async function cancelBooking() {
    setIsMapOpen(false);
    setSelectedOption(null);
    await AsyncStorage.setItem('map', '');
    setPreDa(undefined);
  }

  if (isMapOpen) {
    return (
      <MapScreen
        selectedOption={selectedOption}
        setIsMapOpen={setIsMapOpen}
        selectedOption={selectedOption}
        cancelBooking={cancelBooking}
        preDa={preDa}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SafeAreaView />
        <View style={styles.header}>
          <Text style={styles.title}>PACIFIC OCEAN</Text>

          <TouchableOpacity onPress={handleImagePress}>
            <SSG col={'#7A9EA0'} sis={Dimensions.get('screen').width * 0.08} />
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.subtext}>
              Book a ship and sail with us for fishing in the open ocean for a
              whole day from 9 am to 9 pm.
            </Text>
          </View>

          <Image
            source={require('../svg/home_img/parus.png')}
            style={styles.backgroundImage}
          />
        </View>

        <View style={styles.options}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              {
                backgroundColor:
                  selectedOption === 'sailing'
                    ? 'white'
                    : 'rgba(255, 255, 255, 0.1)',
              },
            ]}
            onPress={() => toggleOption('sailing')}>
            <DSG
              col={selectedOption === 'sailing' ? '#002224' : 'transparent'}
              sis={Dimensions.get('screen').width * 0.08}
            />
            <View
              style={[
                styles.yacht_block,
                {gap: selectedOption === 'sailing' ? 40 : 20},
              ]}>
              <YSG
                col={'#002224'}
                sis={Dimensions.get('screen').width * 0.13}
              />
              <Text style={styles.optionText}>Sailing yacht</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.optionButton,
              {
                backgroundColor:
                  selectedOption === 'motor'
                    ? 'white'
                    : 'rgba(255, 255, 255, 0.1)',
              },
            ]}
            onPress={() => toggleOption('motor')}>
            <DSG
              col={selectedOption === 'motor' ? '#002224' : 'transparent'}
              sis={Dimensions.get('screen').width * 0.08}
            />

            <View
              style={[
                styles.yacht_block,
                {gap: selectedOption === 'motor' ? 40 : 20},
              ]}>
              <YSG
                col={'#002224'}
                sis={Dimensions.get('screen').width * 0.13}
              />

              <Text style={styles.optionText}>Motor yacht</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.mapButton} onPress={handleMapPress}>
              <Text style={styles.mapText}>Open map</Text>
              <ArrowIcon width={25} height={25} fill="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#063a3d',
  },
  content: {
    flex: 1,
    paddingBottom: 30,
    paddingTop: 20,
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
  settings_img: {
    marginTop: 5,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
    opacity: 0.8,
    marginBottom: 10,
    textAlign: 'left',
  },
  descriptionContainer: {
    justifyContent: 'flex-start',
    width: '60%',
    marginLeft: '5%',
  },
  subtext: {
    fontSize: 12,
    color: '#7A9EA0',
    textAlign: 'left',
  },
  imageContainer: {
    width: '90%',
  },
  backgroundImage: {
    width: Dimensions.get('screen').width * 0.5,
    height: Dimensions.get('screen').height * 0.3,
    marginTop: 40,
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
  },
  options: {
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  optionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  mapButton: {
    backgroundColor: '#7A9EA0',
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
  mapText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 15,
  },
  yacht_img: {
    marginLeft: 55,
  },
  done_img: {
    marginRight: 50,
  },
  yacht_block: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 20,
  },
  optionText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'right',
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeOcean;
