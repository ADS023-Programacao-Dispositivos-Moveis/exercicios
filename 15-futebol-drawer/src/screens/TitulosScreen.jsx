import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TitulosScreen() {
  const titulos = [
    {
      nome: "Campeonato Brasileiro",
      anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020],
    },
    {
      nome: "Copa Libertadores da América",
      anos: [1981, 2019, 2022],
    },
    {
      nome: "Copa do Brasil",
      anos: [1990, 2006, 2013, 2022, 2024],
    },
    {
      nome: "Supercopa do Brasil",
      anos: [2020, 2021, 2025],
    },
  ];

  const anosTitulos = titulos.map((titulo) => {
    return titulo.anos.map((ano) => {
      return ano;
    });
  });
  console.log(anosTitulos);

  return (
    <FlatList
      contentContainerStyle={{ padding: 16 }}
      data={titulos}
      keyExtractor={(item) => item.nome}
      ItemSeparatorComponent={() => <Divider />}
      renderItem={({ item }) => (
        <List.Section>
          <List.Subheader>{item.nome}</List.Subheader>
          {item.anos.map((ano) => (
            <List.Item key={ano} title={`Ano: ${ano}`} left={() => <List.Icon icon="trophy" />} />
          ))}
        </List.Section>
      )}
    />
  );
}

const styles = StyleSheet.create({});
