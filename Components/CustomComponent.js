import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function CustomComponent() {
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
});
