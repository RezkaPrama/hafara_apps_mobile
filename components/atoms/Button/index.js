import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const Button = ({ text, color = '#f19097', textColor = '#020202', onPress }) => {

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} >
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}> {text} </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: (color) => ({ backgroundColor: color, padding: 12, borderRadius: 12 }),
  text: (color) => ({ fontSize: 14, color: color, textAlign: 'center' })
})
