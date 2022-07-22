import {Text, TouchableOpacity, View, StyleSheet, Button} from 'react-native';
import React, {Component, useState} from 'react';

export default function Main() {
  const [num, setNum] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main</Text>
      <TouchableOpacity onPress={()=> setNum(num+1)}>
        <Text style={styles.text}>{num}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: 'purple',
    fontSize: 48,
  },
});
