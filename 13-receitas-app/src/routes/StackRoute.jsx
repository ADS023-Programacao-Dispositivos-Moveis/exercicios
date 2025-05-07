import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import ReceitaScreen from '../Screens/ReceitaScreen';

const Stack = createStackNavigator();

export default function StackRoute() {

    return (
    <Stack.Navigator>
        <Stack.Screen
            name = "HomeScreen"
            component = { HomeScreen }
        >

        <Stack.Screen
            name = "ReceitaScreen"
            component = { ReceitaScreen }
        >

        </Stack.Screen>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})