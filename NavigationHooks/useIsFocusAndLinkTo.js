import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {
  NavigationContainer,
  useIsFocused,
  useLinkTo,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function ProfileScreen() {
  const isFocused = useIsFocused();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{isFocused ? 'focused' : 'unfocused'}</Text>
    </View>
  );
}

function ProductScreen(props) {
  const screenId = props.route.params.screen;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{screenId ? 'Porduct No:' + screenId : 'null'}</Text>
    </View>
  );
}

function HomeScreen({navigation: {navigate}}) {
  const linkTo = useLinkTo();

  return (
    <View>
      <Button title="Product 5" onPress={() => linkTo('/Product/5')}></Button>
      <Button
        title="Profile Screen"
        onPress={() => navigate('Profile')}></Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function useIsFocusAndLinkTo() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
