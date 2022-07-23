import {Text, TouchableOpacity, View, StyleSheet, Button} from 'react-native';
import React, {Component, useState} from 'react';

export default function Main() {
  const [num, setNum] = useState(24);

  const increaseNumber = () => {
    setNum(num + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={increaseNumber}>
        <Text style={styles.text}>{num}</Text>
      </TouchableOpacity>
      <Button
        title="Click"
        onPress={(event)=> console.log(event)}
        disabled={false}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: 'lightgray',
    fontSize: 48,
  },
});
