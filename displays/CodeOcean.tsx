import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView} from "react-native";

const CodeOcean = () => {
  return (
    <View style={styles.container}>
      {/* Заголовок */}
      <SafeAreaView></SafeAreaView>
      <View style={styles.header}>
        
        <Text style={styles.title}>PACIFIC OCEAN</Text>
        <TouchableOpacity style={styles.settingsIcon}>
          {/* Іконка налаштувань */}
          <Text style={styles.icon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Опис */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          Scan the QR code of the boat you are currently in to start baiting
          fish on the radio controlled boat
        </Text>
      </View>

      {/* Сканер QR */}
      <View style={styles.qrScannerContainer}>
        <View style={styles.qrScanner}>
          <Text style={styles.qrPlaceholder}>📷</Text>
        </View>
        <Text style={styles.qrLabel}>Scan Qr</Text>
      </View>

      {/* Кнопка "Next" */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006064", // Синьо-зелений фон, як на зображенні
    padding: 20,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  settingsIcon: {
    padding: 10,
    backgroundColor: "#004D40",
    borderRadius: 20,
  },
  icon: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  descriptionContainer: {
    alignItems: "center",
  },
  descriptionTitle: {
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: "#B3E5FC",
    textAlign: "center",
  },
  qrScannerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  qrScanner: {
    width: 200,
    height: 200,
    backgroundColor: "#000000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  qrPlaceholder: {
    fontSize: 30,
    color: "#FFFFFF",
  },
  qrLabel: {
    fontSize: 20,
    color: "#FFFFFF",
    transform: [{ rotate: "-90deg" }], // Повертаємо текст вертикально
    position: "absolute",
    left: -50,
  },
  nextButton: {
    backgroundColor: "#E0F7FA",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  nextButtonText: {
    fontSize: 18,
    color: "#004D40",
    fontWeight: "bold",
  },
});

export default CodeOcean;