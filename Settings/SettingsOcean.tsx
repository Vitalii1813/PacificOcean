import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  TextInput,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { launchImageLibrary } from "react-native-image-picker";

const SettingsOcean = () => {
  const navigation = useNavigation();
  const [profileImageUri, setProfileImageUri] = useState(null);
  const [userName, setUserName] = useState("Your username");
  const [modalVisible, setModalVisible] = useState(false);
  const [newUserName, setNewUserName] = useState(userName); // For the modal input

  const handleSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        includeBase64: false,
      },
      (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          console.log("ImagePicker Error: ", response.error);
        } else {
          setProfileImageUri(response.assets[0].uri);
        }
      }
    );
  };

  const handlePress = (screenName: string) => {
    // Existing handlePress logic for navigation
    if (
      screenName === "DeleteProfile" ||
      screenName === "SignOut" ||
      screenName === "CancelSailing" ||
      screenName === "CancelBoat" ||
      screenName === "CancelRecord" ||
      screenName === "DeleteApplications"
    ) {
      // Show confirmation for critical actions
      Alert.alert(
        "Confirmation",
        `Are you sure you want to ${
          screenName === "DeleteProfile"
            ? "delete your profile"
            : screenName === "SignOut"
            ? "sign out"
            : screenName === "CancelSailing"
            ? "cancel a sailing reservation"
            : screenName === "CancelBoat"
            ? "cancel the boat reserve"
            : screenName === "CancelRecord"
            ? "cancel the record request"
            : "delete all applications"
        }?`,
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("EnablePassword", { action: screenName });
            },
          },
        ]
      );
    } else {
      navigation.navigate(screenName);
    }
  };

  const handleOpenModal = () => {
    setNewUserName(userName); // Set current username in the modal input
    setModalVisible(true);
  };

  const handleSaveUsername = () => {
    setUserName(newUserName);
    setModalVisible(false);
    Alert.alert("Username Updated", `Your new username is: ${newUserName}`);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.whiteContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>PACIFIC OCEAN</Text>
          <TouchableOpacity>
            <Image source={require("../svg/home_img/settings.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.profile}>
          <TouchableOpacity onPress={handleSelectImage}>
            <View style={styles.profileImage}>
              {profileImageUri ? (
                <Image
                  source={{ uri: profileImageUri }}
                  style={styles.imagePreview}
                />
              ) : (
                <Text style={styles.profileImagePlaceholder}>Add Image</Text>
              )}
            </View>
          </TouchableOpacity>
          <View style={styles.profileUserContent}>
            <Text style={styles.profileUser}>Profile User</Text>
            <TouchableOpacity onPress={handleOpenModal}>
              <TextInput
                style={styles.usernameInput}
                value={userName}
                editable={false} // Make it read-only to encourage modal use
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Modal for updating username */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
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
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleSaveUsername}
                >
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Buttons for various actions */}
        <TouchableOpacity style={styles.button} onPress={() => handlePress("CancelSailing")}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Cancel a sailing reservation</Text>
            <Image source={require("../svg/settings_img/Vector.png")} style={styles.image} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress("CancelBoat")}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Cancel the boat reservation</Text>
            <Image source={require("../svg/settings_img/Vector.png")} style={styles.image} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress("CancelRecord")}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Cancel record request</Text>
            <Image source={require("../svg/settings_img/Vector.png")} style={styles.image} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress("DeleteApplications")}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Delete all applications</Text>
            <Image source={require("../svg/settings_img/Vector.png")} style={styles.image} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress("SignOut")}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Sign Out</Text>
            <Image source={require("../svg/settings_img/Vector.png")} style={styles.image} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress("DeleteProfile")}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Delete profile</Text>
            <Image source={require("../svg/settings_img/Vector.png")} style={styles.image} />
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
    justifyContent: "center",
    alignItems: "center",
  },
  profileImagePlaceholder: {
    color: "grey",
    textAlign: "center",
  },
  imagePreview: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  profileName: {
    color: "#ffffff",
    fontSize: 17,
  },
  profileUser: {
    color: "grey",
    fontSize: 14,
  },
  profileUserContent: {
    flex: 1,
    flexDirection: "column",
  },
  usernameInput: {
    height:20,
    color: "#ffffff",
    fontSize: 17,
    borderBottomColor: "transparent",
    borderBottomWidth: 1,
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
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
    textAlign: "center",
    fontSize: 18,
  },
  modalInput: {
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    backgroundColor: "#76A6A9",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
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
  whiteContainer: {
    backgroundColor: "#002224",
    padding: 15,
    borderRadius: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#7A9EA0",
    marginRight: 0,
    width: 250,
  },
});

export default SettingsOcean;
