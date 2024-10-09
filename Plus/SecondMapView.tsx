import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, SafeAreaView, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function SecondMapView() {
    const navigation = useNavigation();
    const handleImagePress = () => {
        navigation.navigate('Settings'); // Назва сторінки, на яку ви хочете перейти
      };

  return (
    <View style={styles.container}>
      <SafeAreaView>
      <View style={styles.header}>
          <Text style={styles.title}>PACIFIC OCEAN</Text>
          <TouchableOpacity onPress={handleImagePress}>
            <Image
              source={require("../svg/home_img/settings.png")}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>


      <View style={styles.mapContainer}>
      <TouchableOpacity style={styles.mapButton}>
          <Text style={styles.mapButtonText}>Select a place on the map</Text>
        </TouchableOpacity>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomEnabled={true}      // Дозволяє збільшення/зменшення масштабу
        scrollEnabled={true}    // Дозволяє прокручування карти
        pitchEnabled={true}     // Дозволяє нахил карти
        rotateEnabled={true}    // Дозволяє обертання карти
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
          <View style={styles.marker} />
        </Marker>
      </MapView>
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
  mapContainer: {
    width: '100%',
    height: 500,
    marginBottom: 20,
    overflow: 'hidden',
    borderRadius: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapButton: {
    alignItems: 'center',
    marginBottom: 15,
  },
  mapButtonText: {
    color: '#00796B',
  },
  marker: {
    backgroundColor: '#374049',
    borderRadius: 50,
    padding: 10,
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