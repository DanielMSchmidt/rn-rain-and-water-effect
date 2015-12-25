'use strict';

import React from 'react-native';
import RainyImage from './RainyImage';

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} = React;

const DEVICE_HEIGHT = parseFloat(Dimensions.get('window').height);
const DEVICE_WIDTH = parseFloat(Dimensions.get('window').width);

var RainAndWater = React.createClass({
  render: function() {
    return (
      <RainyImage style={styles.container} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    height: DEVICE_HEIGHT,
  }
});

AppRegistry.registerComponent('RainAndWater', () => RainAndWater);
