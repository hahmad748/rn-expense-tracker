import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({width=100,height=30,radius=0,textColor='white',textSize=18,text="Button",backgroundColor="#C8DFE4",onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container,{
        width:width,
        height:height,
        borderRadius:radius,
        backgroundColor:backgroundColor
      }]}>
        <Text style={{color:textColor,fontSize:textSize}}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center'
  }
})