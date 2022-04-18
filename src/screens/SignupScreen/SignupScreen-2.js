import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import BtnBack from '../../components/CustomButton/BackButton';
import TextInput from '../../components/CustomTextInput/CustomTextInput';
import Button from '../../components/CustomButton/Button';

const SignUpScreen2 = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <BtnBack
        onPress={() => {
          console.warn('Back Button Pressed!');
        }}
      />
      <Text style={styles.toolbarTxt}>Step 2</Text>
      <ScrollView>
        <View style={styles.signupForm}>
          <TextInput placeholder="Height" />
          <TextInput placeholder="Grip" />
          <TextInput placeholder="Hand" />
          <TextInput placeholder="Playing Style" />
          <TextInput placeholder="Nationality" />
          <TextInput placeholder="Team" />
          <TextInput placeholder="Club" />
          <TextInput placeholder="Favorite Serve" />
          <TextInput placeholder="Awards" />
        </View>
      </ScrollView>
      <Button
        label="Next >>>"
        onPress={() => {
          // console.warn('Move to next page');
          navigation.navigate('Signup3');
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
});

export default SignUpScreen2;
