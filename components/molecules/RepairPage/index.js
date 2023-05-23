import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { UnderConst } from '../../../assets'
import { Button, Gap } from '../../atoms'

const Repair = ({navigation}) => {

    return (
        <View style={styles.page}>
            <UnderConst />
            <Gap height={30} />
            <Text style={styles.title}> Data Produk </Text>
            <Text style={styles.title}> sedang dalam Pengembangan </Text>
            <Gap height={30} />
            <View style={styles.buttonContainer}>
                <Button text="Cari Distributor" onPress={() => navigation.replace('MainApp')} />
            </View>
        </View>
    )
}

export default Repair

const styles = StyleSheet.create({
    page: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 20, color: '#020202', alignItems: 'center' },
    subTitle: { fontSize: 14, color: '#8D92A3' },
    buttonContainer: { width: '100%', paddingHorizontal: 80 }
})
