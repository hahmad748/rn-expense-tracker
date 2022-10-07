import { StyleSheet,Text, Image, View } from 'react-native'
import React from 'react'
import {theme} from '../../../constants/values'

const Header = ({user}) => {
    return (
    <View style={styles.container}>
      <View>
        <Text style={theme.h1}>Hello,  {user.username}</Text>
        <Text style={theme.h2}>Welcome back to your wallet</Text>
      </View>
      <Image source={{uri:user.img}} style={styles.image}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    image:{
        width:45,
        height:45,
        borderRadius:10,
        borderColor:'white',
        borderWidth:1
    }
})