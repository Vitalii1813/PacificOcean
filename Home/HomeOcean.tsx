import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import   
 ArrowIcon from "../svg/home_img/ArrowRight";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import MapScreen from "./MapScreen";

const HomeOcean = () => {
  const navigation = useNavigation();
  const [isMapOpen, setIsMapOpen] = useState(false); 
  const [selectedOption, setSelectedOption] = useState(null); 
  const [backgroundColor, setBackgroundColor] = useState("#0C757A"); 

  const handleImagePress = () => {
    navigation.navigate('Settings');
  };

  const handleMapPress = () => {
    setIsMapOpen(!isMapOpen); 
    setBackgroundColor(isMapOpen ? "#0C757A" : "#FFFFFF"); 
  };

  const toggleOption = (option) => {
    setSelectedOption(prev => (prev === option ? null : option)); 
  };

  useFocusEffect(
    React.useCallback(() => {
      const timer = setTimeout(() => {
        navigation.navigate('Home'); 
      }, 30000); 

      return () => clearTimeout(timer); 
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SafeAreaView></SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.title}>PACIFIC OCEAN</Text>
          <TouchableOpacity onPress={handleImagePress}>
            <Image
              source={require("../svg/home_img/settings.png")}
              style={styles.settings_img}
            />
          </TouchableOpacity>
        </View>

        {isMapOpen ? (
          <MapScreen />
        ) : (
          <>
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
              <TouchableOpacity 
                style={[
                  styles.optionButton, 
                  { backgroundColor: selectedOption === 'sailing' ? 'white' : 'rgba(255, 255, 255, 0.1)' } 
                ]}
                onPress={() => toggleOption('sailing')}
              >
                {selectedOption === 'sailing' && (
                  <Image
                    source={require("../svg/home_img/done-all.png")}
                    style={styles.done_img}
                  />
                )}
                <View style={styles.yacht_block}>
                  <Image
                    source={require("../svg/home_img/ship.png")}
                    style={styles.yacht_img}
                  />
                  <Text style={styles.optionText}>Sailing yacht</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[
                  styles.optionButton, 
                  { backgroundColor: selectedOption === 'motor' ? 'white' : 'rgba(255, 255, 255, 0.1)' } 
                ]}
                onPress={() => toggleOption('motor')}
              >
                {selectedOption === 'motor' && (
                  <Image
                    source={require("../svg/home_img/done-all.png")}
                    style={styles.done_img}
                  />
                )}
                <View style={styles.yacht_block}>
                  <Image
                    source={require("../svg/home_img/ship.png")}
                    style={styles.yacht_img}
                  />
                  <Text style={styles.optionText}>Motor yacht</Text>
                </View>
              </TouchableOpacity>
              
              <View style={styles.footer}>
                <TouchableOpacity style={styles.mapButton} onPress={handleMapPress}>
                  <Text style={styles.mapText}>Open map</Text>
                  <ArrowIcon width={25} height={25} fill="white" />
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C757A",
  },
  content: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 20,
  },
  header: {
    flex: 1.1,
    flexDirection: 'row',
    height: '10%',
    marginTop: 20,
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
    marginTop: 5,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: "white",
    opacity: 0.8,
    marginBottom: 10,
    textAlign: 'left',
  },
  descriptionContainer: {
    justifyContent: 'flex-start',
    padding: 5,
    flex: 1,
  },
  subtext: {
    fontSize: 12,
    color: "#7A9EA0",
    textAlign: "left",
  },
  imageContainer: {
    flexDirection: 'row',
    height: 350,
    width: '100%',
    marginTop: 10
  },
  backgroundImage: {
    flex: 1.7,
    marginTop: 40,
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
  mapButton: {
    backgroundColor: "#7A9EA0",
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "100%",
  },
  mapText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  yacht_img: {
    marginLeft: 55,
  },
  done_img: {
    marginRight: 50
  },
  yacht_block: {
    flex: 1.3,
    flexDirection: 'row',
  },
  optionText: {
    color: 'black',
    fontSize: 16,
    fontWeight: "400",
    flex: 1,
    textAlign: 'right',
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeOcean;