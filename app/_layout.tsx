
import React from 'react'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const layout = () => {

  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark'? eva.dark : eva.light

  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={theme}>
        <Stack>
            <Stack.Screen name='index' 
              options={{
                headerTitle: 'Turnos Redes', 
                headerBackTitleStyle: { fontSize:40 },
                headerStyle:{backgroundColor: '#4468e5'},
                headerTintColor:'#dbe2fa'
            }} />
            <Stack.Screen name='edit'
              options={{
                headerTitle: 'Editar turnos',
                headerBackTitleStyle: { fontSize:40},
            }}/>
        </Stack>
    </ApplicationProvider>
    
    </>
    
  )
}

export default layout