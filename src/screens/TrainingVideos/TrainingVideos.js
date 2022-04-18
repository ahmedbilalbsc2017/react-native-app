import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';

import TrainingCard from '../../components/VideoCard/VideoCard';
import img from '../../../assets/team-24.png';

const dataList = [img, img, img, img, img, img, img, img, img];
const WIDTH = Dimensions.get('window').width;

const TrainingVideos = () => {
  const onClick = () => {
    console.warn('Training Video Clicked To Play.');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TrainingCard style={styles.itemInvisible} onPress={onClick}>
          <Image
            source={dataList.map((element, index) => {
              <View>{element}</View>;
            })}
          />
        </TrainingCard>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    //  alignItems: 'center',
    //  justifyContent: 'center',
    backgroundColor: '#1e1e1e',
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  btnAdd: {
    backgroundColor: 'white',
    borderColor: '#db2c1e',
  },
});

export default TrainingVideos;
