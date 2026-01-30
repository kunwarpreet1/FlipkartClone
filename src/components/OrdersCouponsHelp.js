import {View,TouchableOpacity,Text,StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const OrderCouponsHelp = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Feather name="package" size={30}/>
        <Text>Orders</Text>
        <Text style={styles.arrowText}> {'>'} </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <FontAwesome5 name="crown" size={30}/>
        <Text>Insider</Text>
        <Text style={styles.arrowText}> {'>'} </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Feather name="headphones" size={30}/>
        <Text>Help Center</Text>
        <Text style={styles.arrowText}> {'>'} </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <FontAwesome name="ticket" size={30}/>
        <Text>Coupons</Text>
        <Text style={styles.arrowText}> {'>'} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-evenly',
        flexWrap:'wrap',
        paddingVertical:15,
        paddingHorizontal:15,
        gap:15,
    },
    button:{
        borderWidth:1,
        borderColor:'grey',
        borderRadius:5,
        width:180,
        paddingHorizontal:20,
        paddingVertical: 5,
        flexDirection:'row',
        alignItems:'center',
        gap:10,

    },
    arrowText:{
        marginLeft: 'auto',
    
    }
})

export default OrderCouponsHelp;
