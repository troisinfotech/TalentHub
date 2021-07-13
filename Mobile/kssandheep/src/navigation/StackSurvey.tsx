import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Survey from '../screens/Survey';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Survey"
      component={Survey}
      options={{
        headerShown: true
      }}
    />

  </Stack.Navigator>
);
