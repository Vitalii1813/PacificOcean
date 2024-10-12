import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import SSG from '../svg/setting';

const PlusOcean = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AddResultForm');
  };
  const handleImagePress = () => {
    navigation.navigate('Settings'); // Назва сторінки, на яку ви хочете перейти
  };
  const players = [
    {
      rank: 1,
      name: 'Big Gary',
      weight: '704 kg',
      image: require('../svg/img/sharkOne.jpg'),
      fishName: 'Blue\nshark',
    },
    {
      rank: 2,
      name: 'Ser Roiy',
      weight: '641 kg',
      image: require('../svg/img/sharkTwo.jpg'),
      fishName: 'Shortfin\nmako shark',
    },
    {
      rank: 3,
      name: 'MC Lui',
      weight: '563 kg',
      image: require('../svg/img/sharkThree.jpg'),
      fishName: 'Blue\nshark',
    },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <View style={styles.header}>
        <Text style={styles.title}>PACIFIC OCEAN</Text>

        <TouchableOpacity onPress={handleImagePress}>
          <SSG col={'#7A9EA0'} sis={Dimensions.get('screen').width * 0.08} />
        </TouchableOpacity>
      </View>

      <View style={styles.ratingContainer}>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.ratingTitle}>Top 3 Ranking</Text>
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
                <View style={styles.emptyBox}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: Dimensions.get('screen').width * 0.06,
                      fontWeight: '600',
                    }}>
                    {player.fishName}
                  </Text>
                </View>

                <Image source={player.image} style={styles.imageSmall} />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.buttonNext} onPress={onPress}>
        <Text style={styles.buttonNextText}>Add my result</Text>
        <Image
          source={require('../svg/plus_img/arrow-right.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.moonContainer}>
        <Image
          source={require('../svg/plus_img/moon.png')}
          style={styles.moonImg}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.subtext}>
            You can be the next champion of our club. Add your result and check
            the rating
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#053281',
    paddingBottom: 50,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 25,
    backgroundColor: '#053281',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#7A9EA0',
    textAlign: 'center',
  },
  settingsImg: {
    marginRight: 20,
  },
  ratingContainer: {
    paddingHorizontal: 12, // зменшено з 16
    backgroundColor: '#E2E6E9',
    borderRadius: 16, // зменшено з 20
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  ratingTitle: {
    fontSize: 18, // зменшено з 22
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16, // зменшено з 20
    color: '#1C1C1C',
    paddingTop: 12,
  },
  remindContainer: {
    marginBottom: 16, // зменшено з 20
    borderRadius: 10, // зменшено з 12
    padding: 5, // зменшено з 10
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  ranking: {
    fontSize: 16, // зменшено з 20
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginRight: 5,
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
    marginLeft: 10,
  },
  emptyBox: {
    width: Dimensions.get('screen').width * 0.15 * 3, // зменшено з 35
    height: Dimensions.get('screen').width * 0.15, // зменшено з 35
    backgroundColor: '#7A9EA0',
    borderRadius: 6, // зменшено з 8
  },
  imageSmall: {
    width: Dimensions.get('screen').width * 0.3, // зменшено з 35
    height: Dimensions.get('screen').width * 0.15,
    borderRadius: 6,
  },
  moonContainer: {
    flexDirection: 'row', // Вирівнює елементи в ряд
    alignItems: 'center', // Центрує елементи по вертикалі
    padding: 20, // Додає відступи навколо елементів
    backgroundColor: '#053281', // Синій фон, як на вашому прикладі
  },
  moonImg: {
    width: 190,
    height: 220,
    resizeMode: 'cover', // Зображення зберігає пропорції
    marginRight: 20, // Відступ між зображенням і текстом
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 10, // Відступ між зображенням і текстом
  },
  description: {
    fontSize: 16,
    color: 'white',
    opacity: 0.8,
    marginBottom: 10,
    textAlign: 'right',
  },
  subtext: {
    fontSize: 12,
    color: '#7A9EA0',
    textAlign: 'right',
  },
  scrollContainer: {
    height: Dimensions.get('screen').height * 0.35,
  },
  settings_img: {
    marginTop: 0,
  },
  buttonNext: {
    backgroundColor: '#A7C4BC', // Сіро-зелений колір
    padding: 13,
    borderRadius: 10, // Значне заокруглення
    flexDirection: 'row', // Розміщення тексту та іконки в ряд
    alignItems: 'center', // Вирівнювання по вертикалі
    justifyContent: 'space-between', // Розподілення простору між текстом та іконкою
    width: '90%',
    marginLeft: 18,
  },
  buttonNextText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 50, // Кругла іконка
    padding: 8,
  },
  icon: {
    // Замініть це на стилі вашого компонента Icon
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default PlusOcean;
