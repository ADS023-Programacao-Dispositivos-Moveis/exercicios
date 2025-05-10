import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>

      <Button
        icon="menu"
        mode="contained"
        onPress={() => { navigation.openDrawer() }}
      >
        Abrir Gaveta
      </Button>
      
      <Button
        icon="menu"
        mode="contained"
        onPress={() => { navigation.openDrawer()
        setTimeout(() => {
          navigation.closeDrawer(), 3000})
        }}
      >
        Abrir Gaveta e fechar depois de 3 segundos
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})