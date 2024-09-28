import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import CodeOcean from './displays/CodeOcean';

const Tab = createBottomTabNavigator();
const megaIconSizeSvg = Dimensions.get('screen').width * 0.07;


function HomeImgIcon({ focused }: any) {
  return (
    <Home
      svgIconCustomSize={megaIconSizeSvg}
      fill={focused ? 'red' : '#BB8FCE'}
    />
  );
}

function AddImgIcon({ focused }: any) {
  return (
    <AddCircle
      svgIconCustomSize={megaIconSizeSvg}
      fill={focused ? 'red' : '#BB8FCE'}
    />
  );
}

function SaveImgIcon({ focused }: any) {
  return (
    <Save
      svgIconCustomSize={megaIconSizeSvg}
      fill={focused ? 'red' : '#BB8FCE'}
    />
  );
}

function CodeImgIcon({ focused }: any) {
  return (
    <Code
      svgIconCustomSize={megaIconSizeSvg}
      fill={focused ? 'red' : '#002224'}
    />
  );
}
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#7D3C98',
        tabBarInactiveTintColor: '#BB8FCE',
        tabBarStyle: {
          backgroundColor: '#4515A4',
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
          tabBarIcon:SaveImgIcon,
          headerShown: false,
        }}
      />

<Tab.Screen
        name="Code"
        component={CodeOcean}
        options={{
          tabBarIcon:CodeImgIcon,
          headerShown: false,
        }}
      />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainTabs />
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