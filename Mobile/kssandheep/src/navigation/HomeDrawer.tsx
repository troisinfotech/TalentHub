import React, { ReactElement, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  Divider,
  Drawer,
  DrawerItem,
  DrawerElement,
  Layout,
  Text,
  IndexPath,
} from '@ui-kitten/components';
import { removetoken } from '../services/storage.service';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/modules/user/actions';


const HomeDrawer = ({ navigation }): DrawerElement => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(null);
  const dispatch = useDispatch();

  const MENU = [
    {
      title: 'Home',
      onPress: () => {
        navigation.toggleDrawer();
        navigation.navigate('Home');
      },
    },
    {
      title: 'Survey',
      onPress: () => {
        navigation.toggleDrawer();
        navigation.navigate('Survey');
      },
    },
    {
      title: 'Survey History',
      onPress: () => {
        navigation.toggleDrawer();
        navigation.navigate('SurveyHistory');
      },
    },
    {
      title: 'Posts',
      onPress: () => {
        navigation.toggleDrawer();
        navigation.navigate('Posts');
      },
    },
    {
      title: 'Logout',
      onPress: () => {
        navigation.toggleDrawer();
        dispatch(logout())
      },
    },
  ];


  return (
    <Drawer
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      {MENU.map((el, index) => (
        <DrawerItem
          key={index}
          title={el.title}
          onPress={el.onPress}
        />
      ))}
    </Drawer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default HomeDrawer;