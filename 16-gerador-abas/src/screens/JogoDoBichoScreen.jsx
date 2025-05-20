import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const animais = [
  { numero: 1, nome: 'Avestruz', imagem: 'https://i.pinimg.com/736x/68/0d/a5/680da5687be256cd276cd91bd2c7d4ea.jpg' },
  { numero: 2, nome: 'Águia', imagem: 'https://i.pinimg.com/736x/71/c5/74/71c574c2a132e555877f8c81fb66e831.jpg' },
  { numero: 3, nome: 'Burro', imagem: 'https://i.pinimg.com/736x/88/25/71/88257156b0c70d20c3c5d8603bdac51e.jpg' },
  { numero: 4, nome: 'Borboleta', imagem: 'https://i.pinimg.com/736x/07/41/21/074121f38edd96684d06e029333c7f92.jpg' },
  { numero: 5, nome: 'Cachorro', imagem: 'https://i.pinimg.com/736x/29/f9/18/29f91858d0164df638463b9db62a3ed6.jpg' },
  { numero: 6, nome: 'Cabra', imagem: 'https://i.pinimg.com/736x/2b/9f/e1/2b9fe1545a4a727d9104772baf787941.jpg' },
  { numero: 7, nome: 'Carneiro', imagem: 'https://i.pinimg.com/736x/66/2b/65/662b651793526fd390fb77d3f495c7b6.jpg' },
  { numero: 8, nome: 'Camelo', imagem: 'https://i.pinimg.com/736x/66/cb/00/66cb00c216150a114e238c03c6cbd4b1.jpg' },
  { numero: 9, nome: 'Cobra', imagem: 'https://i.pinimg.com/736x/55/a4/e5/55a4e584d2071c4d98403f36ae5ce308.jpg' },
  { numero: 10, nome: 'Coelho', imagem: 'https://i.pinimg.com/736x/e3/84/8c/e3848cb5330c17c61215a18de107a88f.jpg' },
];

export default function JogoDoBichoScreen() {
  const [animalGerado, setAnimalGerado] = useState(null);

  function gerarAnimal() {
    const index = Math.floor(Math.random() * animais.length);
    setAnimalGerado(animais[index]);
  }

  function resetarJogo() {
    setAnimalGerado(null);
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Animal do Jogo do Bicho" />
        <Card.Content>
          {animalGerado ? (
            <>
              <Text variant="titleLarge">{animalGerado.numero} - {animalGerado.nome}</Text>
              <Image source={{ uri: animalGerado.imagem }} style={styles.imagem} />
            </>
          ) : (
            <Text>Nenhum animal ainda</Text>
          )}
        </Card.Content>
        <Card.Actions>
          <Button onPress={resetarJogo}>Reiniciar</Button>
          <Button onPress={gerarAnimal}>Gerar Animal</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  card: { marginBottom: 16 },
  imagem: { width: '100%', height: 370, marginTop: 25, borderRadius: 8 },
});