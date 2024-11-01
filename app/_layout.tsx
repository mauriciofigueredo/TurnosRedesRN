
import React from 'react'
import { ApplicationProvider } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
import { Stack } from 'expo-router'
import HomeScreen from '../src/screens/HomeScreen'

const layout = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
        <Stack>
            <Stack.Screen name='index' 
            options={{
                headerTitle: 'Turnos Redes', 
                headerBackTitleStyle: { fontSize:40 },
                headerTintColor: '#57b3eb',
                headerStyle:{backgroundColor: '#093e5f'}
            }} />
            <Stack.Screen name='edit' options={{headerTitle: 'Editar turnos', headerBackTitleStyle: { fontSize:40}, headerTintColor: '#03629c', headerStyle:{backgroundColor: '#093e5f'} }}/>
        </Stack>
    </ApplicationProvider>
    
  )
}

export default layout