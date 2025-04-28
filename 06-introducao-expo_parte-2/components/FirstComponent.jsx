import React from "react";
import {Text, View, StyleSheet} from "react-native";

export default function FirstComponent() {
  return (
    <View>
      <Text style={styles.titleH1}>First Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    titleH1: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
    }
});