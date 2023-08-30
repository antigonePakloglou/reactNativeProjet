import { View, Text, TouchableOpacity, Alert, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import AppStyles from '../../constants/Styles';
import CustomButton from '../CustomButton';
import { Feather } from '@expo/vector-icons';

const QuizzScreen = ({route, navigation}) => {
    const [score, setScore] = useState(0);
    const [numQuestion, setNumQuestion] = useState(0);
    const [quizz, setQuizz] = useState({
            "id": 1,
            "title": "Débutant Mysql",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries.",
            "image": "http://estiamqcm.davilat.com/images/sql.png",
            "questions": [
                {
                    "id": 1,
                    "title": "MySQL est un système de gestion de base de données?",
                    "answers": [
                        
                    ]
                },
            ]
    });
   
    const nbrQuestion = quizz.questions.length;
  
    //se declanche 1 fois car [] vide
    useEffect(() => {
        //recupere parametres
        if(route.params.quizz){
            setQuizz(route.params.quizz);
        }
    }, []);
   
    
    const checkAnswer = (answerClicked) => {
       if(answerClicked.isCorrect){
        Alert.alert('BRAVO', 'Bonne réponse !');
        setScore(score + 1);
       } else{
            Alert.alert('PERDU', 'Mauvaise réponse ...');
       }
      checkEndPartie();
    }  

    const checkEndPartie = () => {
        if(numQuestion < (quizz.questions.length - 1)){
            setNumQuestion(numQuestion + 1);
           } else {
            Alert.alert('FIN', 'Partie terminée');
            navigation.navigate('Home');
          }
    }

  return (
    <View style={AppStyles.container}>
        {/* <Feather name="arrow-left-circle" size={24} color="black" /> */}
        <View style={AppStyles.header}>
            <Text style={AppStyles.titreQuizz}>{quizz.title}</Text>
         
            <View style={AppStyles.rowAligne}>
                <Text style={AppStyles.txtQuestionScore}>Question : {numQuestion + 1} / {nbrQuestion}</Text> 
                <Text style={[AppStyles.textScore, AppStyles.txtQuestionScore]}>Score : {score}</Text>
            </View>
        </View>
     

        <Text style={AppStyles.question}>{quizz?.questions[numQuestion].title}</Text>
        
        {
            /* Reponses possibles à la question */
            quizz.questions[numQuestion].answers.map((answer) => (
                <Pressable key={answer.title} style={AppStyles.reponses} onPress={() => checkAnswer(answer)}>
                <Text style={AppStyles.reponsesText}> {answer.title}</Text>
            </Pressable>
            
            ))
        }
    
      <CustomButton onPress={() => navigation.navigate('Home')}/>
    </View>
  )
}


export default QuizzScreen