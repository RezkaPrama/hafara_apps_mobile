import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

export default class SliderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../../assets/banner/1.jpg'),
        require('../../../assets/banner/2.jpg'),
        require('../../../assets/banner/3.jpg'),
        require('../../../assets/banner/4.jpg'),
        require('../../../assets/banner/5.jpg'),
        require('../../../assets/banner/6.jpg'),
        require('../../../assets/banner/7.jpg'),
      ]
    };
  }

  render() {
    return (
      <View>
        <SliderBox images={this.state.images} />
        {/* <SliderBox
          images={this.state.images}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
        /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({})
