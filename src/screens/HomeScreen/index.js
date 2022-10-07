import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/header'
import {transactions, user} from '../../mock/data'
import styles from './styles'
import {theme} from '../../constants/values'
import Spacer from '../../components/Spacer'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import Category from './components/category'
import Transaction from './components/transaction'
import { categories } from '../../mock/data'
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.horizontalPaddingView}>
      <Header user={user}/>
      <Spacer height={20}/>
      <CustomInput placeholder={"Search"} icon={"search-outline"}/>
      <Spacer height={20}/>
      <Text style={theme.h2}>Categories</Text>
      <Spacer height={20}/>
    </View>
    <View style={{paddingLeft:theme.horizontalPadding}}>
      <FlatList 
          horizontal
          data={categories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item)=>item.id}
          renderItem = {({item})=> <Category category={item} onPress={(val)=>{ alert(`Clicked ${val}`)}} />}
        />
    </View>
    <View style={styles.horizontalPaddingView}>
      <Spacer height={20}/>
      <Text style={theme.h2}>Transactions</Text>
      <Spacer height={20}/>
      <FlatList 
          data={transactions}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item)=>item.id}
          renderItem = {({item})=> <Transaction transaction={item} onPress={(val)=>{ alert(`Clicked ${val}`)}} />}
        />
    </View>

    </SafeAreaView>
  )
}

export default HomeScreen