import {View,Text} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './src/screens/ProfileScreen';
import SearchScreen from './src/screens/SearchScreen/index';
import SearchHeaderComponent from './src/components/SearchHeaderComponent';

const Stack = createNativeStackNavigator();

const App = ()=>{
 return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown:true}}/>
            <Stack.Screen name="Search" component={SearchScreen} options={{headerTitle:() => <SearchHeaderComponent/>}} />
        </Stack.Navigator>
     
    </NavigationContainer>
 )
};

export default App;