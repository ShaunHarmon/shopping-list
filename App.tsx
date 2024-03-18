import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import ShoppingList from './components/ShoppingList/ShoppingList';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ShoppingList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
