import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({label, value, onChangeText, error}) {

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        width:'100%',
        marginBottom: 20, 
    },

    input:{
        width: 250,
        borderBottomColor: 'purple',
        borderBottomWidth: 2,
        fontSize: 18,
        color: 'purple',
        textAlign: 'center',
        paddingBottom: 8,
    },

    inputLabel:{
        color: 'purple',
        fontSize: 18,
        marginBottom: 10, 
    },

    errorMessage: {
      color: 'dimgrey',
      fontSize: 18,
    }
})
