import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavascriptComponent() {
    const nome = "Sérgio Silva";
    const idade = 40;

    function checkMaiorIdade(){
        if(idade >= 18){
            return "Maior de Idade";
        }
        else{
            return "Menor de Idade";
        }
    }

    function alerta(){
        alert("Clicou no botão");
    }
  
    return (
    <View>
      <Text>JavascriptComponent</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Check 18+: {idade >= 18 ? "18+" : "18-"}</Text>
      <Button title='Clicar' onPress={alerta}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})