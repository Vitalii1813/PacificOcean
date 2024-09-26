import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { enableScreens } from 'react-native-screens';
enableScreens();
import HomeOcean from './src/displays/HomeOcean';
import SaveOcean from './src/displays/SaveOcean';
import PlusOcean from './src/displays/PlusOcean';
import QRCode from './src/displays/QRCode';
import LoginScreen from './src/displays/LoginScreen'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function OceanTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            // Use HomeIcon for the Home page
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Save the Ocean') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Plus') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'QRcode') {
            iconName = focused ? 'qr-code' : 'qr-code-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#0D47A1',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeOcean} />
      <Tab.Screen name="Save the Ocean" component={SaveOcean} />
      <Tab.Screen name="Plus" component={PlusOcean} />
      <Tab.Screen name="QRcode" component={QRCode} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} // Додаємо екран входу
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Main" 
          component={OceanTabs} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  text: {
    color: '#00796B',
    fontSize: 20,
  },
});