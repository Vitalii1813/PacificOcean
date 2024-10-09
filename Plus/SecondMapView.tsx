import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function SecondMapView() {
  const navigation = useNavigation();
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleImagePress = () => {
    navigation.navigate('Settings'); // Перехід на сторінку налаштувань
  };

  const handleButtonPress = () => {
    navigation.navigate('AddResultForm'); // Переходить на екран AddResultFor
  };

  const handleMapPress = (event) => {
    setSelectedLocation(event.nativeEvent.coordinate); // Вибір точки на карті
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
        <TouchableOpacity style={styles.mapButton} onPress={handleButtonPress}>
          <View style={styles.row}>
            <Image
              source={require("../svg/plus_img/arrow-left.png")}
              style={styles.imageIcon} // Додаємо стиль для зображення
            />
            <Text style={styles.mapButtonText}>Select a place on the map</Text>
          </View>
        </TouchableOpacity>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 9.1021, // Центр Африки
            longitude: 18.2812,
            latitudeDelta: 25.0, // Ширина для охоплення всієї Африки
            longitudeDelta: 25.0,
          }}
          zoomEnabled={true} // Дозволяє збільшення/зменшення масштабу
          scrollEnabled={true} // Дозволяє прокручування карти
          pitchEnabled={true} // Дозволяє нахил карти
          rotateEnabled={true} // Дозволяє обертання карти
          onPress={handleMapPress} // Обробка натискань на карту
        >
          {selectedLocation && (
            <Marker coordinate={selectedLocation}>
              <View style={styles.marker} />
            </Marker>
          )}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#7A9EA0",
    textAlign: 'center',
    marginRight: 15,
  },
  settingsImg: {
    marginRight: 10,
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
  marker: {
    backgroundColor: '#374049',
    borderRadius: 50,
    padding: 10,
  },
  description: {
    color: '#BFBFBF',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
  },
  mapButton: {
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row', // Елементи всередині будуть розташовані по горизонталі
    alignItems: 'center', // Вертикальне вирівнювання елементів
  },
  imageIcon: {
    marginRight: 10, // Відступ між зображенням та текстом
  },
  mapButtonText: {
    color: '#00796B',
  },
});