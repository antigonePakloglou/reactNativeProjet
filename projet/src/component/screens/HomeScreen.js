import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import Colors from '../../constants/Colors';
import AppStyles from '../../constants/Styles';

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
            <View style= {styles.quizz}>
                <Image style={styles.image}  source={{uri: item.image}}/>
                <Text style={styles.quizzTitle}>{item.title}</Text>
                <Text style={AppStyles.h3}>x questions</Text>
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
      <Text >HOME</Text>
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
     
    },
    quizzTitle : {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10
    
    },
    quizz: {
        backgroundColor : Colors.pink,
        width: 150,
        height: 200,
        marginHorizontal: 20,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        padding: 20
    },
    quizzNombre : {
        color: '#FBF189'
    },
    image: {
        height: '50%',
        width: '50%'
    }
  });
export default HomeScreen