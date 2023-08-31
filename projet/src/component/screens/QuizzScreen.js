import { View, Text, TouchableOpacity, Alert, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import AppStyles from '../../constants/Styles';
import CustomButton from '../CustomButton';

const QuizzScreen = ({route, navigation}) => {
    const [score, setScore] = useState(0);
    const [numQuestion, setNumQuestion] = useState(0);
    const [quizz, setQuizz] = useState({
            "id": 1,
            "title": "",
            "description": "",
            "image": "",
            "questions": [
                {
                    "id": 1,
                    "title": "",
                    "answers": [
                        
                    ]
                },
            ]
    });
   
    const nbrQuestion = quizz.questions.length;
  
    useEffect(() => {
        //recupere parametres
        if(route.params.quizz){
            setQuizz(route.params.quizz);
        }
    }, []);
   
    //vérification réponse
    const checkAnswer = (answerClicked) => {
       if(answerClicked.isCorrect){
        Alert.alert('BRAVO', 'Bonne réponse !', 
            [{ 
                onPress: () => checkEndPartie()
            }]
        );
        setScore(score + 1);
       } else{
            Alert.alert('PERDU', 'Mauvaise réponse ...', 
                [{
                    onPress: () => checkEndPartie(),
                }]
            );
        }
    }  

    //check si on a plus de questions
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
            quizz&&quizz.questions[numQuestion].answers.map((answer) => (
                <TouchableOpacity key={answer.title} style={AppStyles.reponses} onPress={() => checkAnswer(answer)}>
                 <Text style={AppStyles.reponsesText}> {answer.title}</Text>
                </TouchableOpacity>
            
            ))
        }
    
      <CustomButton onPress={() => navigation.navigate('Home')}/>
    </View>
  )
}


export default QuizzScreen