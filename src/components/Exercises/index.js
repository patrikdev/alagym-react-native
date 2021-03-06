import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import ExerciseSlide from './ExerciseSlide';
import BoxExercise from './BoxExercise';

const axios = require('axios');

const Exercises = () => {
  const [exerciseControl, setExerciseControl] = useState({
    loading: true,
    errorMessage: '',
    data: null,
  });

  const fetchList = async () => {
    setExerciseControl({
      ...exerciseControl,
      loading: true,
    });

    try {
      const response = await axios.get('http://192.168.0.38:3030/v1/workouts');
      setExerciseControl({
        ...exerciseControl,
        loading: false,
        errorMessage: '',
        data: response.data,
      });
      console.warn(exerciseControl.data);
    } catch (error) {
      setExerciseControl({
        ...exerciseControl,
        loading: false,
        errorMessage: 'Ops, não achamos o que você estava procurando.',
      });
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  let content = '';

  if (exerciseControl.loading) {
    content = (
      <View>
        <Text>Carregando</Text>
      </View>
    );
  } else if (exerciseControl.errorMessage) {
    content = (
      <View>
        <Text>Deu erro</Text>
      </View>
    );
  } else if (exerciseControl.data !== null) {
    content = (
      <Swiper>
        {exerciseControl.data.map(exercise => {
          return (
            <View style={{flex: 1}}>
              <BoxExercise img={exercise.media.img} title={exercise.title} />
            </View>
          );
        })}
      </Swiper>
    );
  }

  return content;
};

export default Exercises;
