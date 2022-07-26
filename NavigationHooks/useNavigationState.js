import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {
  NavigationContainer,
  useRoute,
  useNavigationState,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function usePreviousRouteName() {
  return useNavigationState(state => state.routes[state.index - 1]?.name
    ? state.routes[state.index - 1]?.name
    :'Null'
    );
}

function useThisRouteName() {
  return useNavigationState(state => state.routes[state.index]?.name);
}

function useThisIndex() {
  return useNavigationState(state => state.index);
}

function allRouteNames() {
  return useNavigationState(state => state.routeNames);
}

function HomeScreen({navigation}) {
  const previousRouteName = usePreviousRouteName();
  const thisRouteName = useThisRouteName();
  const routeNames = allRouteNames();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>All Routes: {routeNames}</Text>
      <Text>Previous route name: {previousRouteName}</Text>
      <Text>This route name: {thisRouteName}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({navigation}) {
  const previousRouteName = usePreviousRouteName();
  const thisRouteName = useThisRouteName();
  const thisIndex = useThisIndex();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Index: {thisIndex}</Text>
      <Text>Previous route name: {previousRouteName}</Text>
      <Text>This route name: {thisRouteName}</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({navigation}) {
  const previousRouteName = usePreviousRouteName();
  const thisRouteName = useThisRouteName();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Previous route name: {previousRouteName}</Text>
      <Text>This route name: {thisRouteName}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function useNavState() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
