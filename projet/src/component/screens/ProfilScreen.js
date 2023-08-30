import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import AppStyles from '../../constants/Styles';
import Colors from '../../constants/Colors';

const  ProfilScreen = () => {
  
   

  return (
    <View style={styles.container}>
        <Image style={AppStyles.imageProfil}  source={require('../../../assets/profil.png')}/>
        <View style={AppStyles.header}>
            <Text style={AppStyles.txtInfo}>Antigone Pakloglou</Text>
            <Text style={AppStyles.txtInfo}>antigone.pakloglou@estiam.com</Text>
            <Text style={AppStyles.txtInfo}>Estiam 4</Text>
        </View>
    </View>
  )



}

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.lavande
  }
})
export default ProfilScreen