import { Text, TouchableOpacity, View,StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

const ExtraFeatures = () => {
//   const isNew = false;
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.Features}> 
          <Entypo name="star-outlined" size={30} />
          <Text style={styles.text} >Ultimate Game Clan</Text>
          {/* {isNew &&  <Text style={styles.text}>New</Text>} */}
            <SimpleLineIcons name="arrow-right" size={13} style={styles.icon}/>
        </TouchableOpacity>

      <TouchableOpacity style={styles.Features}>
        <MaterialIcons name="attach-money" size={30} />
        <Text style={styles.text}>Personal Loan</Text>
        {/* {isNew &&  <Text style={styles.text}>New</Text>} */}
         <SimpleLineIcons name="arrow-right" size={13} style={styles.icon}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Features}>
        <Ionicons name="cash-outline" size={30} />
        <Text style={styles.text}>Payments & Currencies</Text>
        {/* {isNew &&  <Text style={styles.text}>New</Text>} */}
         <SimpleLineIcons name="arrow-down" size={13} style={styles.icon}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Features}>
        <Ionicons name="wallet-outline" size={30} />
        <Text style={styles.text}>Earn & Redeem</Text>
        {/* {isNew &&  <Text style={styles.text}>New</Text>} */}
          <SimpleLineIcons name="arrow-down" size={13} style={styles.icon}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Features}>
        <SimpleLineIcons name="note" size={30} />
        <Text style={styles.text}>Manage Account</Text>
        {/* {isNew &&  <Text style={styles.text}>New</Text>} */}
          <SimpleLineIcons name="arrow-down" size={13} style={styles.icon}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Features}>
        <Octicons name="goal" size={30} />
        <Text style={styles.text}>Challenges</Text>
        {/* {isNew &&  <Text style={styles.text}>New</Text>} */}
          <SimpleLineIcons name="arrow-right" size={13} style={styles.icon}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Features}>
        <EvilIcons name="heart" size={30} />
        <Text style={styles.text}>Wishlist</Text>
        {/* {isNew &&  <Text style={styles.text}>New</Text>} */}
          <SimpleLineIcons name="arrow-right" size={13} style={styles.icon}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Features}>
        <Ionicons name="star-outline" size={30} />
        <Text style={styles.text}>Myntra Suggests</Text>
        {/* {isNew &&  <Text style={styles.text}>New</Text>} */}
          <SimpleLineIcons name="arrow-right" size={13} style={styles.icon}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Features}>
        <Feather name="settings" size={30} />
        <Text style={styles.text}>Settings</Text>
        {/* {isNew &&  <Text style={styles.text}>New</Text>} */}
         <SimpleLineIcons name="arrow-right" size={13} style={styles.icon}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    borderWidth:4,
        // borderColor:'#c8c7c7',
        borderColor:'yellow',
      
  },
    Features:{
        flexDirection:'row',
        paddingHorizontal:15,
        paddingVertical:15,
        borderWidth:1,
        // borderColor:'#c8c7c7',
        borderColor:'red',
        gap:10,
        alignItems:'flex-start',
        marginLeft:4,
    },
    icon:{
        marginLeft:100,
    },
    text:{
        fontSize:17,
        fontWeight:'bold',
        borderWidth:1,
        borderColor:'blue',
      

    }
})

export default ExtraFeatures;
