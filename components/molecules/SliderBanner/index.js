import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { ImageSlider } from "react-native-image-slider-banner";

const SliderBanner = () => {

    return (
      <View>
        <ImageSlider
        data={[
            { img: require('../../../assets/banner/2.jpg') },
            // {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
            // {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
        ]}
        autoPlay={false}
        onItemChanged={(item) => console.log("item", item)}
        closeIconColor="#fff"
    />
      </View>
    )

}

export default SliderBanner

const styles = StyleSheet.create({})
