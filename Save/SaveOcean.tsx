import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";

const SaveOcean: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState("17 September");
  const [needCaptain, setNeedCaptain] = useState(true);
  const [needFishingGear, setNeedFishingGear] = useState(true);

  const navigation = useNavigation();
  
  const handleDateChange = (text: string) => {
    setSelectedDate(text);
  };

  const handleCaptainChange = (value: boolean) => {
    setNeedCaptain(value);
  };

  const handleFishingGearChange = (value: boolean) => {
    setNeedFishingGear(value);
  };

  const handleReserve = () => {
    console.log("Reservation details:", {
      selectedDate,
      needCaptain,
      needFishingGear,
    });
    navigation.navigate('Reserve');
  };

  const handleSettings = () => {
    navigation.navigate('Settings'); // Navigate to SaveOcean screen
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <SafeAreaView></SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.title}>PACIFIC OCEAN
          </Text>
          <TouchableOpacity onPress={handleSettings}>
          <Image
            source={require("../svg/home_img/settings.png")}
            style={styles.settings_img}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={selectedDate}
          onChangeText={handleDateChange}
          placeholder="Choose available date"
          placeholderTextColor="#92a2ad"
        />

        <Text style={styles.label}>Do you need captain?</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.optionButton, needCaptain && styles.selectedButton]}
            onPress={() => handleCaptainChange(true)}
          >
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.optionButton, !needCaptain && styles.selectedButton]}
            onPress={() => handleCaptainChange(false)}
          >
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Do you need a fishing rod and tackle?</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              needFishingGear && styles.selectedButton,
            ]}
            onPress={() => handleFishingGearChange(true)}
          >
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              !needFishingGear && styles.selectedButton,
            ]}
            onPress={() => handleFishingGearChange(false)}
          >
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.reserveButton} onPress={handleReserve}>
          <Text style={styles.reserveButtonText}>Reserve</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Spend a wonderful time with your family on a small yacht enjoying the
            beauty of the ocean and delicious food and drinks.
          </Text>

          <View style={styles.imageContainer}>
          <View style={styles.emptyBlock}></View>
          <Image
            source={require("../svg/save_img/bottom_yacht.png")}
            style={styles.image}
          />
          </View>
          
        </View>
        

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1.1,
    flexDirection: 'row',
    height: '10%',
    marginTop: 20,
    marginBottom:20
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#7A9EA0",
    textAlign: 'center',
    marginRight: 28,
    marginLeft: 25
  },
  settings_img: {
    marginTop: 2,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 0,
  },
  wrapper: {
    backgroundColor: "#82a8a4", // Adjust background color as per the image
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    backgroundColor: "#d5e0df", // Background color similar to the input field in the image
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: "#527275", // Darker input text color
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: "#244645", // Dark green color for the label
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  optionButton: {
    flex: 1,
    backgroundColor: "#b8c9c8", // Default button color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#d1d9d9", // Slightly lighter color for selected buttons
  },
  buttonText: {
    fontSize: 16,
    color: "#203838", // Dark green for button text
  },
  reserveButton: {
    backgroundColor: "#203838", // Dark background for the reserve button
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  reserveButtonText: {
    color: "#ffffff", // White text for the reserve button
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#163d44", // Dark teal background similar to the image
  },
  descriptionContainer: {
    marginTop: 70,
    borderRadius: 10,
    padding: 0,
    flexDirection: 'row', // Розташовуємо елементи в ряд
    flexWrap: 'wrap', // Дозволяємо перенос на новий рядок
  },
  descriptionTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",
    width: '100%', // Займаємо всю ширину контейнера для заголовка
  },
  descriptionText: {
    color: "#a1b1b0",
    fontSize: 16,
    textAlign: "left",
    marginBottom: 0,
    width: '80%', // Займаємо всю ширину контейнера для опису
  },
  imageContainer: {
    // borderColor:'red',
    // borderWidth:3,
    flexDirection: "row", // Розміщення зображення по горизонталі
    justifyContent: "flex-end", // Вирівнювання до правого краю
    alignItems: "center", // Вирівнювання по вертикалі
    height:140
  },
  emptyBlock: {
    // borderColor:'red',
    // borderWidth:3,
    width:40,
    marginRight:25
  },
  image: {
  },
});

export default SaveOcean;