import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import SendBoat from "./SendBoat";

const BoatScreen = () => {
    const [showButton, setShowButton] = useState(false); // Змінено назву змінної

    const handlePress = () => {
        setShowButton(!showButton);
    };

    return (
        <View style={styles.newScreenContainer}>
            {showButton ? (
                // <SendBoat/>
                <View><Text>Second</Text>
                    <TouchableOpacity onPress={handlePress}>
                        <View style={styles.catchContainer}>
                            <TouchableOpacity style={styles.button}>
                            </TouchableOpacity>
                            <Image
                                source={require("../svg/save_img/boat.png")}
                                style={styles.boatSecondImage}
                            />
                            <Text style={styles.catchText}>A place of great catch</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ) : (
                <>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionTitle}>Description</Text>
                        <Text style={styles.descriptionText}>
                            Select the location where the bait needs to be released, and our
                            remote-controlled boat will deliver it there.
                        </Text>
                    </View>
                    <View style={styles.partSecondContent}>
                        <Image
                            source={require("../svg/save_img/boat.png")}
                            style={styles.boatImage}
                        />
                        <TouchableOpacity onPress={handlePress}>
                            <View style={styles.catchContainer}>
                                <View style={styles.imgContent}>
                                    <TouchableOpacity style={styles.button}>
                                    </TouchableOpacity>
                                    <Image
                                        source={require("../svg/save_img/boat.png")}
                                        style={styles.boatSecondImage}
                                    />
                                </View>

                                <Text style={styles.catchText}>A place of great catch</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    partSecondContent: {
        flexDirection: "column", // Вирівнювання елементів один під одним
        justifyContent: "flex-end", // Центрування елементів по вертикалі
        paddingVertical: 10, // Вертикальний відступ для створення простору
        marginTop: 20, // Відступ зверху
        backgroundColor: "transparent", // Прозорий фон, щоб не заважав іншим елементам
        width: "100%", // Ширина на всю ширину контейнера
    },
    newScreenContainer: {
        marginTop:10,
        borderWidth:2,
        borderColor:"red",
        flex: 1,
        backgroundColor: "transparent",
        paddingHorizontal: 10, // Додаємо горизонтальний відступ
    },
    descriptionContainer: {
        width: "100%", // Ширина на всю ширину контейнера
    },
    descriptionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#073B3E",
        marginBottom: 10,
        textAlign: "left",
    },
    descriptionText: {
        fontSize: 16,
        color: "#073B3E",
        lineHeight: 24,
        textAlign: "left", // Вирівнювання тексту по центру
    },
    boatImage: {
        marginHorizontal: 50,
        width: 230, // Ширина зображення
        height: 200, // Висота зображення
        borderRadius: 15,
        marginTop: 40, // Відступ знизу
        resizeMode: "contain", // Зображення не буде обрізатись
    },
    boatSecondImage: {
        width: 60, // Ширина зображення
        height: 120, // Висота зображення
        marginBottom: 0, // Відступ знизу
        borderRadius: 10,
    },
    catchText: {
        padding: 6,
        width: 100,
        color: "#FFFFFF",
        fontSize: 16,
        marginTop: 0,
        textAlign: "left",
    },
    catchContainer: {
        borderWidth:2,
        borderColor:"red",
        marginTop: 60,
        width: 170, // Ширина контейнера
        height: 180,
        backgroundColor: "#004D40",
        padding: 3,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        justifyContent: "flex-end",
        alignSelf: "flex-end", // Переміщуємо контейнер на ліву сторону
    },
    button: {
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "#374049",
        borderRadius: 25, // Робимо кнопку круглою
        padding: 8, // Додаємо внутрішній відступ
        width: 15, // Ширина кнопки
        height: 15, // Висота кнопки
        justifyContent: "center",
        // alignItems: "center",
        marginRight: 20, // Відступ справа
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    imgContent: {
        flexDirection: "row", // Розташування зображення та кнопки в рядок
        justifyContent: "flex-end", // Центрування елементів
        alignItems: "center", // Вирівнювання по вертикалі
    },
});
export default BoatScreen;