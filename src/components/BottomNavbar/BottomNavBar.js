import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import homeNavImg from '../../../assets/home-24.png';
import Team from '../../../assets/team-24.png';
import Training from '../../../assets/ping-pong-24.png';
import Profile from '../../../assets/user-24.png';
import Extra from '../../../assets/chat-24.png';
const BottomNavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={styles.home}
        onPress={() => console.warn('Team')}>
        <Image source={Team} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.home}
        onPress={() => console.warn('training')}>
        <Image source={Training} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.home}
        onPress={() => {
          navigation.navigate('HomePlayer');
        }}>
        <Image source={homeNavImg} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.home}
        onPress={() => console.warn('Chat')}>
        <Image source={Extra} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.home}
        onPress={() => {
          // console.warn('profile');
          navigation.navigate('UserMenu');
        }}>
        <Image source={Profile} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    zIndex: 50,
    elevation: 15,
    opacity: 15,
  },
});

export default BottomNavBar;
