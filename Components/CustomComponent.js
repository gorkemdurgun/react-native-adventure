import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';

export default function CustomComponent(props) {
  function pushToPage(page) {
    props.navigation.push(page);
  }

  function navigateToPage(page) {
    props.navigation.navigate(page);
  }

  function popToPop() {
    props.navigation.popToTop();
  }

  function pop() {
    props.navigation.pop();
  }

  function replace() {
    props.navigation.replace();
  }

  return (
    <SafeAreaView style={{backgroundColor: 'whitesmoke'}}>
      <View style={styles.card}>
        <View style={styles.body}>
          <Text style={styles.bodyTitle}>Body Title</Text>
          <Text style={styles.bodySubtitle}>Body Subtitle</Text>
        </View>
        <TouchableOpacity style={styles.card_button}>
          <Text>CLICK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Button
          title="Push To CustomComponent"
          onPress={() => pushToPage('CustomComponent')}
        />
        <Button title="popToPop" onPress={popToPop} />
        <Button title="pop" onPress={pop} />
        <Button title="replace" onPress={replace} />
        <Button
          title="Navigate To CustomComponent"
          onPress={() => navigateToPage('CustomComponent')}
        />
        <Button
          title="Navigate To Main"
          onPress={() => navigateToPage('Main')}
        />
        <Button title="Push To Main" onPress={() => pushToPage('Main')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    elevation: 15,
  },
  container: {
    height: '50%',
    justifyContent: 'space-evenly',
    padding: 10,
    marginTop: 10,
  },
  body: {
    padding: 10,
  },
  bodyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    marginBottom: 3,
  },
  bodySubtitle: {
    fontSize: 15,
    margin: 10,
    marginTop: 3,
  },
  card_button: {
    backgroundColor: 'orange',
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
  },
  navigate_button: {
    margin: 10,
    padding: 10,
  },
});
