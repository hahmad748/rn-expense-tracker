import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Spacer = ({height=0,width=0}) => {
  return (
    <View style={{height:height,width:width}}></View>
  )
}

export default Spacer

const styles = StyleSheet.create({})