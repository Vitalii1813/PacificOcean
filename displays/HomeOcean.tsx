
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShip, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const HomeOcean = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
      <View style={styles.emptyspace}></View>
          <Text style={styles.title}>PACIFIC OCEAN</Text>
        </View>

        <View style={styles.imageContainer}>

          <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.subtext}>
            Book a ship and sail with us for fishing in the open ocean for a
            whole day from 9 am to 9 pm.
          </Text>
          </View>

          <Image
            source={require("../svg/home_img/parus.png")}
            style={styles.backgroundImage}
          />
        </View>

        <View style={styles.options}>
          <TouchableOpacity style={styles.optionButton}>
            <FontAwesomeIcon
              name="ship"
              size={20} // Зменшуємо розмір іконки
              color="white"
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>Sailing yacht</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <FontAwesomeIcon
              name="ship"
              size={20} // Зменшуємо розмір іконки
              color="white"
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>Motor yacht</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.mapButton}>
            <Text style={styles.mapText}>Open map</Text>
            <FontAwesomeIcon
              name="arrow-right"
              size={18} // Зменшуємо розмір іконки
              color="white"
              style={styles.mapIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00897b",
  },
  content: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 20,
  },
  emptyspace: {
    width: '100%',
    height: '35%',
    borderColor: 'yellow',
    borderWidth: 2,
  },
  header: {
    borderColor: 'blue',
    borderWidth: 2,
    height: '15%',
    marginTop:30,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#7A9EA0",
    textAlign: 'center',
    borderColor: 'red',
    borderWidth: 2,
  },
  description: {
    fontSize: 16,
    color: "white",
    opacity: 0.8,
    marginBottom: 10,
    textAlign: 'left',
  },
  descriptionContainer: {
             // Щоб зайняти 50% простору
    justifyContent: 'flex-start',
    padding: 5,
    borderColor: 'purple',
    borderWidth: 2,
    flex:1,
  },
  subtext: {
    fontSize: 12,
    color: "#7A9EA0",
    textAlign: "left",
    borderColor: 'red',
    borderWidth: 2,
  },
  imageContainer: {
    flexDirection: 'row',   // Вирівнюємо контент по горизонталі
    height: 350,            // Висота контейнера
    width: '100%',
    borderColor: 'red',
    borderWidth: 2,
  },
  backgroundImage: {
    flex:1.5,
    marginTop:40,
  },
  options: {
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  optionIcon: {
    marginRight: 10,
  },
  optionText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  mapButton: {
    backgroundColor: "#00897b",
    borderRadius: 10,
    paddingVertical: 12,
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    width: "100%",
  },
  mapText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  mapIcon: {
    marginLeft: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#ffffff30",
  },
});

export default HomeOcean;