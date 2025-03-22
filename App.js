import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Convertidor_Monedas from "./src/component/Convertidor";

export default function App() {
  return (
    <View style={styles.container}>
      <Convertidor_Monedas/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#327ba8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
