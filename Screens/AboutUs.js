
import { StyleSheet, Text, View , Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActionCreators from '../redux/Actions'
export default function AboutUs() {
    const compostate = useSelector((state)=>{
        return state;
    })
    const dispatch = useDispatch();
  const {DECREASE , INCREASE} = bindActionCreators(CounterActionCreators, dispatch)
    // console.log(compostate)
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
  HomeText :{
      fontSize : 25,
      fontWeight : "bold"
  }
});
