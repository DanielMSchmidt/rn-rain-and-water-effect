/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';

var {
  StyleSheet,
  Text,
  View,
  Image,
  Component,
} = React;

export default class RainyImage extends Component {
  render() {
    const {
      style,
    } = this.props;

    return (
      <View style={style}>
        <Image style={styles.fullsize} source={{uri: 'http://lorempixel.com/1400/1400/nature/'}} />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  fullsize: {
    flex: 1,
    resizeMode: 'cover',
  },
});
