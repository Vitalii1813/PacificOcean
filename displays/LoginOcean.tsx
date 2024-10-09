import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigation.replace('MainTabs');
    } else {
      alert('Будь ласка, введіть ім\'я користувача та пароль');
    }
  };

  return (
    <ImageBackground
      source={require('../svg/login_img/all_sea.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <SafeAreaView />
        <Text style={styles.title}>JOIN PACIFIC OCEAN</Text>
        <View style={styles.formContainer}> 
          <TextInput
            style={styles.input}
            placeholder="User name"
            placeholderTextColor="#ddd"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ddd"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.accountText}>Accounts are issued upon joining the club</Text>
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
    resizeMode: 'cover', // або 'contain'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700', 
    marginBottom: 40,
    letterSpacing: 1.5,
  },
  formContainer: {
    backgroundColor: 'rgba(52, 78, 81, 0.7)', // Змінено колір фону форми
    padding: 30,
    borderRadius: 15,
    width: '80%',
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: 'rgba(0, 77, 64, 0.8)', // Змінено колір фону інпутів
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    color: '#fff',
    fontSize: 16,
  },
  accountText: {
    color: '#ddd',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: '#007764', // Змінено колір кнопки
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff', // Змінено колір тексту на кнопці
    fontSize: 18,
    fontWeight: '600',
  },
});