import React from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';

import BackgroundImage from '../../../assets/forgot.png';
// import BtnBack from '../../components/CustomButton/BackButton';
import TextInput from '../../components/CustomTextInput/CustomTextInput';
import Button from '../../components/CustomButton/Button';

const RecoveryEmail = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <BtnBack
        onPress={() => {
          console.warn('Back Button Pressed!');
        }}
      /> */}
      <ScrollView>
        <View style={styles.mainContainer}>
          <Image source={BackgroundImage} style={styles.backgroundImg} />
          <Text style={styles.simpleTxt}>Forgot Password?</Text>
          <Text style={styles.information}>
            Enter your Email | Phone Number to get code.
          </Text>
          <TextInput placeholder="Email | Phone Number" />
          <View style={styles.OTPBtn}>
            <Button
              label="Get OTP"
              onPress={() => {
                navigation.navigate('OTPVerification');
                // console.warn('Sending code');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    height: '100%',
    padding: 16,
  },
  mainContainer: {
    alignItems: 'center',
    paddingTop: 200,
  },
  simpleTxt: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C2C9D1',
  },
  information: {
    paddingTop: 80,
    paddingBottom: 50,
    fontSize: 18,
    color: '#C2C9D1',
    textAlign: 'center',
  },
  OTPBtn: {
    width: 100,
    marginTop: 50,
  },
  backgroundImg: {
    height: 100,
    width: 100,
    borderRadius: 16,
  },
});

export default RecoveryEmail;
