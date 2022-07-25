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

  let myUser = {
    name: 'Görkem',
    email: 'gorkem@gmail.com',
    phone: '123-456-1234',
  };

  function increaseNumber() {
    setNum(num + 1);
  }

  function pushToPage(page) {
    props.navigation.push(page);
  }

  function navigateWithParams(page, user) {
    props.navigation.navigate(page, {user: user});
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
          title="Push To CustomComponent"
          onPress={() => pushToPage('CustomComponent')}
          disabled={false}
        />
       
        <Button
          title="Go Flex With Param"
          onPress={() => navigateWithParams('Flex', myUser)}
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
    flex: 3,
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
