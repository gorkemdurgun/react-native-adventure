import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Flex from './Flex';
import Main from './Main';
import CustomComponent from './CustomComponent';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Flex" component={Flex} />
        <Stack.Screen name="CustomComponent" component={CustomComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};