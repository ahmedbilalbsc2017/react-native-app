import React from 'react';
import {View, TextInput, StyleSheet, useWindowDimensions} from 'react-native';

const CustomTextInput = ({value, setValue, placeholder, placeholderColor}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.root}>
      <View>
        <TextInput
          style={[styles.txtInput, {width: width * 0.9}]}
          placeholder={placeholder}
          placeholderTextColor="grey"
          setValue={setValue}
          value={value}
          customStyles={{
            placeholderText: {
              fontSize: 17,
              color: '#C2C9D1',
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
  },
  txtInput: {
    fontSize: 20,
    marginVertical: 6,
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'white',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
});

export default CustomTextInput;
