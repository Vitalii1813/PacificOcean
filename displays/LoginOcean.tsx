import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
} from 'react-native';

export default function LoginScreen({navigation}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email && password) {
      // Here you can also pass the email if needed
      navigation.replace('MainTabs', {userName: 'Bill Goas'});
      await AsyncStorage.setItem('Log', 'true');
    } else {
      alert('Please enter your username and password');
    }
  };

  return (
    <ImageBackground
      source={require('../svg/login_img/all_sea.png')}
      style={styles.backgroundImage}>
      <View onTouchStart={Keyboard.dismiss} style={styles.overlay}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>
            <Text style={styles.titlePacific}>JOIN PACIFIC</Text> OCEAN
          </Text>
          <Text style={styles.signTitle}>Sign in</Text>
          <TextInput
            style={styles.input}
            placeholder="User name"
            placeholderTextColor="grey"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.accountText}>
            Accounts are issued upon joining the club
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Paytone One',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    letterSpacing: 1.5,
    textAlign: 'right',
    marginTop: 30,
  },
  titlePacific: {
    color: '#293036',
  },
  formContainer: {
    backgroundColor: '#7A9EA0',
    padding: 30,
    borderRadius: 15,
    width: '100%',
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    color: 'grey',
    fontSize: 16,
  },
  accountText: {
    color: '#ddd',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },

  button: {
    width: '55%',
    backgroundColor: '#073B3E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 12,
  },
  signTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    letterSpacing: 1.5,
  },
});
