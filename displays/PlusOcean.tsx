import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';

const PlusOcean = () => {
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
          <Image
            source={require('../svg/home_img/settings.png')}
            style={styles.settingsImg}
          />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#7A9EA0',
    textAlign: 'center',
    flex: 1,
  },
  settingsImg: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  ratingContainer: {
    padding: 16,
    backgroundColor: '#E2E6E9',
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
  },
  ratingTitle: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1C1C1C',
  },
  remindContainer: {
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ranking: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  trophyIcon: {
    width: 22,
    height: 22,
    marginLeft: 5,
  },
  name: {
    fontSize: 18,
    color: '#1C1C1C',
    textAlign: 'left',
    flex: 1,
    marginLeft: 10,
  },
  weight: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1C',
  },
  emptyBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  emptyBox: {
    width: 35,
    height: 35,
    backgroundColor: '#90A3A3',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#5D6D7E',
  },
  moonContainer: {
    alignSelf: 'center',
    marginTop: 20,
    width: 220,
    height: 220,
    borderRadius: 110,
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
  scrollContainer:{
    height: 320,
  }
});

export default PlusOcean;