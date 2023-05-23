import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'

const Loading = () => {

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#f19097" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  )
}

export default Loading;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginTop: 18
  },
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
