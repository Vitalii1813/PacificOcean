import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingsOcean = () => {
  const navigation = useNavigation();

  const handlePress = (screenName: string) => {
    if (screenName === "DeleteProfile" || screenName === "SignOut") {
      // Show an alert to confirm the action
      Alert.alert(
        "Confirmation",
        `Are you sure you want to ${
          screenName === "DeleteProfile" ? "delete your profile" : "sign out"
        }?`,
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              // Use setTimeout to navigate after the alert is dismissed
              setTimeout(() => {
                navigation.navigate("EnablePassword"); // Correct navigation here
              }, 100);
            },
          },
        ]
      );
    } else {
      navigation.navigate(screenName);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>PACIFIC OCEAN</Text>
        <TouchableOpacity onPress={() => handlePress("Settings")}>
          <Text style={styles.icon}>⚙️</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profile}>
        <View style={styles.profileImage} />
        <Text style={styles.profileName}>Bill Goas</Text>
      </View>

      {/* Button with arrow icon */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress("CancelSailing")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Cancel a sailing reservation</Text>
          <Image
            source={require("../svg/settings_img/Vector.png")}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress("CancelBoat")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Cancel the boat reserve</Text>
          <Image
            source={require("../svg/settings_img/Vector.png")}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress("CancelRecord")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Cancel the record request</Text>
          <Image
            source={require("../svg/settings_img/Vector.png")}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress("DeleteApplications")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Delete all applications</Text>
          <Image
            source={require("../svg/settings_img/Vector.png")}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress("SignOut")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Sign out</Text>
          <Image
            source={require("../svg/settings_img/Vector.png")}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress("DeleteProfile")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Delete profile</Text>
          <Image
            source={require("../svg/settings_img/Vector.png")}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00334d",
    padding: 40,
    borderWidth:2,
    borderColor:'red'
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  headerText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 24,
    color: "#ffffff",
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
    fontSize: 18,
  },
  button: {
    backgroundColor: "#004d66",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});

export default SettingsOcean;