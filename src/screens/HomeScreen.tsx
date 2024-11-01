import React, { useState } from 'react'
import { Divider, IconElement, Layout, Text } from '@ui-kitten/components'
import {  StyleSheet } from 'react-native'
import MyIcon from '../ui/MyIcon';
import DateSelector from '../ui/DateSelector';
import { DateSelectorK } from '../ui/DateSelectorK';



const HomeScreen = () => {
    
    const [date, setDate] = useState(new Date());

    const CalendarIcon = (): IconElement => (
      <MyIcon
        name='calendar'
      />
    )
    
    return (
      // <ScrollView style={styles.container}>

    <Layout style={styles.container}>
      <DateSelector />
      
      <Divider style={{marginVertical: 25}}/>
        <Text category='p1' style={styles.title}>Equipo A1   -  Dia 3    T M</Text>
        <Text category='label' appearance='hint'>Redes</Text>
      <Divider style={{marginVertical: 10}}/>
        <Text category='p1' style={styles.title}>Equipo A3   -  Dia 5    T T</Text>
        <Text category='label' appearance='hint'>Redes</Text>
     <Divider style={{marginVertical: 10}}/>
        <Text category='p1' style={styles.title}>Equipo A5  -  Dia 5    T M</Text>
        <Text category='label' appearance='hint'>Ing Especial</Text> 
      <Divider style={{marginVertical: 10}}/>
        <Text category='p1' style={styles.title}>Equipo A8  -  Dia 5    T M</Text>
        <Text category='label' appearance='hint'>Redes</Text>
       <Divider style={{marginVertical: 10}}/>
        <Text category='p1' style={styles.title}>Equipo A16  -  Dia 5    T M</Text>
        <Text category='label' appearance='hint'>Redes</Text> 

    </Layout>
        // </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,

    },
    title: {
     
        fontWeight: 'bold',
        marginBottom:8
    }

})