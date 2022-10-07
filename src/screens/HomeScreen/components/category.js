import React from 'react';
import { View, Text, Dimensions, TouchableOpacity,StyleSheet,Image } from 'react-native';
import {theme} from '../../../constants/values'
const {width} = Dimensions.get('screen');

const  Category = ({category,onPress}) => {
  return (
    <TouchableOpacity  onPress={()=>{onPress(category.heading)}}>
        <View style={[styles.container,{backgroundColor:category.color}]}>
           <Image  style={styles.image} source={category.img} /> 
           <Text style={[theme.h2,{marginTop:10}]}>{category.heading}</Text>
           <Text style={[theme.pwhite,styles.paragraph]}>{category.details}</Text>
        </View>
     </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    container:{
      width: width * 0.25,
      height:150,
      borderRadius:15,
      marginRight:15,
      alignItems:'center',
      justifyContent:'center',
    },
    paragraph:{
      textAlign:'center',
      fontWeight:'bold',
      marginTop:5,
      paddingHorizontal:2
    },
    image:{
      width:45,
      height:45,
    }
});

export default Category;