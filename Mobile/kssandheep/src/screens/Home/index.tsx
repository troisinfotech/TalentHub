import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Avatar, Layout, Text } from '@ui-kitten/components';
import useUserProfile from './hooks/useUserProfile';
import { Icon } from '@ui-kitten/components';


export default (): React.ReactElement => {

  const profile = useUserProfile() || {};

  return (
    <Layout
      style={styles.container}
      level='2'>
      <Layout
        style={styles.header}
        level='1'>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileAvatar}
            // uri={profile.picture}
            source={{
              uri: profile.picture,
            }}
          />
          <View style={styles.profileDetailsContainer}>
            <Text category='h4'>
              {profile.nickname}
            </Text>
            <View style={styles.emailContent}>

              <Text
                appearance='hint'
                category='s1'>
                {profile.email}
              </Text>
              {profile.isVerified && <Icon
                style={styles.icon}
                fill='green'
                name='checkmark'
              />}

            </View>
          </View>
        </View>

      </Layout>

    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profileAvatar: {
    marginHorizontal: 8,
    width: 50,
    height: 50
  },
  profileDetailsContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  icon: {
    width: 32,
    height: 32,
  },
  emailContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});