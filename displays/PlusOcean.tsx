import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

const PlusOcean = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
      </SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>PACIFIC OCEAN</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingTitle}>Rating</Text>
        
        <View style={styles.ratingRow}>
          <Text style={styles.ranking}>1</Text>
          <Text style={styles.name}>Big Gary</Text>
          <Text style={styles.weight}>57 kg</Text>
        </View>
        
        <View style={styles.ratingRow}>
          <Text style={styles.ranking}>2</Text>
          <Text style={styles.name}>Ser Roly</Text>
          <Text style={styles.weight}>53 kg</Text>
        </View>
        
        <View style={styles.ratingRow}>
          <Text style={styles.ranking}>3</Text>
          <Text style={styles.name}>MC Lui</Text>
          <Text style={styles.weight}>48 kg</Text>
        </View>
      </View>

  
      <TouchableOpacity style={styles.addButton}>
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#00509e',
    padding: 20,
    paddingBottom: 50, 
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  ratingContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  ratingTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  ranking: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  name: {
    fontSize: 16,
    color: '#333333',
  },
  weight: {
    fontSize: 16,
    color: '#333333',
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