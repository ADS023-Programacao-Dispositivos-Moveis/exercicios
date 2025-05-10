import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const time = {
  nome: "Flamengo",
  escudo:
    "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  fundacao: "15 de novembro de 1895",
  estadio: "Maracanã",
  mascote: "Urubu",
  cores: ["Vermelho", "Preto"],
};

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: time.escudo }} style={styles.image} />
      <Text style={styles.title}>{time.nome}</Text>
      <Text>Fundado em: {time.fundacao}</Text>
      <Text>Estádio: {time.estadio}</Text>
      <Text>Mascote: {time.mascote}</Text>
      <Text>Cores: {time.cores.join(" e ")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: 150, height: 150, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
});
