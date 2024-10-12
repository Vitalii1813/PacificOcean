import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Animated,
  LayoutAnimation,
} from 'react-native';
import MapView, {Marker, AnimatedRegion} from 'react-native-maps';
import Bsg from '../svg/back';

export default function SecondMapView({
  selectedLocation,
  setSelectedLocation,
  backPress,
  setShowMap,
}: any) {
  const markerAnimated = useRef(
    new AnimatedRegion({
      latitude: 20.0522, // Початкові координати
      longitude: -130.2437,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    }),
  ).current;

  const handleMapPress = event => {
    const {latitude, longitude} = event.nativeEvent.coordinate;

    markerAnimated
      .timing({
        latitude,
        longitude,
        duration: 500,
        useNativeDriver: false,
      })
      .start();

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setSelectedLocation({latitude, longitude});
  };

  useEffect(() => {
    setSelectedLocation(null);
  }, []);

  function back() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    backPress();
  }

  function clear() {
    setSelectedLocation(null);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  function save() {
    setShowMap(false);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          marginBottom: 30,
        }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={back}>
            <Bsg col={'#7A9EA0'} sis={Dimensions.get('screen').width * 0.06} />
          </TouchableOpacity>

          <Text style={styles.title}>PACIFIC OCEAN</Text>
        </View>

        <View style={styles.mapContainer}>
          <View style={styles.mapButton}>
            <Text style={styles.mapButtonText}>Select a place on the map</Text>
          </View>

          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 20.0522, // Лос-Анджелес, США
              longitude: -130.2437,
              latitudeDelta: 100, // Менший масштаб для більш точного огляду
              longitudeDelta: 0.1,
            }}
            scrollEnabled={false} // Забороняє прокручування карти
            pitchEnabled={false} // Забороняє нахил карти
            rotateEnabled={false} // Забороняє обертання карти
            onPress={handleMapPress} // Обробка натискань на карту
          >
            {selectedLocation && (
              <Marker.Animated
                coordinate={markerAnimated} // Використання анімованого маркера
              >
                <View style={styles.marker} />
              </Marker.Animated>
            )}
          </MapView>
        </View>

        {selectedLocation ? (
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={clear}
              activeOpacity={0.7}
              style={{
                width: '47%',
                backgroundColor: '#7A9EA0',
                paddingVertical: 7,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: Dimensions.get('screen').width * 0.056,
                  color: '#01172F',
                  fontWeight: '500',
                }}>
                Clear
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={save}
              activeOpacity={0.7}
              style={{
                width: '47%',
                backgroundColor: '#01172F',
                paddingVertical: 7,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: Dimensions.get('screen').width * 0.056,
                  color: '#FFF',
                  fontWeight: '500',
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.description}>
            Description{'\n'}You can delete a result that you have added in the
            settings
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#053281',
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
  mapContainer: {
    width: '93%',
    height: Dimensions.get('screen').height * 0.7,
    overflow: 'hidden',
    borderRadius: 10,
    alignSelf: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
    borderRadius: 30,
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7A9EA0',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    margin: 12,
  },
  imageIcon: {
    marginRight: 10, // Відступ між зображенням та текстом
  },
  mapButtonText: {
    color: '#D9D9D9',
  },
});
