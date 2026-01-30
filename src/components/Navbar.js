import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Profile from '../screens/ProfileScreen';

const UpperNavbar = () => {

  const navigation = useNavigation();
  
  const ProfielIconHandler = ()=>{
      navigation.navigate(Profile);
  }
  const searchBarHandler = ()=>{
      navigation.navigate('Search');
  }
  return (
    <View style={styles.container}>
      {/* Address */}
      <View>
        <Entypo name="location-pin" size={30} color="#000000" />
        <Text>Deliver to 1100060</Text>
      </View>
      <View style={styles.MiddleNavbar}>
        {/* SearchBar */}
        <View style={styles.SearchBar}>
          <TextInput onPress={searchBarHandler}/>
        </View>

        {/* Icons */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={()=>console.log("NotiIcon")}>
            <Ionicons name="notifications-outline" size={30} color="#000000" />
          </TouchableOpacity>

          <TouchableOpacity  onPress={()=>console.log("heartIcon")}>
            <EvilIcons name="heart" size={30} color="#000000" />
          </TouchableOpacity>

          <TouchableOpacity onPress={ProfielIconHandler}>
            <EvilIcons name="user" size={30} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* <View> */}
      {/* <//View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddbec3',
    height: 230,
       borderWidth:2,
    borderColor:'blue',
  },
  SearchBar: {
    backgroundColor: 'white',
    marginLeft:5,
    borderWidth: 1,
    width: 250,
    borderRadius: 10,
       borderWidth:2,
    borderColor:'black',
  },
  MiddleNavbar: {
    flexDirection: 'row',
    alignItems:'center',
  },
  iconContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-between',
     marginLeft:25,
    
  },
});

export default UpperNavbar;
