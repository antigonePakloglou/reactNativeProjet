import { StyleSheet } from "react-native";
import Colors from "./Colors";

export default StyleSheet.create({
    /* page Quizz */
    titreQuizz: {
        fontSize: 22,
        backgroundColor: Colors.yellow,
        textDecorationLine: 'underline',
        padding: 10,
        borderRadius: 40,
        marginBottom: 20,
    },
    question: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.textColor,
        marginBottom: 40
    },
    reponses : {
        borderWidth: 1,
        borderColor: Colors.lightPink,
        borderRadius: 50,
       borderRadius: 20,
       padding: 10,
       width: '90%',
       marginHorizontal: 10,
       marginBottom: 10
    },
    reponsesText : {
        fontSize: 16,
    },
    rowAligne :{
        flexDirection: 'row'
    },
    textScore : {
        marginLeft: 20
    },
    txtQuestionScore : {
        fontSize: 18
    },
    header: {
        backgroundColor: Colors.yellow,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        padding: 30,
        marginBottom: 30
    },

    /* btn custom */
    btn: {
        height: 45,
        width: '70%',
        backgroundColor: Colors.greenBtn,
        borderRadius: 30,
        justifyContent : 'center',
        alignItems : 'center',
      
    },
    text :{
        color: Colors.textColor,
        fontWeight: 'bold',
        fontSize: 15,
    },

    /* page Profil */
    txtInfo: {
        marginBottom: 30,
        fontWeight: 'bold',
        fontSize: 13
    },
    imageProfil : {
        width: 200,
        height: 200
    },

    /* page Home */
    headerListe: {
        backgroundColor: Colors.yellow,
        justifyContent: 'center',
        alignItems: 'center',
       
        padding: 10,
        marginBottom: 30,
        marginTop: 40
    },
    quizzBox : {
       
      width: 180,
      height: 180,
      marginBottom: 100

    
        
    },
    quizzTitre : {
       
    },
    quizzQuestion : {
       
    },
    quizzImg : {
        height: 100,
        width: 150,
        borderRadius: 40,
        marginBottom: 30
    }
    
}); 