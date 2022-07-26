import * as React from 'react';
import { View, ScrollView, Image, Button } from 'react-native';
import { NavigationContainer, useScrollToTop } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Albums() {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return (
    <ScrollView ref={ref}>
      <Image
        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        style={{ width: 400, height: 400 }}
        key="1"
      />
      <Image
        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        style={{ width: 400, height: 400 }}
        key="2"
      />
      <Image
        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        style={{ width: 400, height: 400 }}
        key="3"
      />
      <Image
        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        style={{ width: 400, height: 400 }}
        key="4"
      />
      <Button title='Scroll To Top' onPress={useScrollToTop(ref)}></Button>
    </ScrollView>
  );
}

function HomeScreen({navigation: {navigate}}) {
  return <View>
    <Button
        title="Albums Screen"
        onPress={() => navigate('Albums')}></Button>
  </View>;
}

const Stack = createNativeStackNavigator();

export default function scrollToTop() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Albums" component={Albums} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
