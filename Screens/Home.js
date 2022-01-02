import { bindActionCreators } from 'redux';

import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as CounterActionCreators from '../redux/Actions'
export default function Home() {

  const compostate = useSelector((state) => {
    return state;
  })
  console.log(compostate)
  const dispatch = useDispatch();
  const {DECREASE , INCREASE} = bindActionCreators(CounterActionCreators, dispatch)
  
  return (
    <View style={styles.container}>
      <Text style={styles.HomeText}>{compostate.Number}</Text>
      <Button title="decrease" onPress={() => DECREASE(1)} />
      <Button title="increase" onPress={() => INCREASE(3)} />
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
  HomeText: {
    fontSize: 40,
    fontWeight: "bold"
  }
});
