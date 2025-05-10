import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Importando Telas
import EscudoScreen from '../src/screens/EscudoScreen';
import JogadoresScreen from '../screens/JogadoresScreen';
import TitulosScreen from '../src/screens/TitulosScreen';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#B71C1C',
        },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#B71C1C',
        drawerLabelStyle: {
          fontSize: 16,
        },
        drawerIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Escudo') {
            iconName = focused ? 'shield' : 'shield-outline';
          } else if (route.name === 'Jogadores') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Títulos') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Drawer.Screen name="Escudo" component={EscudoScreen} />
      <Drawer.Screen name="Jogadores" component={JogadoresScreen} />
      <Drawer.Screen name="Títulos" component={TitulosScreen} />
    </Drawer.Navigator>
  );
}