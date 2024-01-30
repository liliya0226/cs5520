import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CheckBox({label, checked, onChange}) {
    const toggleCheckbox = () => {
        onChange(!checked);
      };

    return (
        <TouchableOpacity onPress={toggleCheckbox}>
            <View style={styles.container}>
                <View style={[styles.customCheckbox,{backgroundColor: checked ? "purple" : "transparent" }]}>
                    {checked && (<Text style={styles.customCheckboxSelected}>✓</Text>)}
                </View>
                <Text style={styles.customCheckboxLabel}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center"
    },

    customCheckbox:{
       width:20,
       height:20,
       borderWidth: 1,
       borderColor: "black",
       borderRadius: 3,
       marginRight: 10,
       justifyContent: "center",
       alignItems: "center", 
    },

    customCheckboxSelected: {
        color: "white",
        fontWeight: "bold",
    },

    customCheckboxLabel: {
        color: "purple",
        fontSize: 15,
    },
    
})
