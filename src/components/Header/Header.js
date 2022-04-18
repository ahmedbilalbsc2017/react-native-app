import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import Drawer from '../../../assets/drawer-50.png';
import Bell from '../../../assets/bell.png';

const Header = props => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => {
          console.warn('Open Side Drawer');
        }}>
        <View>{/* <Image source={Drawer} style={styles.drawer} /> */}</View>
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>Home</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.warn('Open Notification');
        }}>
        <View>
          <Image source={Bell} style={styles.drawer} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  drawer: {
    height: 30,
    width: 30,
  },
});

export default Header;
