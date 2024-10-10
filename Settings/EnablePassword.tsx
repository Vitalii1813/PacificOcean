import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";

export const EnablePassword = () => {
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const action = route.params?.action;

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleNextPress = () => {
    if (password.trim() === "") {
      Alert.alert("Error", "Please enter your password.");
      return;
    }

    console.log("Password entered:", password);
    Alert.alert("Action Confirmed", `You are attempting to: ${action}`);
  };

  // Function to get the description based on action
  const getDescription = (action) => {
    switch (action) {
      case "DeleteProfile":
        return "To confirm that it is you who is deleting this account, enter the password. You will no longer be able to restore this account, to log in again, create a new account.";
      case "SignOut":
        return "To confirm that you want to sign out, please enter your password. Signing out will require you to log in again.";
      case "CancelSailing":
        return "To cancel your sailing reservation, please enter your password for confirmation.";
      case "CancelBoat":
        return "To cancel the boat reservation, please enter your password for confirmation.";
      case "CancelRecord":
        return "To cancel the record request, please enter your password for confirmation.";
      case "DeleteApplications":
        return "To delete all applications, please enter your password for confirmation.";
      default:
        return "Please enter your password for confirmation.";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SafeAreaView></SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.title}>PACIFIC OCEAN</Text>
          <TouchableOpacity onPress={handleSettings}>
            <Image source={require("../svg/home_img/settings.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.profile}>
          <View style={styles.profileImage} />
          <View style={styles.profileUserContent}>
            <Text style={styles.profileUser}>Profile User</Text>
            <Text style={styles.profileName}>Bill Goas</Text>
          </View>
        </View>
        <View style={styles.deleteContainer}>
          <Text style={styles.titleSecond}>{action === "DeleteProfile" ? "Delete Profile" : "Confirm Action"}</Text>
          <Text style={styles.description}>
            {getDescription(action)} {/* Conditional description */}
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
      </View>
    </View>
  );
};

// Styles remain unchanged


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#073B3E",
    padding: 20,
  },
  content: {
    backgroundColor: "#002224",
    paddingHorizontal: 15,
    height: '80%',
    width: '100%',
    marginTop: 60,
    borderRadius: 15
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30
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
    backgroundColor: "#ffffff",
    marginRight: 15,
  },
  profileName: {
    color: "#ffffff",
    fontSize: 17,
  },
  profileUser:{
    color: "grey",
    fontSize: 12,
  },
  profileUserContent:{
    flex:1,
    flexDirection:'column',
  },
  titleSecond: {
    color: "#073B3E",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign:'center'
  },
  description: {
    color: "#7A9EA0",
    fontSize: 16,
    marginBottom: 20,
    textAlign:'center',
    width:'98%'
  },
  input: {
    backgroundColor: "#073B3E",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    color: "#7A9EA0",
  },
  button: {
    backgroundColor: "#7A9EA0",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#E6E6E6",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#7A9EA0",
    textAlign: 'center',
    marginRight: 20,
    marginLeft: 25
  },
  deleteContainer:{
    backgroundColor:'#D9D9D9',
    padding:20,
    borderRadius:15
  }
});