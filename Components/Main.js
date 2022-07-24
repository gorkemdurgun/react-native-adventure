import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';
import React, {Component, useState} from 'react';

export default function Main() {
  const [num, setNum] = useState(24);

  const increaseNumber = () => {
    setNum(num + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.first_container}>
        <TouchableOpacity onPress={increaseNumber}>
          <Text style={styles.text}>{num}</Text>
        </TouchableOpacity>
        <Button
          title="Click"
          onPress={event => console.log(event)}
          disabled={false}
        />
      </View>

      <View style={styles.second_container}>
        <Text>Stage 2</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:  'column',
  },
  first_container: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'indigo',
  },
  second_container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'lightgray',
  },
  text: {
    color: 'lightgray',
    fontSize: 48,
  },
});
