import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const PlusOcean = () => {
  const navigation = useNavigation();

  const handleImagePress = () => {
    navigation.navigate('Settings'); // Назва сторінки, на яку ви хочете перейти
  };
  const players = [
    { rank: 1, name: 'Big Gary', weight: '57 kg' },
    { rank: 2, name: 'Ser Roiy', weight: '53 kg' },
    { rank: 3, name: 'MC Lui', weight: '48 kg' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
      <View style={styles.header}>
          <Text style={styles.title}>PACIFIC OCEAN</Text>
          <TouchableOpacity onPress={handleImagePress}>
            <Image
              source={require("../svg/home_img/settings.png")}
              style={styles.settings_img}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View style={styles.ratingContainer}>
        <Text style={styles.ratingTitle}>Rating</Text>
        <ScrollView style={styles.scrollContainer}>
        {players.map((player, index) => (
          <View key={index} style={styles.remindContainer}>
            <View style={styles.ratingRow}>
              <Text style={styles.ranking}>{player.rank}</Text>
              <Image
                source={require('../svg/plus_img/cup-star.png')}
                style={styles.trophyIcon}
              />
              <Text style={styles.name}>{player.name}</Text>
              <Text style={styles.weight}>{player.weight}</Text>
            </View>

            <View style={styles.emptyBoxesContainer}>
              {/* Пусті квадрати */}
              <View style={styles.emptyBox}></View>
              <View style={styles.emptyBox}></View>
              <View style={styles.emptyBox}></View>
              <View style={styles.emptyBox}></View>
              <View style={styles.emptyBox}></View>
            </View>
          </View>
        ))}
        </ScrollView>
      </View>
      

      <View style={styles.moonContainer}>
        <Image
          source={require('../svg/plus_img/moon.png')}
          style={styles.moonImg}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#053281',
    padding: 20,
    paddingBottom: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#7A9EA0",
    textAlign: 'center',
    marginRight: 0,
    marginLeft: 25
  },
  settingsImg: {
    marginRight: 20,
  },
  ratingContainer: {
    padding: 12, // зменшено з 16
    backgroundColor: '#E2E6E9',
    borderRadius: 16, // зменшено з 20
    width: '90%',
    alignSelf: 'center',
    marginBottom:20
  },
  ratingTitle: {
    fontSize: 18, // зменшено з 22
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16, // зменшено з 20
    color: '#1C1C1C',
  },
  remindContainer: {
    marginBottom: 16, // зменшено з 20
    borderRadius: 10, // зменшено з 12
    padding: 5, // зменшено з 10
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight:10,
  },
  ranking: {
    fontSize: 16, // зменшено з 20
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginRight:5
  },
  trophyIcon: {
    width: 18, // зменшено з 22
    height: 18, // зменшено з 22
    marginLeft: 5,
    
  },
  name: {
    fontSize: 16, // зменшено з 18
    color: '#1C1C1C',
    textAlign: 'left',
    flex: 1,
    marginLeft: 10,
  },
  weight: {
    fontSize: 14, // зменшено з 16
    fontWeight: '500',
    color: '#1C1C1C',
  },
  emptyBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8, // зменшено з 10
    marginLeft:10
  },
  emptyBox: {
    width: 35, // зменшено з 35
    height: 35, // зменшено з 35
    backgroundColor: '#7A9EA0',
    borderRadius: 6, // зменшено з 8
  },
  moonContainer: {
    alignSelf: 'center',
    marginTop: 20,
    width: 180, // зменшено з 220
    height: 180, // зменшено з 220
    borderRadius: 90, // зменшено з 110
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  moonImg: {
    resizeMode: 'contain',
  },
  scrollContainer: {
    height: 270, // зменшено з 320
  },
  settings_img: {
    marginTop: 0,
  },
});

export default PlusOcean;