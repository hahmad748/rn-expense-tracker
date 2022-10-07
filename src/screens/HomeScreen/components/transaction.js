import React from 'react';
import { View, Text, Dimensions, TouchableOpacity,StyleSheet,Image } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import {theme,colors} from '../../../constants/values'
const {width} = Dimensions.get('screen');

const  Transaction = ({transaction,onPress}) => {
  return (
    <View style={styles.container}>
        <View style={styles.leftSection}>
            <View style={[styles.imageContainer,{backgroundColor:transaction.color}]}>
                <Image  style={styles.image} source={transaction.img} /> 
            </View>
            <View style={styles.rightSection}>            
                <Text style={[theme.p,{marginBottom:10}]}>{transaction.heading}</Text>
                <Text style={[theme.h2,styles.paragraph]}>{transaction.currency } { (transaction.price).toLocaleString()}</Text>
            </View>
        </View>
        <CustomButton 
            width={52}
            height={25}
            radius={5}
            textSize={12}
            text="Details"
            backgroundColor={colors.orange}
            onPress={()=>{onPress(transaction.heading)}}
        />
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:'white',
      width:'100%',
      height:70,
      borderRadius:10,
      padding:8,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginBottom:15,
      paddingEnd:15
    },
    leftSection:{
      flexDirection:'row',
      alignItems:'center'
    },
    image:{
      width:35,
      height:35,
    },
    imageContainer:{
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center',
        marginRight:20
    }
});

export default Transaction;