import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ItemDistList = ({image, title, value}) => {

    return (
        <View>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 8 , borderBottomWidth: 1, borderStyle: 'dashed'}}>
                <Image
                    source={image}
                    style={{ width: 50, height: 50, borderRadius: 8, overflow: 'hidden', marginRight: 12 }}
                />
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ paddingTop: 5, fontSize: 13, color: '#8D92A3' }}>{title}</Text>
                    <Text style={{ fontSize: 16, color: '#020202' }}>{value}</Text>
                </View>
            </View>
        </View>
    )

}

export default ItemDistList;

const styles = StyleSheet.create({})
