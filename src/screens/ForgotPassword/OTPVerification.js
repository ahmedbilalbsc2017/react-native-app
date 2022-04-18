import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';

import BackgroundImage from '../../../assets/OTPcode.png';
// import BtnBack from '../../components/CustomButton/BackButton';
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
          <Text style={styles.simpleTxt}>Verification</Text>
          <Text style={styles.information}>
            Enter your verification code we just sent you on your Email or Phone
            Number.
          </Text>
          <View style={styles.blockOTP}>
            <TextInput style={styles.txtOTP} />
            <TextInput style={styles.txtOTP} />
            <TextInput style={styles.txtOTP} />
            <TextInput style={styles.txtOTP} />
          </View>
          <View style={styles.OTPBtn}>
            <Button
              label="Verify"
              onPress={() => {
                navigation.navigate('ChangePassword');
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
  txtOTP: {
    height: 50,
    width: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    color: 'white',
  },
  blockOTP: {
    flexDirection: 'row',
  },
});

export default RecoveryEmail;
