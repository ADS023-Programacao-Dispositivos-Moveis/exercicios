import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil() {
  
    console.log(props);
    console.log(props.nome);
    console.log(props.idade);
  
    return (
    <View>
      <Text>Perfil</Text>
      <Text style={{fontSize: 30}}>Nome: {props.nome}</Text>
      <Text style={{fontSize: 30}}>Idade: {props.idade}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})