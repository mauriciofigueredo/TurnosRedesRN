import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Icon } from '@ui-kitten/components';


interface Props {
  name: string;
  color?: string;
  white?:boolean;
}

const MyIcon = ({name, color='#c2fffb'}:Props) => {
  return (
    <Icon name={name} fill={color}/>
  )
}

export default MyIcon

const styles = StyleSheet.create({
  icon: {
    height: 32,
    width: 32
  }
})