import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';

export default function AddResultForm() {
  const [userName, setUserName] = useState('');
  const [date, setDate] = useState('');
  const [typeOfFish, setTypeOfFish] = useState('');
  const [location, setLocation] = useState('');

  const handleAddResult = () => {
    // Обробка даних для збереження результату
    console.log({ userName, date, typeOfFish, location });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PACIFIC OCEAN</Text>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Add my result</Text>

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

        <TouchableOpacity style={styles.addPhotoButton}>
          <Text style={styles.addPhotoButtonText}>+</Text>
        </TouchableOpacity>

        <Text style={styles.votesText}>
          Add five votes to remember the highlight of your fishing
        </Text>

        <TouchableOpacity style={styles.submitButton} onPress={handleAddResult}>
          <Text style={styles.submitButtonText}>Add my result</Text>
        </TouchableOpacity>
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
    backgroundColor: '#002224',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#6FB3B8',
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
    alignItems: 'center',
    marginBottom: 15,
  },
  mapButtonText: {
    color: '#00796B',
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
  addPhotoButtonText: {
    fontSize: 24,
    color: '#00796B',
  },
  votesText: {
    color: '#00796B',
    textAlign: 'center',
    marginBottom: 15,
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
});