import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';

import BtnBack from '../../components/CustomButton/BackButton';
import TextInput from '../../components/CustomTextInput/CustomTextInput';
import DropDownList from '../../components/DropDownList/DropDownList';
import Datepicker from '../../components/DatePicker/DatePicker';
import Button from '../../components/CustomButton/Button';

const SignUpScreen1 = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  return (
    <View style={styles.mainContainer}>
      <BtnBack
        onPress={() => {
          console.warn('Back Button Pressed!');
        }}
      />
      <Text style={styles.toolbarTxt}>Sign up</Text>
      <ScrollView>
        <View style={styles.signupForm}>
          <TextInput placeholder="Full Name" />
          <TextInput placeholder="User Name" />
          <TextInput placeholder="Email" />
          <DropDownList type="country" />
          <TextInput placeholder="Phone Number" />
          <TextInput placeholder="Password" secureTextEntry={true} />
          <TextInput placeholder="Retype Password" secureTextEntry={true} />
          {/* <Datepicker
          placeholder="DOB"
          date={date}
          onPress={() => setDate(date)}
        /> */}

          <Text style={styles.simpleTxt}>Gender</Text>
          <View style={styles.sexSelector}>
            <CircleCheckBox
              checked={true}
              onToggle={checked => console.warn('My state is: ', checked)}
              labelPosition={LABEL_POSITION.RIGHT}
              label="Male"
              customStyles={{
                labelColor: {
                  color: 'white',
                },
              }}
            />
            <CircleCheckBox
              checked={false}
              onToggle={checked => console.warn('My state is: ', checked)}
              labelPosition={LABEL_POSITION.RIGHT}
              label="Female"
            />
            <CircleCheckBox
              checked={false}
              onToggle={checked => console.warn('My state is: ', checked)}
              labelPosition={LABEL_POSITION.RIGHT}
              label="Others"
            />
          </View>
          <DropDownList />
        </View>
      </ScrollView>
      <Button
        label="Next >>>"
        onPress={() => {
          // console.warn('Move to next page');
          navigation.navigate('Signup2');
        }}
      />
      <TouchableOpacity
        style={styles.footer}
        onPress={() => {
          // console.warn('Move to next page');
          navigation.navigate('Login');
        }}>
        <Text style={styles.textRights}>
          Already have an account? <Text style={styles.textLink}>LOGIN</Text>
        </Text>
      </TouchableOpacity>
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
  scrollView: {
    marginHorizontal: 20,
  },
  signupForm: {
    padding: 15,
  },
  simpleTxt: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C2C9D1',
  },
  sexSelector: {
    flexDirection: 'row',
    paddingLeft: 10,
    margin: 10,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
    alignItems: 'center',
  },
  textRights: {
    color: 'white',
  },
  textLink: {
    color: '#5C9CC1',
  },
});

export default SignUpScreen1;
