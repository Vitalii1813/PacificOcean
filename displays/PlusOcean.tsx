import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';

const PlusOcean = () => {
  const players = [
    { rank: 1, name: 'Big Gary', weight: '57 kg' },
    { rank: 2, name: 'Ser Roiy', weight: '53 kg' },
    { rank: 3, name: 'MC Lui', weight: '48 kg' },
  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
      </SafeAreaView>
      <View style={styles.header}>
          <Text style={styles.title}>PACIFIC OCEAN
          </Text>
          <Image
            source={require("../svg/home_img/settings.png")}
            style={styles.settings_img}
          />
        </View>


      <View style={styles.ratingContainer}>
        <Text style={styles.ratingTitle}>Rating</Text>

        {players.map((player, index) => (
          <View style={styles.remindContainer}>
            <View key={index} style={styles.ratingRow}>
              <Text style={styles.ranking}>{player.rank}
              </Text>
              <Image
                source={require('../svg/plus_img/cup-star.png')}
                style={styles.trophyIcon}
              />
              <Text style={styles.name}>{player.name}</Text>
              <Text style={styles.weight}>{player.weight}</Text>
            </View>



            <View style={styles.emptyBoxesContainer}>
              {/* Місце для пустих квадратів */}
              <View style={styles.emptyBox}></View>
              <View style={styles.emptyBox}></View>
              <View style={styles.emptyBox}></View>
              <View style={styles.emptyBox}></View>
              <View style={styles.emptyBox}></View>
            </View>


          </View>
        ))}
      </View>


      {/* <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add my result</Text>
      </TouchableOpacity>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          You can be the next champion of the Pacific Ocean! Add your result and check the rating.
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.iconPlaceholder} />
        <View style={styles.iconPlaceholder} />
        <View style={styles.iconPlaceholder} />
      </View> */}
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
    marginBottom:20
  },
  ratingContainer: {
    padding: 6,
    backgroundColor: '#E2E6E9', // Світло-сірий колір для фону
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
  },
  ratingTitle: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1C1C1C', // Темний текст для заголовку
  },
  remindContainer: {
    marginBottom: 20, // Відступ між рядками
    backgroundColor: '#F5F5F5', // Світлий фон для кожного рядка
    borderRadius: 12,
    padding: 8,
    shadowColor: '#000', // Тінь для додаткового ефекту
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#B0B0B0', // Легка лінія між елементами
  },
  ranking: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1C1C',
    flexDirection: 'row',
    alignItems: 'center',
  },
  trophyIcon: {
    width: 22, // Зменшено розмір іконки
    height: 22,
    marginLeft: 5,
  },
  name: {
    fontSize: 18,
    flex: 1,
    color: '#1C1C1C',
    textAlign: 'left', // Вирівняння імені по лівому краю
    marginLeft: 10, // Додано відступ для імені
  },
  weight: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1C', // Темний колір для тексту ваги
    textAlign: 'right', // Вирівнювання по правому краю
  },
  emptyBoxesContainer: {
    flexDirection: 'row',
    justifyContent:'space-around',
    marginTop: 10,
  },
  emptyBox: {
    width: 35,
    height: 35,
    backgroundColor: '#90A3A3', // Колір пустих квадратів
    borderRadius: 8, // Округлі краї
    borderWidth: 1, // Легкий контур
    borderColor: '#5D6D7E', // Темний контур
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
  addButton: {
    backgroundColor: '#39A9DB',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  descriptionText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#ffffff30',
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#CCCCCC',
    borderRadius: 20,
  },
});

export default PlusOcean;