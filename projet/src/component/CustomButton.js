import {Text, Pressable } from 'react-native';
import React from 'react';
import AppStyles from '../constants/Styles'

const CustomButton = ({title, onPress}) => {
  return (
    <Pressable style={AppStyles.btn} onPress={onPress}>
      <Text style={AppStyles.text}> {title}</Text>
    </Pressable>
  )
}


export default CustomButton