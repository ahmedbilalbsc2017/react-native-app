import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CardArticles = props => {
  return (
    <TouchableOpacity
      style={styles.mainCard}
      onPress={() => {
        console.warn('Pressed');
      }}>
      <View style={styles.internalCard}>
        <Image source={props.articleImg} style={styles.articleThumbnail} />
        <View style={styles.articleTxt}>
          <Text style={styles.textHeading}>{props.heading}</Text>
          <Text style={styles.txtBody}>{props.textBody}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
  },
  internalCard: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
  },
  articleThumbnail: {
    height: 130,
    width: 70,
    alignSelf: 'center',
  },
  articleTxt: {
    width: 300,
    padding: 10,
  },
  textHeading: {
    color: 'white',
    fontWeight: 'bold',
  },
  txtBody: {
    color: 'white',
    //  textAlign: 'center',
  },
});

export default CardArticles;
