import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export const EnablePassword = () => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleNextPress = () => {
    console.log("Password entered:", password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>PACIFIC OCEAN</Text>
        <Text style={styles.icon}>⚙️</Text>
      </View>
      <View style={styles.profile}>
        <View style={styles.profileImage} />
        <Text style={styles.profileName}>Bill Goas</Text>
      </View>
      <Text style={styles.title}>Delete profile</Text>
      <Text style={styles.description}>
        To confirm that it is you who is deleting this account, enter the
        password. You will no longer be able to restore this account, to log in
        again, create a new account
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the password"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
        placeholderTextColor="#A3C3D9"
      />
      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00334d",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  headerText: {
    color: "#A3C3D9",
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 24,
    color: "#A3C3D9",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#A3C3D9",
    marginRight: 15,
  },
  profileName: {
    color: "#ffffff",
    fontSize: 18,
  },
  title: {
    color: "#A3C3D9",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    color: "#A3C3D9",
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#004d66",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#A3C3D9",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#00334d",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});