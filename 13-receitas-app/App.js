import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import StackRoute from './src/routes/StackRoute';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackRoute></StackRoute>
      </NavigationContainer>
    </PaperProvider>
  );
}