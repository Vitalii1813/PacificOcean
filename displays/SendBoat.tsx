import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const SendBoat = () => {
    const [showButton, setShowButton] = useState(false); // Змінено назву змінної

    const handlePress = () => {
        setShowButton(!showButton);
    };
    return (
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}>
                    </TouchableOpacity>

                    <Image
                        source={require("../svg/save_img/boat.png")}
                        style={styles.boatImage}
                    />

                    <View style={styles.badSeaContainer}>
                        <View style={styles.descriptionBlocker}>
                        <Text style={styles.descriptionTitle}>Description</Text>
                        <Text style={styles.descriptionText}>
                        Choose the direction in which you need to release the bait
                        </Text>
                        </View>

                        <View style={styles.senderBlocker}>
                        <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.catchText}>Send boat</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
    );
};

const styles = StyleSheet.create({
    newScreenContainer: {
        flex: 1,
        backgroundColor: "transparent",
    },
    descriptionContainer: {
        width: 195,
        marginTop: 10,
    },
    descriptionTitle: {
        fontSize: 18,
        color: "#073B3E",
        marginBottom: 10,
    },
    descriptionText: {
        fontSize: 15,
        color: "#073B3E",
        lineHeight: 22,
    },
    boatImage: {
        marginTop: 80,
        marginHorizontal: 70,
        borderRadius: 10,
        marginBottom:80
    },
    boatSecondImage: {
        width: 60,
        height: 120,
    },
    catchText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    catchContainer: {
        width: 180,
        marginLeft: 180,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#004D40",
        padding: 10,
        borderRadius: 10,
        marginTop: 30,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
    buttonsContainer: {
        alignItems: "center", // Вирівнювання кнопки по центру
        marginTop: 20,
    },
    button: {
        backgroundColor: "#374049",
        borderRadius: 50,
        padding: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    badSeaContainer: {
        flexDirection:"row",
        height:100,
        width:'100%',
        borderRadius: 10,
        marginTop: 80,
        padding: 5, // Додає внутрішні відступи
      },
      descriptionBlocker: {
        width:'70%',
        borderWidth:2,
        borderColor:'red',
        marginRight: 0, // Додає відступ праворуч
      },
      senderBlocker: {
        width:'30%',
        borderWidth:2,
        borderRadius: 10,
        padding: 0, // Додає внутрішні відступи до кнопки
      },
});

export default SendBoat;