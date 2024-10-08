import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BookedMapScreen = () => {
    return (
        <><View style={styles.bookedOnWrapper}>
        <TouchableOpacity style={styles.bookedOnButton}>
          <Text style={styles.bookedOnButtonText}>Booked on 17.03.2024</Text>
        </TouchableOpacity>
      </View>
          
          <View style={styles.containerStep}>
                  <View style={styles.header}>
    
    
                  </View>
                  <Text style={styles.successText}>
                      Your booking is successful. Save your personal code that you can use to cancel the reservation
                  </Text>
                  <View style={styles.codeContainer}>
                      <View style={styles.secondCodeContainer}>
                          <Text style={styles.codeLabel}>Your reservation code:</Text>
                          <Text style={styles.codeText}>u3nk52o2</Text>
                      </View>
                      <TouchableOpacity style={styles.cancelButton}>
                          <Text style={styles.cancelButtonText}>Cancel</Text>
                      </TouchableOpacity>
                  </View>
    
              </View></>
      );
    };

const styles = StyleSheet.create({
  containerStep: {
    marginTop:10,
    backgroundColor: '#7A9EA0',
    padding: 15,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Вирівнюємо елементи по правому краю
    alignItems: 'center', // Вирівнюємо по вертикалі
    marginBottom: 20,
  },
  successText: {
    fontSize: 16,
    color: '#073B3E',
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  codeLabel: {
    fontSize: 16,
    color: '#002224',
  },
  codeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002224',
  },
  cancelButton: {
    backgroundColor: '#54666A',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    // width: '30%', // Забираємо width, щоб кнопка не займала всю ширину
  },
  cancelButtonText: {
    textAlign:'right',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondCodeContainer:{
    color:'#002224'
  },
  bookedOnWrapper: {     // Ширина на весь екран
    paddingHorizontal: 10, 
          // Відступи з боків
    marginBottom: 0,    
    alignItems: 'flex-end',          // Відступ знизу
  },
  
  bookedOnButton: {
    backgroundColor: '#7A9EA0',    // Темний фон кнопки
    borderRadius: 20,              // Округлення кутів
    paddingVertical: 10,           // Внутрішні відступи по вертикалі
    paddingHorizontal: 20,         // Внутрішні відступи по горизонталі
    alignItems: 'flex-end',  
    height:40,
    justifyContent:'space-between'        // Вирівнювання тексту по центру
  },
  
  bookedOnButtonText: {
    color: 'white',                // Колір тексту
    fontSize: 16,                  // Розмір шрифту
    fontWeight: 'bold',            // Жирний шрифт
  },
});

export default BookedMapScreen;