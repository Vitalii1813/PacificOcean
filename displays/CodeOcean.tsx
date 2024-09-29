
import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const QRCode = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
      </SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>Save Our Oceans</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Our oceans are facing numerous threats, from pollution and overfishing to climate change and habitat destruction. It's time to take action and protect these vital ecosystems.
        </Text>
        <Text style={styles.paragraph}>
          Learn about the ways you can make a difference, from reducing your plastic use to supporting sustainable seafood choices. Together, we can ensure a healthy future for our oceans and all the life they support.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f8ff', // Light blue background
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
});

export default QRCode;