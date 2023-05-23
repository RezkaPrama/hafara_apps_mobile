import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { IcBack } from '../../../assets';

const Header = ({ title, subTitle, onBack }) => {

    return (
        <View style={styles.container}>
            {
                onBack && (
                    <TouchableOpacity activeOpacity={0.5} onPress={onBack}>
                        <View style={styles.back}>
                            <IcBack />
                        </View>
                    </TouchableOpacity>
                )
            }

            <View>
                <Text style={styles.title}> {title} </Text>
                <Text style={styles.subTitle}> {subTitle} </Text>
            </View>
        </View >
    )

}

export default Header

const styles = StyleSheet.create({
    container: { backgroundColor: '#f19097', paddingHorizontal: 24, paddingTop: 35, paddingBottom: 14, flexDirection: 'row', alignItems: 'center', borderRadius: 10 },
    title: { fontSize: 22, color: '#020202', paddingBottom: 10 },
    // subTitle: { fontSize: 14, color: '#8D92A3' },
    subTitle: { fontSize: 14, color: '#fff' },
    back: { padding: 16, marginRight: 16, marginLeft: -20 }
})
