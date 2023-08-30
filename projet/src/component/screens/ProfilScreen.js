import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const  ProfilScreen = () => {
  
   

  return (
    <View style={styles.container}>
      <Text>{quizz.title}</Text>
    </View>
  )



}

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#A1A6FC'
  }
})
export default ProfilScreen