import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet,
  View,
  Dimensions,
  Image,
  } from 'react-native'
import { Images, Colors } from '../Themes'


export default class Logo extends Component {

  render () {
    return (
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={Images.logo}
      />
    );
  }
}


const styles = StyleSheet.create({

  logo: {
    flex: 0.2,
    width: Dimensions.get('window').width,
    backgroundColor: Colors.snow,
  },

});
