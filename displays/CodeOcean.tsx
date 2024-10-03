import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Alert } from "react-native";
// import { Camera} from 'react-native-vision-camera';
// import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';

const CodeOcean = () => {
  // const [cameraPermission, setCameraPermission] = useState(null);
  // const [camera, setCamera] = useState(null);
  // const [showCamera, setShowCamera] = useState(false);

  // const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.ALL_FORMATS], {
  //   checkInverted: true,
  // });

  // useEffect(() => {
  //   (async () => {
  //     const permission = await Camera.getCameraPermissionStatus();
  //     setCameraPermission(permission);
  //   })();
  // }, []);

  // useEffect(() => {
  //   if (barcodes.length > 0) {
  //     // Зупиняємо сканування та обробляємо результат
  //     setShowCamera(false);
  //     Alert.alert('QR Code Scanned', barcodes[0]?.displayValue || 'No display value');
  //   }
  // }, [barcodes]);

  // const requestCameraPermission = async () => {
  //   const newCameraPermission = await Camera.requestCameraPermission();
  //   setCameraPermission(newCameraPermission);
  // };

  // const handleQrPress = () => {
  //   if (cameraPermission === 'authorized') {
  //     setShowCamera(true);
  //   } else if (cameraPermission === null) {
  //     requestCameraPermission();
  //   } else {
  //     Alert.alert('Camera permission denied');
  //   }
  // };
  

  return (
    <View style={styles.container}>
      {/* Заголовок */}
      <View style={styles.header}>
        <Text style={styles.title}>PACIFIC OCEAN</Text>
        <TouchableOpacity style={styles.settingsIcon}>
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
      {/* <TouchableOpacity style={styles.qrScannerContainer} onPress={handleQrPress}>
        {showCamera ? (
          <Camera
            style={styles.camera}
            type={CameraType.back}
            ref={(ref) => setCamera(ref)}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
          />
        ) : (
          <>
            <View style={styles.qrScanner}>
              <Image
                source={require("../svg/code_img/qr-code.png")}
                style={styles.qrCodeImage} 
              />
            </View>
            <Text style={styles.qrLabel}>Scan QR</Text>
          </>
        )}
      </TouchableOpacity> */}

      {/* Кнопка "Next" */}
      <Image
        source={require("../svg/code_img/sea.png")}
        style={styles.backgroundImage} 
      />
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006064", 
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
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
    backgroundColor: "#204445", 
    borderRadius: 10,
    padding: 15, 
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: "#a1b1b0", 
  },
  qrScannerContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    marginBottom: 150,
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
  qrCodeImage: {
    width: 150,
    height: 150,
  },
  qrLabel: {
    fontSize: 20,
    color: "#FFFFFF",
    marginTop: 10, 
  },
  nextButton: {
    backgroundColor: "#E0F7FA",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  nextButtonText: {
    fontSize: 18,
    color: "#004D40",
    fontWeight: "bold",
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: "115%",
    height: "60%",
    resizeMode: "cover",
  },
});

export default CodeOcean;
