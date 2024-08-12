import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Details from './details/details';

function KarteScreen() {
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Welcome to Karte!</Text>
 </View>
  );
}

function CheckScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Welcome to Camera!</Text>
      </View>
  
    );
  }

function TourenScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to Touren!</Text>
      </View>
    );
  }
function SucheScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Suche!</Text>
    </View>
  );
}
function ProfilScreen() {
    return (
      <Details></Details>
    );
  }

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer  >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Profil') {
                iconName = focused
                  ? 'person-outline'
                  : 'person-outline';
              } else if (route.name === 'Suche') {
                iconName = focused ? 'search' : 'search';
              }
              else if (route.name === 'Touren') {
                iconName = focused ? 'map-outline' : 'map-outline';
              }
              else if (route.name === 'Check') {
                iconName = focused ? 'camera-outline' : 'camera-outline';
              }

              else if (route.name === 'Karte') {
                iconName = focused ? 'navigate-outline' : 'navigate-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: '#2596BE',
            style: {
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
            },
          }}
        >
          <Tab.Screen name="Karte" component={KarteScreen} />
          <Tab.Screen name="Check" component={CheckScreen} />
          <Tab.Screen name="Touren" component={TourenScreen} />
          <Tab.Screen name="Suche" component={SucheScreen} />
          <Tab.Screen name="Profil" component={ProfilScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
