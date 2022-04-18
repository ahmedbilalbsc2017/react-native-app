import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

// import BtnBack from '../../components/CustomButton/BackButton';
import Button from '../../components/CustomButton/Button';
import TextInput from '../../components/CustomTextInput/CustomTextInput';

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
          <View style={styles.txtPanel}>
            <Text style={styles.simpleTxt}>Change Password</Text>
            <TextInput placeholder="New Password" secureTextEntry />
            <TextInput placeholder="Retype New Password" secureTextEntry />
          </View>
          <View style={styles.OTPBtn}>
            <Button
              label="Update Password"
              onPress={() => {
                navigation.navigate('Login');
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
    textAlign: 'center',
    marginBottom: 50,
  },
  txtPanel: {
    padding: 10,
  },
  OTPBtn: {
    marginTop: 45,
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
  },
  blockOTP: {
    flexDirection: 'row',
  },
});

export default RecoveryEmail;
