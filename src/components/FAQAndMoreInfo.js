import {Text,TouchableOpacity,View,StyleSheet} from 'react-native';

const FAQAndMoreInfo = () =>{
    return(
       <View style={styles.container}>
        <TouchableOpacity style={styles.containerButton}>
            <Text style={styles.containerText}>FAQs</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.containerButton}>
            <Text style={styles.containerText}>ABOUT US</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.containerButton}>
            <Text style={styles.containerText}>TERMS OF USE</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.containerButton}>
            <Text style={styles.containerText}>PRIVACY POLICY</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.containerButton}>
            <Text style={styles.containerText}>GRIEVANCE REDRESSAL</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.containerButton}>
            <Text style={styles.containerText}>PRIVACY CENTER</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.containerButton}>
            <Text style={styles.containerText}>FSSAI Food Safety Connect App</Text>
        </TouchableOpacity>
          
       </View>
    )
};

const styles = StyleSheet.create({
    container:{
        paddingVertical:10,
        paddingHorizontal:50,
        
    },
    containerText:{
        color:'grey',
        fontWeight:'bold',
        
    },
    containerButton:{
        paddingVertical:8,
    }
})
export default FAQAndMoreInfo;