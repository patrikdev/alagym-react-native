import React from 'react';
import {View, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import Media from '../../../../assets/img/trainingC.jpeg';
import ButtonBox from './ButtonBox';

const MediaExercise = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <ImageBackground source={{uri: props.img}} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.containerButton}>
        <ButtonBox />
      </TouchableOpacity>
    </View>
  );
};

export default MediaExercise;
