import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';
import React, {Component, useState} from 'react';

export default function Main(props) {
  const [num, setNum] = useState(24);

  console.log(props);

  function increaseNumber() {
    setNum(num + 1);
  }

  function navigateToPage(page) {
    props.navigation.navigate(page);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.first_container}>
        <TouchableOpacity onPress={increaseNumber}>
          <Text style={styles.text}>{num}</Text>
        </TouchableOpacity>
        <Button
          title="Event Log Button"
          onPress={event => console.log(event)}
          disabled={false}
        />
      </View>

      <View style={styles.second_container}>
        <Text>Stage 2</Text>
        <Button
          title="Go To Flex"
          onPress={() => navigateToPage('Flex')}
          disabled={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
