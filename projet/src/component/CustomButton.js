import {Text, Pressable } from 'react-native';
import React from 'react';
import AppStyles from '../constants/Styles'
import { Ionicons } from '@expo/vector-icons';

const CustomButton = ({onPress}) => {
  return (
    <Pressable style={AppStyles.btn} onPress={onPress}>
      <Ionicons name="ios-close-circle" size={24} color="black" />
      
    </Pressable>
  )
}


export default CustomButton