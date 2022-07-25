import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';

export default function Flex({navigation}) {

  function navigateToPage(page) {
    navigation.navigate(page);
  }

  function goBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainTopContainer}>
        <View style={styles.con1}></View>
        <View style={styles.con2}></View>
        <View style={styles.con3}></View>
        <View style={styles.con4}></View>
      </View>
      <View style={styles.mainBottomContainer}>
        <Button
          title="Go To Main"
          onPress={() => navigateToPage('Main')}
          disabled={false}
        />

        <Button title="Go Back" onPress={goBack} disabled={false} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  mainTopContainer: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: 'navy',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  mainBottomContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'indigo',
    justifyContent: 'space-evenly',
  },
  con1: {
    width: 70,
    height: 70,
    backgroundColor: 'red',
  },
  con2: {
    width: 70,
    height: 70,
    backgroundColor: 'yellow',
  },
  con3: {
    width: 70,
    height: 70,
    backgroundColor: 'orange',
  },
  con4: {
    width: 70,
    height: 70,
    backgroundColor: 'blue',
  },
});
