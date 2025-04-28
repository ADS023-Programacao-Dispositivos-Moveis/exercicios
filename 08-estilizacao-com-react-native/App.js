import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider, Button } from 'react-native-paper';

export default function App() {
  const MyComponent = () => (
    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
      Press me
    </Button>
  );
  
  return (
    <PaperProvider style={styles.container}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <MyComponent></MyComponent>
      </View>
    </PaperProvider>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
