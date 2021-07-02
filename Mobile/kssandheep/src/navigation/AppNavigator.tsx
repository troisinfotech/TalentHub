
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import StackPosts from './StackPosts';
import StackSurvey from './StackSurvey';
import StackSurveyHistory from './StackSurveyHistory';
import HomeDrawer from './HomeDrawer';

const Drawer = createDrawerNavigator();


const AppNavigator = (): React.ReactElement => (
  <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <HomeDrawer {...props} />}
      screenOptions={{ gestureEnabled: true }} initialRouteName="Home">
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Survey' component={StackSurvey} />
      <Drawer.Screen name='SurveyHistory' component={StackSurveyHistory} />
      <Drawer.Screen name='Posts' component={StackPosts} />
      <Drawer.Screen name='Logout' component={Home} />
    </Drawer.Navigator >
  </NavigationContainer>

);


export default AppNavigator;