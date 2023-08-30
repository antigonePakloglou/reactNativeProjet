import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import Colors from '../../constants/Colors';
import AppStyles from '../../constants/Styles';
import { Card } from '@rneui/themed';

const API= "http://estiamqcm.davilat.com/api/quizzes";


const HomeScreen = ({navigation}) => {

    const [loading, setLoading] = useState(true);
    const [quizzs, setQuizzs] = useState([]);


useEffect(() => {
    //recuperation de tout les quizzs
    const getQuizzs = ()=> {
        fetch(API)
        .then((response) => response.json())
        .then((quizzs) =>{
            setQuizzs(quizzs);
            setLoading(false);
        });
    }
    //appel de la fonction
    getQuizzs();
}, []);

const renderQuizzItem = ({item}) => {
    return(
        <Pressable onPress={()=> navigation.navigate('QuizzScreen', {
            quizz : item
        })}>
            <View style= {AppStyles.quizzBox}>
                <Card>
                    <Card.Title style={AppStyles.quizzTitre}>{item.title}</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={AppStyles.quizzImg}
                        source={{uri: item.image}}
                    />
                     <Text style={AppStyles.quizzQuestion}>x questions</Text>
                </Card>
            </View>
        </Pressable>
    )
}
if(loading){
    return(
        <ActivityIndicator  size={"large"} color={"purple"}/>
    )
}

  return (
    <View style={styles.container}>
      <View style={AppStyles.headerListe}>
            <Text style={AppStyles.titreQuizz}>Listes des quizzs</Text>
        </View>
     {/*  <Button  title="go to post detail" onPress={()=> navigation.navigate("PostDetail")} /> */}
      <FlatList key={(item)=> item.id}
        data={quizzs}
        renderItem={renderQuizzItem}
       numColumns={2}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.lavande
    },

    quizzNombre : {
        color: '#FBF189'
    },
   
  });
export default HomeScreen