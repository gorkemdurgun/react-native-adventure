import * as React from 'react';
import {View, Button} from 'react-native';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function ProfileScreen() {
  useFocusEffect(
    React.useCallback(() => {
      alert('Screen was focused');

      return () => {
        alert('Screen was unfocused');
      };
    }, []),
  );

  return <View />;
}

function HomeScreen({navigation: {navigate}}) {
  return (
    <View>
      <Button
        title="Profile Screen"
        onPress={() => navigate('Profile')}></Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function useFocusEff() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
