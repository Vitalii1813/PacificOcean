import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; // Підключаємо Stack Navigator
import Ionicons from 'react-native-vector-icons/Ionicons';
import { enableScreens } from 'react-native-screens';
enableScreens();

import HomeOcean from './displays/HomeOcean';
import SaveOcean from './displays/SaveOcean';
import PlusOcean from './displays/PlusOcean';
import QRCode from './displays/CodeOcean';
import LoginScreen from './displays/LoginOcean';
import Home from './svg/bottom_tab/tsx/Home';
import AddCircle from './svg/bottom_tab/tsx/Add';
import Save from './svg/bottom_tab/tsx/Save';
import Code from './svg/bottom_tab/tsx/Code';
import SettingsF from './svg/bottom_tab/tsx/Settings';
import CodeOcean from './displays/CodeOcean';
import SettingsOcean from './displays/SettingsOcean'; // Екран налаштувань
import { EnablePassword } from './displays/EnablePassword';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Стек для налаштувань
const megaIconSizeSvg = 24;

// Іконки для табів
function HomeImgIcon({ focused }: any) {
  return (
    <Home
      svgIconCustomSize={megaIconSizeSvg}
      fill={focused ? 'white' : 'transparent'}
    />
  );
}

function AddImgIcon({ focused }: any) {
  return (
    <AddCircle
      svgIconCustomSize={megaIconSizeSvg}
      fill={focused ? 'white' : '#7A9EA0'} 
      stroke="white" 
      strokeWidth="2"
    />
  );
}

function SaveImgIcon({ focused }: any) {
  return (
    <Save
      svgIconCustomSize={megaIconSizeSvg}
      fill={focused ? 'white' : 'transparent'} 
      stroke="white" 
      strokeWidth="2"
    />
  );
}

function CodeImgIcon({ focused }: any) {
  return (
    <Code
      svgIconCustomSize={megaIconSizeSvg}
      fill={focused ? 'white' : 'transparent'}
    />
  );
}

// Навігація з табами
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#7D3C98',
        tabBarInactiveTintColor: '#BB8FCE',
        tabBarStyle: {
          backgroundColor: '#002224',
          paddingBottom: 0,
          paddingHorizontal: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarShowLabel: false,
      })}>

      <Tab.Screen
        name="Home"
        component={HomeOcean}
        options={{
          tabBarIcon: HomeImgIcon,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Plus"
        component={PlusOcean}
        options={{
          tabBarIcon: AddImgIcon,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Save"
        component={SaveOcean}
        options={{
          tabBarIcon: SaveImgIcon,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Code"
        component={CodeOcean}
        options={{
          tabBarIcon: CodeImgIcon,
          headerShown: false,
        }}
      />

      {/* Видаляємо Settings із табів */}
    </Tab.Navigator>
  );
}

// Головна навігація з табами і стеком
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainTabs"> 
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }}
          />
          {/* Додаємо SettingsOcean у стек */}
          <Stack.Screen
            name="Settings"
            component={SettingsOcean}
            options={{ headerShown: true, title: 'Settings' }}
          />
          <Stack.Screen
            name="EnablePassword"
            component={EnablePassword}
            options={{ headerShown: true, title: 'Enable' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002224',
  },
  text: {
    color: '#00796B',
    fontSize: 20,
  },
});