import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import StackRoute from './src/routes/StackRoute';

// Importanto Screens
import HomeScreen from './src/Screens/HomeScreen';
import ReceitaScreen from './src/Screens/ReceitaScreen';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackRoute></StackRoute>
      </NavigationContainer>
    </PaperProvider>
  );
}