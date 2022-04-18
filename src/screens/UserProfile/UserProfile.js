import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import BottomNavBar from '../../components/BottomNavbar/BottomNavBar';

const UserProfile = props => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.personal}>
          <Text style={styles.title}>User Details</Text>
          <View style={styles.innerContainer}>
            <Text style={styles.list}>Name: {props.name}</Text>
            <Text style={styles.list}>Sex: {props.sex}</Text>
            <Text style={styles.list}>Age: {props.age}</Text>
            <Text style={styles.list}>Height: {props.height}</Text>
            <Text style={styles.list}>Email: {props.email}</Text>
            <Text style={styles.list}>Phone Number: {props.phoneNumber}</Text>
            <Text style={styles.list}>Nationality: {props.nationality}</Text>
            <Text style={styles.list}>Address: {props.address}</Text>
          </View>
        </View>
        <View style={styles.drawLine}>
          <></>
        </View>
        <View style={styles.professional}>
          <Text style={styles.title}>Professional Details</Text>
          <View style={styles.innerContainer}>
            <Text style={styles.list}>Grip: {props.grip}</Text>
            <Text style={styles.list}>Hand: {props.hand}</Text>
            <Text style={styles.list}>Playing Style: {props.playingStyle}</Text>
            <Text style={styles.list}>
              Favorite Serve: {props.favoriteServe}
            </Text>
            <Text style={styles.list}>Team: {props.team}</Text>
            <Text style={styles.list}>Club: {props.club}</Text>
            <Text style={styles.list}>Awards: {props.award}</Text>
          </View>
        </View>
        <View style={styles.drawLine}>
          <></>
        </View>
        <View style={styles.purchasedPlan}>
          <Text style={styles.title}>Subscription Details</Text>
          <View style={styles.innerContainer}>
            <Text style={styles.list}>
              Subscription (annual | monthly): {props.subscription}
            </Text>
            <Text style={styles.list}>
              Subscription Date: {props.subscribedDate}
            </Text>
            <Text style={styles.list}>Expiry Date: {props.expiryDate}</Text>
          </View>
        </View>
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1E1E1E',
    height: '100%',
    padding: 15,
  },
  drawLine: {
    borderBottomColor: '#C2C9D1',
    borderBottomWidth: 0.9,
    width: 300,
    marginTop: 25,
    alignSelf: 'center',
  },
  title: {
    color: '#C2C9D1',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 15,
  },
  innerContainer: {
    padding: 15,
  },
  list: {
    color: '#C2C9D1',
  },
});

export default UserProfile;
