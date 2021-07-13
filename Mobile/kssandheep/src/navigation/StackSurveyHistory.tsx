import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from '../screens/Posts';
import SurveyHistory from '../screens/SurveyHistory';

// screens

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SurveyHistory"
      component={SurveyHistory}
      options={{
        headerShown: true
      }}
    />

  </Stack.Navigator>
);
