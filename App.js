
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import AboutUs from './Screens/AboutUs';
import { Provider } from 'react-redux';
import store from './redux/Store';

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Home />
      <AboutUs />
    </View>
    </Provider>
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
