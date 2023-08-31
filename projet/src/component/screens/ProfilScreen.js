import React, {useState} from 'react'
import {View, Text, Image } from 'react-native'
import AppStyles from '../../constants/Styles';

const  ProfilScreen = () => {
  
  const [profil, setProfil] = useState({
    nom : 'Antigone Pakloglou',
    mail : 'antigone.pakloglou@estiam.com',
    annee : 'Estiam 4',
    campus : 'Lyon'
  });
   

  return (
    <View style={AppStyles.container}>
        <Image style={AppStyles.imageProfil}  source={require('../../../assets/profil.png')}/>
        <View style={AppStyles.header}>
            <Text style={AppStyles.txtInfo}>{profil.nom}</Text>
            <Text style={AppStyles.txtInfo}>{profil.mail}</Text>
            <Text style={AppStyles.txtInfo}>{profil.annee}</Text>
            <Text style={AppStyles.txtInfo}>{profil.campus}</Text>
        </View>
    </View>
  )



}

export default ProfilScreen