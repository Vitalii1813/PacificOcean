import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
enableScreens();

import HomeOcean from './displays/HomeOcean';
import SaveOcean from './displays/SaveOcean';
import PlusOcean from './displays/PlusOcean';
import CodeOcean from './displays/CodeOcean';
import SettingsOcean from './displays/SettingsOcean';
import { EnablePassword } from './displays/EnablePassword';

import Home from './svg/bottom_tab/tsx/Home';
import AddCircle from './svg/bottom_tab/tsx/Add';
import Save from './svg/bottom_tab/tsx/Save';
import Code from './svg/bottom_tab/tsx/Code';
import SettingsF from './svg/bottom_tab/tsx/Settings';
import AddResultForm from './displays/AddResultForm';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const megaIconSizeSvg = 24;

// Іконки для табів
function HomeImgIcon({ focused }) {
  return <Home svgIconCustomSize={megaIconSizeSvg} fill={focused ? 'white' : 'transparent'} />;
}

function AddImgIcon({ focused }) {
  return (
    <AddCircle svgIconCustomSize={megaIconSizeSvg} fill={focused ? 'white' : '#7A9EA0'} stroke="white" strokeWidth="2" />
  );
}

function SaveImgIcon({ focused }) {
  return <Save svgIconCustomSize={megaIconSizeSvg} fill={focused ? 'white' : 'transparent'} stroke="white" strokeWidth="2" />;
}

function CodeImgIcon({ focused }) {
  return <Code svgIconCustomSize={megaIconSizeSvg} fill={focused ? 'white' : 'transparent'} />;
}

// Стек налаштувань всередині вкладки
function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsOcean}
        options={{ headerShown: false, title: 'Settings' }}
      />
      <Stack.Screen
        name="EnablePassword"
        component={EnablePassword}
        options={{ headerShown: false, title: 'Enable' }}
      />
    </Stack.Navigator>
  );
}

// Вкладка з навігацією
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
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
      }}>
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
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          headerShown: false,
          tabBarButton: () => null, // Приховуємо кнопку "Settings" у таб-барі
        }}
      />
      <Tab.Screen
        name="AddResultForm"
        component={AddResultForm}
        options={{
          headerShown: false,
          tabBarButton: () => null, // Приховуємо кнопку "Settings" у таб-барі
        }}
      />
    </Tab.Navigator>
  );
}

// Головна навігація з табами і додатковим екраном AddResultForm
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="AddResultForm" component={AddResultForm} />
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