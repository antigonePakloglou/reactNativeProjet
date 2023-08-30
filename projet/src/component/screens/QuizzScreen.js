import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import AppStyles from '../../constants/Styles';
import CustomButton from '../CustomButton';

const QuizzScreen = ({route}) => {

    const [quizz, setQuizz] = useState({});
  
    //se declanche 1 fois car [] vide
    useEffect(() => {
        //recupere parametres
        if(route.params.quizz){
            setQuizz(route.params.quizz);
        }
    }, []);

  return (
    <View style={styles.container}>
        <View style={AppStyles.header}>
            <Text style={AppStyles.titreQuizz}>{quizz.title}</Text>
            <View style={AppStyles.rowAligne}>
                <Text style={AppStyles.txtQuestionScore}>Question : 1 / 5</Text> 
                <Text style={[AppStyles.textScore, AppStyles.txtQuestionScore]}>Score : 0</Text>
            </View>
        </View>
     
      

        <Text style={AppStyles.question}>Ma question posé blblblb ?</Text>

        {/* Reponses possibles à la question */}
        <Pressable style={AppStyles.reponses}>
            <Text style={AppStyles.reponsesText}> A- Orienté Objet</Text>
        </Pressable>
        <Pressable style={AppStyles.reponses}>
            <Text style={AppStyles.reponsesText}> A- Orienté Objet</Text>
        </Pressable>
        <Pressable style={AppStyles.reponses}>
            <Text style={AppStyles.reponsesText}> A- Orienté Objet</Text>
        </Pressable>

      <CustomButton title="Valider" onPress={() => null}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default QuizzScreen