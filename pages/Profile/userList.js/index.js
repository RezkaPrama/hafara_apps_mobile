import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const userList = ({image, title, value}) => {

    return (
        <View>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 8, borderBottomWidth: 0.5, borderColor: '#8D92A3' }}>
                <Image
                    source={image}
                    style={{ width: 50, height: 50, borderRadius: 8, overflow: 'hidden', marginRight: 12 }}
                />
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 16, color: '#020202', paddingVertical: 20 }}>{title}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 16, color: '#020202', paddingVertical: 20 }}>{value}</Text>
                </View>
            </View>

        </View>
    )
}

export default userList;

const styles = StyleSheet.create({})
