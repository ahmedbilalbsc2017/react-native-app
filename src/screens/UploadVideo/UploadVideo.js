import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import Button from '../../components/CustomButton/Button';

const UploadVideo = () => {
  const [upload, setUpload] = useState();
  const openAlert = () =>
    Alert.alert('UPLOAD', 'UPLOAD', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onClick={openAlert}>
          <Text style={styles.txtContainer} onClick={openAlert} value={upload}>
            UPLOAD (select path)
          </Text>
        </TouchableOpacity>

        <View style={styles.btnContainer}>
          <Button label="UPLOAD" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    height: '100%',
    alignItems: 'center',
  },
  btnContainer: {
    width: 70,
    paddingLeft: 10,
  },
  txtContainer: {
    color: 'grey',
    borderWidth: 1,
    borderColor: '#db2c1e',
    width: 300,
    height: 35,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    alignSelf: 'center',
  },
});

export default UploadVideo;
