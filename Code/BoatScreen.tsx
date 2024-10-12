import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native';
import LoaderModal from '../Modal/modal';

const BoatScreen = ({coordinates, setCoordinates, close}: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const animatedValue = useRef(new Animated.ValueXY()).current;

  // Функція для обробки натискань
  const handlePress = e => {
    const {locationX, locationY} = e.nativeEvent;
    console.log('Pressed coordinates:', locationX, locationY);

    // Анімуємо точку до нових координат
    Animated.timing(animatedValue, {
      toValue: {x: locationX - 10, y: locationY - 10}, // Віднімемо половину розміру точки, щоб центрувати її
      duration: 300,
      useNativeDriver: false,
    }).start();

    // Оновлюємо стан координат
    setCoordinates({x: locationX, y: locationY});
  };

  const sendBoat = () => {
    setModalVisible(true);
  };

  function end() {
    close();
  }

  return (
    <View style={styles.newScreenContainer}>
      <View
        style={{width: '100%', height: '100%', position: 'absolute'}}
        onTouchStart={handlePress}
      />
      {coordinates.x !== 0 && coordinates.y !== 0 ? (
        <View />
      ) : (
        <View style={styles.descriptionContainer} pointerEvents="none">
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Select the location where the bait needs to be released, and our
            remote-controlled boat will deliver it there.
          </Text>
        </View>
      )}

      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../svg/save_img/boat.png')}
          style={styles.boatImage}
        />
      </View>

      {coordinates.x !== 0 && coordinates.y !== 0 ? (
        <>
          <View style={styles.badSeaContainer}>
            <View style={styles.descriptionBlocker}>
              <Text style={styles.descriptionTitle}>Description</Text>
              <Text style={styles.descriptionText}>
                Choose the direction in which you need to release the bait
              </Text>
            </View>

            <TouchableOpacity style={styles.senderBlocker} onPress={sendBoat}>
              <Text style={styles.catchText}>{'Send\nboat'}</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.catchContainer} pointerEvents="none">
          <View style={styles.imgContent}>
            <View style={styles.button} />
            <Image
              source={require('../svg/save_img/boat.png')}
              style={styles.boatSecondImage}
            />
          </View>

          <Text style={styles.catchText}>A place of great catch</Text>
        </View>
      )}

      {coordinates.x !== 0 && coordinates.y !== 0 && (
        <Animated.View
          style={[
            styles.dot,
            {transform: animatedValue.getTranslateTransform()},
          ]}
        />
      )}

      {modalVisible && (
        <LoaderModal
          modalVisible={modalVisible}
          end={end}
          title={'Success'}
          description={
            'You have successfully created a bait deployment request for the boat. The boat will soon drop the bait at the specified location relative to the ship'
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  newScreenContainer: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 12,
  },
  descriptionContainer: {
    width: '60%',
    marginLeft: '2.5%',
  },
  descriptionBlocker: {
    width: '65%',
  },
  senderBlocker: {
    backgroundColor: '#073B3E',
    width: '35%',
    borderWidth: 2,
    borderRadius: 10,
    padding: 0,
    justifyContent: 'center',
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#073B3E',
    textAlign: 'left',
    marginBottom: 20,
  },
  dot: {
    position: 'absolute',
    width: 20, // Розмір точки
    height: 20,
    backgroundColor: '#0d0364',
    borderRadius: 10, // Кругла форма точки
    elevation: 5, // Додаємо тінь для видимості
  },
  descriptionText: {
    fontSize: 16,
    color: '#073B3E',
    lineHeight: 24,
    textAlign: 'left',
  },
  boatImage: {
    resizeMode: 'contain',
    position: 'absolute',
  },
  badSeaContainer: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
  },
  boatSecondImage: {
    width: 60,
    height: 120,
    marginBottom: 0,
    borderRadius: 10,
  },
  catchText: {
    color: '#FFFFFF',
    fontSize: Dimensions.get('screen').width * 0.06,
    fontWeight: '800',
    textAlign: 'center',
  },
  catchContainer: {
    width: 170,
    height: 180,
    backgroundColor: '#073B3E',
    padding: 3,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 4},
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginRight: '2.5%',
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#374049',
    borderRadius: 25,
    padding: 8,
    width: 15,
    height: 15,
    justifyContent: 'center',
    marginRight: 20,
  },
  imgContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
export default BoatScreen;
