import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LiveStream = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.modelBox}
        onPress={() => {
          console.log('MatchStatistics');
          navigation.navigate('MatchStatistics');
        }}>
        <View style={styles.verticleLine} />
        <View style={styles.horizontalLine} />
        <View style={styles.verticleLine} />
        {/* </View> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1e1e',
    height: '100%',
    padding: 10,
  },
  modelBox: {
    paddingBottom: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#db2c1e',
    borderRadius: 10,
    height: 200,
    width: 150,
  },
  verticleLine: {
    alignSelf: 'center',
    height: '50%',
    width: 1,
    backgroundColor: '#C2C9D1',
  },
  horizontalLine: {
    borderColor: 'transparent',
    borderBottomColor: '#C2C9D1',
    borderWidth: 1,
    alignItems: 'center',
    //  marginTop: 100,
  },
});

export default LiveStream;
