import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Splash} from '../screens';

const Stack = createStackNavigator();

const Router = () => (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default Router;
