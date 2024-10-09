import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function AddResultForm() {
  const [userName, setUserName] = useState('');
  const [date, setDate] = useState('');
  const [typeOfFish, setTypeOfFish] = useState('');
  const [location, setLocation] = useState('');
  const navigation = useNavigation();
  const [showPlusButton, setPlusButton] = useState(false); // Змінено назву змінної

  const handlePressPlus = () => {
    setPlusButton(!showPlusButton);
  };
  const handleImagePress = () => {
    navigation.navigate('Settings'); // Назва сторінки, на яку ви хочете перейти
  };
  const handleAddResult = () => {
    navigation.navigate('SecondMap'); // Назва сторінки, на яку ви хочете перейти
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.title}>PACIFIC OCEAN</Text>
          <TouchableOpacity onPress={handleImagePress}>
            <Image
              source={require("../svg/home_img/settings.png")}
              style={styles.settings_img}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>


      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Add my result</Text>
        {!showPlusButton ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="User name"
              placeholderTextColor="#BFBFBF"
              value={userName}
              onChangeText={setUserName}
            />
            <TextInput
              style={styles.input}
              placeholder="Date"
              placeholderTextColor="#BFBFBF"
              value={date}
              onChangeText={setDate}
            />
            <TextInput
              style={styles.input}
              placeholder="Type of fish"
              placeholderTextColor="#BFBFBF"
              value={typeOfFish}
              onChangeText={setTypeOfFish}
            />
            <TextInput
              style={styles.input}
              placeholder="Where"
              placeholderTextColor="#BFBFBF"
              value={location}
              onChangeText={setLocation}
            />

            <TouchableOpacity style={styles.mapButton}>
              <Text style={styles.mapButtonText}>Select a place on the map</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addPhotoButton} onPress={handlePressPlus}>
              <Text style={styles.addPhotoButtonText}>+</Text>
            </TouchableOpacity>

            <Text style={styles.votesText}>
              Add five votes to remember the highlight of your fishing
            </Text>

            <TouchableOpacity style={styles.submitButton} onPress={handleAddResult}>
              <Text style={styles.submitButtonText}>Add my result</Text>
            </TouchableOpacity>
          </>) : (
          <>
            <TouchableOpacity style={styles.addPhotoButtonNew}>
              <Text style={styles.addPhotoButtonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.votesTextNew}>
              Add five votes to remember the highlight of your fishing
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.backButton} onPress={handlePressPlus}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addButton} onPress={handleAddResult}>
                <Text style={styles.buttonText}>Add my result</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

      </View>

      <Text style={styles.description}>
        Description{'\n'}You can delete a result that you have added in the settings
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#053281',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#7A9EA0",
    textAlign: 'center',
    marginRight: 15,
    marginLeft: 25
  },
  settingsImg: {
    marginRight: 10,
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#7A9EA0',
    padding: 20,
    borderRadius: 10,
  },
  formTitle: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
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
    borderColor: '#00796B',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginBottom: 15,
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
    color: '#00796B',
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
    marginHorizontal: 25
  },
  submitButton: {
    backgroundColor: '#00796B',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  description: {
    color: '#BFBFBF',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Розподіляє кнопки рівномірно між собою
    marginTop: 120,
  },
  backButton: {
    backgroundColor: 'transparent', // світло-сірий фон для "Back"
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1, // дозволяє кнопкам бути однакового розміру
    marginRight: 10, // відступ між кнопками
  },
  addButton: {
    backgroundColor: '#1C2C39', // темний фон для "Add my result"
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1, // дозволяє кнопкам бути однакового розміру
  },
  buttonText: {
    color: '#F0F4F5', // світлий текст
    fontSize: 16,
    fontWeight: 'bold',
  },
});