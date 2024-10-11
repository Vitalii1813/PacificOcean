import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Bsg from '../svg/back';

export default function AddResultForm() {
  const [userName, setUserName] = useState('');
  const [date, setDate] = useState('');
  const [typeOfFish, setTypeOfFish] = useState('');
  const [location, setLocation] = useState('');
  const navigation = useNavigation();
  const [showPlusButton, setPlusButton] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePressPlus = () => {
    setPlusButton(!showPlusButton);
  };

  const handleImagePress = () => {
    navigation.navigate('Settings');
  };

  const handleAddResult = () => {
    navigation.navigate('SecondMap');
  };

  // Функція для відкриття галереї
  const handleAddPhoto = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = {uri: response.assets[0].uri};
        setSelectedImage(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Bsg col={'#7A9EA0'} sis={Dimensions.get('screen').width * 0.06} />
        </TouchableOpacity>

        <Text style={styles.title}>PACIFIC OCEAN</Text>
      </View>

      <View style={{flex: 1, justifyContent: 'space-around', width: '100%', paddingVertical: 25}}>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Add my result</Text>
          {!showPlusButton ? (
            <>
              <TextInput
                style={styles.input}
                placeholder="User name"
                placeholderTextColor="#073B3E40"
                value={userName}
                onChangeText={setUserName}
              />
              <TextInput
                style={styles.input}
                placeholder="Date"
                placeholderTextColor="#073B3E40"
                value={date}
                onChangeText={setDate}
              />
              <TextInput
                style={styles.input}
                placeholder="Type of fish"
                placeholderTextColor="#073B3E40"
                value={typeOfFish}
                onChangeText={setTypeOfFish}
              />
              <TextInput
                style={[styles.input, {marginBottom: 7}]}
                placeholder="Where"
                placeholderTextColor="#073B3E40"
                value={location}
                onChangeText={setLocation}
              />

              <TouchableOpacity style={styles.mapButton}>
                <View style={styles.row}>
                  <Text style={styles.mapButtonText}>
                    Select a place on the map
                  </Text>
                  <Image
                    source={require('../svg/plus_img/arrow-right.png')}
                    style={styles.imageIcon} // Додаємо стиль для зображення
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.addPhotoButton}
                onPress={handlePressPlus}>
                <Text style={styles.addPhotoButtonText}>+</Text>
              </TouchableOpacity>

              <Text style={styles.votesText}>
                Add five votes to remember the highlight of your fishing
              </Text>

              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleAddResult}>
                <Text style={styles.submitButtonText}>Add my result</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={styles.addPhotoButtonNew}
                onPress={handleAddPhoto}>
                {selectedImage ? (
                  <Image source={selectedImage} style={styles.selectedImage} />
                ) : (
                  <Text style={styles.addPhotoButtonText}>+</Text>
                )}
              </TouchableOpacity>

              <Text style={styles.votesTextNew}>
                Add five votes to remember the highlight of your fishing
              </Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={handlePressPlus}>
                  <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={handleAddResult}>
                  <Text style={styles.buttonText}>Add my result</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>

        <Text style={styles.description}>
          <Text style={styles.descriptionTitle}>Description</Text>
          {'\n'}You can delete a result that you have added in the settings
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#053281',
    alignItems: 'center',
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
  settingsImg: {
    marginRight: 10,
  },
  formContainer: {
    width: '90%',
    backgroundColor: '#7A9EA0',
    padding: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  formTitle: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#D8E6E7',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    color: '#000000',
  },
  mapButton: {
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  mapButtonText: {
    textAlign: 'left',
    color: '#D9D9D9',
  },
  addPhotoButton: {
    borderWidth: 2,
    borderColor: '#073B3E',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('screen').height * 0.15,
    marginBottom: 15,
    borderRadius: 10,
  },
  addPhotoButtonNew: {
    borderWidth: 2,
    borderColor: '#00796B',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    height: 235,
    marginBottom: 15,
  },
  addPhotoButtonText: {
    fontSize: 24,
    color: '#073B3E',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
  },
  votesText: {
    color: '#D9D9D9',
    textAlign: 'center',
    marginBottom: 15,
  },
  votesTextNew: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#D9D9D9',
    textAlign: 'center',
    width: 260,
    marginHorizontal: 25,
  },
  submitButton: {
    backgroundColor: '#073B3E',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#7A9EA0',
    fontWeight: '600',
    fontSize: Dimensions.get('screen').width * 0.05,
  },
  descriptionTitle: {
    color: '#D9D9D9',
    fontSize: 18,
    fontWeight: '500',
  },
  description: {
    color: '#BFBFBF',
    textAlign: 'center',
    marginTop: 60,
    fontSize: 13,
    width: 200,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 120,
  },
  backButton: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#1C2C39',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: '#F0F4F5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row', // Елементи всередині будуть розташовані по горизонталі
    alignItems: 'center', // Вертикальне вирівнювання елементів
  },
  imageIcon: {
    marginLeft: 120, // Відступ між зображенням та текстом
  },
});
