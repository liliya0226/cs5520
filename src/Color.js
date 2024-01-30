import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

export default function Color({children}) {
  return (
    <LinearGradient colors={['#FF3399', '#990099', '#660066']} style={styles.background}>
        {children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: '100%',
    }
})