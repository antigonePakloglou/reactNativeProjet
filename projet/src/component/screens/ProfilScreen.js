import React from 'react'
import {View, Text, Image } from 'react-native'
import AppStyles from '../../constants/Styles';

const  ProfilScreen = () => {
  
   

  return (
    <View style={AppStyles.container}>
        <Image style={AppStyles.imageProfil}  source={require('../../../assets/profil.png')}/>
        <View style={AppStyles.header}>
            <Text style={AppStyles.txtInfo}>Antigone Pakloglou</Text>
            <Text style={AppStyles.txtInfo}>antigone.pakloglou@estiam.com</Text>
            <Text style={AppStyles.txtInfo}>Estiam 4</Text>
        </View>
    </View>
  )



}

export default ProfilScreen