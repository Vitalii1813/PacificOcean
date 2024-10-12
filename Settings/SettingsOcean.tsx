import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  TextInput,
  Modal,
  Dimensions,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Bsg from '../svg/back';

const SettingsOcean = ({navigation}) => {
  const [profileImageUri, setProfileImageUri] = useState(null);
  const [userName, setUserName] = useState('Your username');
  const [modalVisible, setModalVisible] = useState(false);
  const [newUserName, setNewUserName] = useState(userName); // For the modal input

  const handleSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setProfileImageUri(response.assets[0].uri);
        }
      },
    );
  };

  const handlePress = (screenName: string) => {
    // Existing handlePress logic for navigation
    if (
      screenName === 'DeleteProfile' ||
      screenName === 'SignOut' ||
      screenName === 'CancelSailing' ||
      screenName === 'CancelBoat' ||
      screenName === 'CancelRecord' ||
      screenName === 'DeleteApplications'
    ) {
      // Show confirmation for critical actions
      Alert.alert(
        'Confirmation',
        `Are you sure you want to ${
          screenName === 'DeleteProfile'
            ? 'delete your profile'
            : screenName === 'SignOut'
              ? 'sign out'
              : screenName === 'CancelSailing'
                ? 'cancel a sailing reservation'
                : screenName === 'CancelBoat'
                  ? 'cancel the boat reserve'
                  : screenName === 'CancelRecord'
                    ? 'cancel the record request'
                    : 'delete all applications'
        }?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('EnablePassword', {action: screenName});
            },
          },
        ],
      );
    } else {
      navigation.navigate(screenName);
    }
  };

  function cancelAllRequest() {
    async function asldaksd() {
      Alert.alert('You have successfully canceled all applications');

      await AsyncStorage.setItem('map', '');
      await AsyncStorage.setItem('SaveOcean', '');
    }

    Alert.alert(
      'Do you want to cancel all submitted applications and bookings?',
      'If you want to confirm the cancellation of all your applications, please click yes.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: asldaksd},
      ],
    );
  }

  function cancelRequest() {
    async function asldaksd() {
      Alert.alert(
        'You have successfully canceled the application for the new record',
      );
    }

    Alert.alert(
      'Confirm Action',
      'Are you sure you want to cancel the application for the new record?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: asldaksd},
      ],
    );
  }

  function out() {
    async function asldaksd() {
      navigation.replace('Login');
      await AsyncStorage.setItem('Log', '');
    }

    Alert.alert(
      'Do you want to exit?',
      'Please confirm that you want to exit',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: asldaksd},
      ],
    );
  }

  const handleOpenModal = () => {
    setNewUserName(userName); // Set current username in the modal input
    setModalVisible(true);
  };

  const handleSaveUsername = async () => {
    setUserName(newUserName);
    setModalVisible(false);
    await AsyncStorage.setItem('Name', newUserName);
    Alert.alert('Username Updated', `Your new username is: ${newUserName}`);
  };

  async function takeName() {
    const na = await AsyncStorage.getItem('Name');
    if (na) {
      setUserName(na);
    } else {
      setUserName('Your username');
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      takeName();
    }, [navigation]),
  );

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.whiteContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Bsg col={'#7A9EA0'} sis={Dimensions.get('screen').width * 0.06} />
          </TouchableOpacity>

          <Text style={styles.title}>PACIFIC OCEAN</Text>
        </View>

        <View style={styles.profileUserContent}>
          <Text style={styles.profileUser}>Profile User</Text>

          <TouchableOpacity
            hitSlop={12}
            onPress={handleOpenModal}
            style={styles.usernameInput}>
            <Text
              style={{
                color: '#FFF',
                fontSize: Dimensions.get('screen').width * 0.05,
                fontWeight: '500',
              }}>
              {userName}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Modal for updating username */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Update Username</Text>
              <TextInput
                style={styles.modalInput}
                value={newUserName}
                onChangeText={setNewUserName}
              />
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleSaveUsername}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableOpacity style={styles.button} onPress={cancelAllRequest}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Cancel record request</Text>
            <Image
              source={require('../svg/settings_img/Vector.png')}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('DeleteApplications')}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Delete all applications</Text>
            <Image
              source={require('../svg/settings_img/Vector.png')}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={out}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Sign Out</Text>
            <Image
              source={require('../svg/settings_img/Vector.png')}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('DeleteProfile')}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Delete profile</Text>
            <Image
              source={require('../svg/settings_img/Vector.png')}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#073B3E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 30,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: Dimensions.get('screen').width * 0.24,
    height: Dimensions.get('screen').width * 0.24,
    borderRadius: Dimensions.get('screen').width * 0.12,
    backgroundColor: '#ffffff',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImagePlaceholder: {
    color: 'grey',
    textAlign: 'center',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  profileName: {
    color: '#ffffff',
    fontSize: 17,
  },
  profileUser: {
    color: 'grey',
    fontSize: Dimensions.get('screen').width * 0.06,
    textAlign: 'center',
  },
  profileUserContent: {
    marginBottom: 20,
  },
  usernameInput: {
    paddingVertical: 7,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  modalInput: {
    width: '100%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#76A6A9',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#76A6A9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  whiteContainer: {
    backgroundColor: '#002224',
    padding: 15,
    borderRadius: 15,
    width: '95%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#7A9EA0',
    marginRight: 0,
    width: 250,
  },
});

export default SettingsOcean;
