import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen';
import NestedScreen from '../views/NestedScreen';
import ModalNoConnection from '../components/modal/NoConnection';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Nested" component={NestedScreen} />
  </Stack.Navigator>
);

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      <ModalNoConnection />
    </NavigationContainer>
  );
};

export default Navigator;
