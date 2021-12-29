import React, { useState,useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state,action) => {
  switch (action.type) {
    case 'increase':
      return {...state,counter: state.counter + 1}
    case 'decrease':
      return {...state,counter: state.counter - 1}
    default:
      return state;
  }
}

const CounterScreen = () => {
  const [state,dispatch] = useReducer(reducer, {counter:0})
  const {counter} = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => 
          // Don't do this!
          // counter++;
          // counter = counter + 1;
          // setCounter(counter + 1);
          dispatch({ type: 'increase'})
        }
      />
      <Button
        title="Decrease"
        onPress={() => 
          // setCounter(counter - 1);
          dispatch({ type: 'decrease'})
        }
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
