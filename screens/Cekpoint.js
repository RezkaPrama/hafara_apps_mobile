import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#B6A6BB',
    }
})

export class Cekpoint extends Component {

   

    render() {
        return (
            <View style={styles.container}>
                <Text>No Posts</Text>
            </View>
        )
    }
}

export default Cekpoint;