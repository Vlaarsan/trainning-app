import { View, Text, Button } from 'react-native';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../reducers/counterSlice';



const Page7 = () => {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  
  return (
    <View>
      <Text>Counter: {counter}</Text>
      <Button onPress={() => dispatch(increment())} title="Increment" />
      <Button onPress={() => dispatch(decrement())} title="Decrement" />
    </View>
  );
};
export default Page7
