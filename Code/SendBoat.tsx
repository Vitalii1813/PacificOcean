import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  PanResponder,
  Animated,
  Dimensions,
  Alert,
} from 'react-native';

const SendBoat = () => {
  const [showButton, setShowButton] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [alertShown, setAlertShown] = useState(false); // Стан для контролю алерту

  const dotSize = 20; // Size of the dot

  // Animated value for smooth movement
  const animatedValue = useRef(new Animated.ValueXY()).current;

  // PanResponder for moving the dot
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        // Directly update the dot's position
        animatedValue.setValue({
          x: gestureState.dx, // Adjust for delta move in x-axis
          y: gestureState.dy, // Adjust for delta move in y-axis
        });
      },
      onPanResponderRelease: () => {
        setIsDisabled(!isDisabled); // Toggle disabled state on release
      },
    }),
  ).current;

  const handlePress = () => {
    if (!alertShown) {
      Alert.alert('Success', 'You have successfully set the bait!');
      setAlertShown(true); // Установлюємо стан, що алерт був показаний
    }
  };
  return (
    <View style={styles.buttonsContainer}>
      {/* Boat image */}
      <Image
        source={require('../svg/save_img/boat.png')}
        style={styles.boatImage}
      />

      {/* Description and button container */}
      <View
        style={styles.badSeaContainer}
        pointerEvents={isDisabled ? 'none' : 'auto'}>
        <View style={styles.descriptionBlocker}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Choose the direction in which you need to release the bait
          </Text>
        </View>

        <View style={styles.senderBlocker}>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.catchText}>Send boat</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Movable dot */}
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.dot, {transform: animatedValue.getTranslateTransform()}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    alignItems: 'center',
    marginTop: 20,
    position: 'relative',
    height: 300, // Add a specific height for the container
    width: '100%', // Full width
  },
  boatImage: {
    marginTop: 80,
    marginHorizontal: 70,
    borderRadius: 10,
    marginBottom: 80,
  },
  badSeaContainer: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    borderRadius: 10,
    marginTop: 50,
    padding: 5,
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
  },
  catchText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  dot: {
    borderWidth: 3,
    position: 'absolute',
    width: 20, // Size of the dot
    height: 20,
    backgroundColor: '#0d0364',
    borderRadius: 20, // Make it circular
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Add shadow for better visibility
  },
  descriptionTitle: {
    fontSize: 18,
    color: '#073B3E',
    marginBottom: 10,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 15,
    color: '#073B3E',
    lineHeight: 22,
    width: 220,
  },
});

export default SendBoat;
