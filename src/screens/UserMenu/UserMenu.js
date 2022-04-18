import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import BottomNavBar from '../../components/BottomNavbar/BottomNavBar.js';

import profileImage from '../../../assets/user-24.png';

const UserMenu = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.profileContainer}>
      <View style={styles.introContainer}>
        <Image style={styles.profileImg} source={profileImage} />
        <Text style={styles.nameTxt}>Name</Text>
        <View style={styles.profileDate}>
          <Text style={styles.playerInfo}>Age</Text>
          <Text style={styles.playerInfo}>Height</Text>
          <Text style={styles.playerInfo}>Weight</Text>
        </View>
        <View style={styles.drawLine}>
          <></>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => {
              navigation.navigate('UserProfile');
              // console.warn('Profile');
            }}>
            <Text style={styles.playerTabs}>Profile</Text>
          </TouchableOpacity>
          <View style={styles.drawLine}>
            <></>
          </View>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => {
              navigation.navigate('TrainingVideos');
              // console.warn('Training Videos');
            }}>
            <Text style={styles.playerTabs}>Training</Text>
          </TouchableOpacity>
          <View style={styles.drawLine}>
            <></>
          </View>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => {
              navigation.navigate('PracticeVideos');
              // console.warn('Practice Videos');
            }}>
            <Text style={styles.playerTabs}>Practice Videos</Text>
          </TouchableOpacity>
          <View style={styles.drawLine}>
            <></>
          </View>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => {
              console.warn('Performance');
            }}>
            <Text style={styles.playerTabs}>Monitor Performance</Text>
          </TouchableOpacity>
          <View style={styles.drawLine}>
            <></>
          </View>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => {
              navigation.navigate('LiveStream');
              // console.warn('Live Streams');
            }}>
            <Text style={styles.playerTabs}>Watch Live Stream</Text>
          </TouchableOpacity>
          <View style={styles.drawLine}>
            <></>
          </View>

          <TouchableOpacity
            style={styles.tabs}
            onPress={() => {
              navigation.navigate('UploadVideo');
              // console.warn('Training Videos');
            }}>
            <Text style={styles.playerTabs}>Upload Video</Text>
          </TouchableOpacity>
          <View style={styles.drawLine}>
            <></>
          </View>

          <TouchableOpacity
            style={styles.tabs}
            onPress={() => {
              console.warn('Logout');
            }}>
            <Text style={styles.playerTabs}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.bottomNav}>
        <BottomNavBar />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#1E1E1E',
    height: '100%',
  },
  // bottomNav: {
  //   paddingTop: 200,
  // },
  introContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  profileImg: {
    height: 100,
    width: 100,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C2C9D1',
    borderRadius: 50,
  },
  nameTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  profileDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabContainer: {
    marginTop: 50,
  },
  playerInfo: {
    color: '#C2C9D1',
    fontWeight: 'bold',
    padding: 16,
  },
  drawLine: {
    borderBottomColor: '#C2C9D1',
    borderBottomWidth: 0.6,
    width: 300,
    marginTop: 10,
    alignSelf: 'center',
  },
  playerTabs: {
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
  },
  tabs: {
    alignItems: 'center',
    alignHorizontal: 'center',
  },
});

export default UserMenu;
