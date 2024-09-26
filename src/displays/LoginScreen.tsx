import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Додайте логіку для входу
    if (email && password) {
      navigation.replace('Main');
    } else {
      alert('Будь ласка, введіть ім\'я користувача та пароль');
    }
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://example.com/your-ocean-image.jpg' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>JOIN PACIFIC OCEAN</Text>
        <TextInput
          style={styles.input}
          placeholder="User name"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} color="#004d40" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // напівпрозорий фон
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  input: {
    height: 40,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});