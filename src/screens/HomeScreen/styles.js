import React from 'react'
import { StyleSheet } from 'react-native'
import {colors, theme} from '../../constants/values'

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:theme.verticalPadding + 40,
        backgroundColor:colors.background
    },
    horizontalPaddingView:{
        paddingHorizontal:theme.horizontalPadding
    },
    
})

export default styles;