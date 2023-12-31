import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilScreen from './src/component/screens/ProfilScreen';
import HomeScreen from './src/component/screens/HomeScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import QuizzScreen from './src/component/screens/QuizzScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'blue',
        headerShown: false,
        tabBarIcon: (({focused}) => <FontAwesome5 name="home" size={24} color={focused ? 'pink' : 'blue'} />)
      }} />
      <Tab.Screen name="Profile" component={ProfilScreen}  options={{
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'blue',
        headerShown: false,
        tabBarIcon: (({focused}) => <AntDesign name="profile" size={24} color={focused ? 'pink' : 'blue'} />)
      }} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
     {/* initialRouteName : route par defaut  */}
    <Stack.Navigator initialRouteName='Login' >
      <Stack.Screen name="Home" component={HomeScreen}
        options={{
          title: 'Accueil',
          headerShown: false,
        }}
      />
      <Stack.Screen name="QuizzScreen" component={QuizzScreen} 
        options={{
          title: 'Quizz',
          headerShown: false,
        }}
      />
      <Stack.Screen name="Tabs" component={Tabs} 
        options={{
         headerShown: false
        }}
      />
      <Stack.Screen name="Profile" component={ProfilScreen} />
  
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
