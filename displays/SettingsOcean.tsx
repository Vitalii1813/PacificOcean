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
import { SafeAreaView } from "react-native-safe-area-context";

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
      <SafeAreaView></SafeAreaView>
      <View style={styles.whiteContainer}>
      <View style={styles.header}>
          <Text style={styles.title}>PACIFIC OCEAN</Text>
          <TouchableOpacity>
            <Image
              source={require("../svg/home_img/settings.png")}
            />
          </TouchableOpacity>
        </View>
      <View style={styles.profile}>
        <View style={styles.profileImage} />
        <View style={styles.profileuserContent}>
        <Text style={styles.profileUser}>Profile User</Text>
        <Text style={styles.profileName}>Bill Goas</Text>
        </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#073B3E",
    padding: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
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
    fontSize: 17,
  },
  profileUser:{
    color: "grey",
    fontSize: 12,
  },
  profileuserContent:{
    flex:1,
    flexDirection:'column',
  },
  button: {
    backgroundColor: "#76A6A9",
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
  whiteContainer:{
    backgroundColor:'#002224',
    padding:15,
    borderRadius:15,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#7A9EA0",
    marginRight: 0,
    width:250
  },
});

export default SettingsOcean;