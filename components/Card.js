import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card({children}) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'gray',
        width:'90%',
        borderRadius:10,
        padding:12,
        alignItems: 'flex-start',
        marginBottom:'50%',
        elevation: 5,
        shadowColor:'gray',
        shadowOffset: {width:6, height:6},
        shadowRadius:6,
        shadowOpacity:2,

    }
})