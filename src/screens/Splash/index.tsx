import React from 'react';
import {Animated, Image, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import styles from './styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageAppLogo} source={ILLogo} />
      <Animated.Text style={styles.textAppName}>CEKIN</Animated.Text>
      <Text style={styles.textAppDesc}>COVID ELECTRONIC INFORMATION</Text>
    </View>
  );
};

export default Splash;
