import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstComponent from '../06-introducao-expo_parte-2/components/FirstComponent';
import JavascriptComponent from './components/JavascriptComponent';
import Perfil from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <FirstComponent />
      <JavascriptComponent />
      <Perfil 
        nome="Sérgio Silva"
        Idade={40}
        E-mail="sergio.b.silva@iesb.edu.br"
      />

      <Perfil 
        nome="Rhuan Justino"
        Idade={24}
        E-mail="rhuan.souza@iesb.edu.br"
      />

      <Perfil 
        nome="Sarah Evelyn"
        Idade={20}
        E-mail="sarah.evelyn@iesb,edu,br"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
