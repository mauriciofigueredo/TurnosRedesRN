import React, { useState } from 'react'
import { Datepicker, Divider, Icon, Layout, ListItem, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'



const HomeScreen = () => {
    
    const [date, setDate] = useState(new Date());


    return (
    <Layout style={styles.container}>
      
      <Datepicker
        label='Fecha actual evaluada'
        placeholder='Pick Date'
        date={date}
        onSelect={nextDate => setDate(nextDate)}
        // accessoryLeft={<Icon name='calendar-outline'/>}
      />

      <Divider style={{marginVertical: 25}}/>
        <Text category='p1' style={styles.title}>'Equipo A1   -  Dia 3    T M</Text>
        <Text category='label' appearance='hint'>Redes</Text>
      <Divider style={{marginVertical: 10}}/>
        <Text category='p1' style={styles.title}>'Equipo A3   -  Dia 5    T T</Text>
        <Text category='label' appearance='hint'>Ing Especial</Text>
    <Divider style={{marginVertical: 10}}/>
        <Text category='p1' style={styles.title}>'Equipo A16  -  Dia 5    T M</Text>
        <Text category='label' appearance='hint'>Redes</Text>  

    </Layout>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        backgroundColor: '#093e5f'

    },
    title: {
        color: '#57b3eb',
        fontWeight: 'bold',
        marginBottom:8
    }

})