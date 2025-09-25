import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>2° ANO</Text>
      <Text style={styles.texto}>3° BIMESTRE</Text>
      <Text style={styles.texto}>ISAAC DANIEL SILVA ULIAM</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 30,
    marginBottom: 50,
    padding: 20,
    borderWidth: 3,
    borderRadius: 20,
  },
});
