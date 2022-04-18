import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import BtnBack from '../../components/CustomButton/BackButton';
import TextInput from '../../components/CustomTextInput/CustomTextInput';
import Button from '../../components/CustomButton/Button';

const SignUpScreen3 = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <BtnBack
        onPress={() => {
          console.warn('Back Button Pressed!');
        }}
      />
      <Text style={styles.toolbarTxt}>Step 3</Text>
      <ScrollView>
        <View style={styles.signupForm}>
          <Text style={styles.simpleTxt}>Address</Text>
          <TextInput placeholder="Street Address 1" />
          <TextInput placeholder="Street Address 2" />
          <TextInput placeholder="Zip/Postal" />
          <TextInput placeholder="Latitude" />
          <TextInput placeholder="Longitude" />
          <Text style={styles.simpleTxt}>Payment Credentials</Text>
          <TextInput placeholder="Card no." />
          <TextInput placeholder="Expiry Month" />
          <TextInput placeholder="Expiry Year" />
          <TextInput placeholder="CVC" />
        </View>
      </ScrollView>
      <Button
        label="Enter to Sign Up"
        onPress={() => {
          // console.warn('Move to next page');
          navigation.navigate('HomePlayer');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1E1E1E',
    height: '100%',
    padding: 16,
  },
  toolbarTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  simpleTxt: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C2C9D1',
  },
});

export default SignUpScreen3;
