import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";

const jogadores = [
  /* seus jogadores aqui */
];

export default function JogadoresScreen() {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.numero.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.imagem }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.nome}>
              {item.nome} - #{item.numero}
            </Text>
            <Text>Posição: {item.posicao}</Text>
            <Text>Idade: {item.idade} anos</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  image: { width: 80, height: 80, borderRadius: 40 },
  info: { marginLeft: 10, justifyContent: "center" },
  nome: { fontSize: 16, fontWeight: "bold" },
});
