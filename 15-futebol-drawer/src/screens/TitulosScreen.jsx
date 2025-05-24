import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const titulos = [/* seus títulos aqui */];

export default function TitulosScreen() {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text>Anos: {item.anos.join(', ')}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: { padding: 10, margin: 10, backgroundColor: '#f1f1f1', borderRadius: 6 },
  nome: { fontWeight: 'bold', fontSize: 16 }
});