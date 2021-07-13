import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from '../screens/Posts';

// screens

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Posts"
      component={Posts}
      options={{
        headerShown: true
      }}
    />

  </Stack.Navigator>
);
