import {Text,StyleSheet,View, TouchableOpacity} from 'react-native';

const BasicNecessity = ({item,index}) => {
 return(
    <TouchableOpacity style={styles.container}>
        <Text style={styles.textContainer}>{item}</Text>
        <Text> {'>'}</Text>
    </TouchableOpacity>
 )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:100,
        gap:10,
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:15,
        backgroundColor:'white',
    },
    textContainer:{
        fontWeight:'bold',
    }
})

export default BasicNecessity;