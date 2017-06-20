import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class ReacrVrSamplePano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('2016_10_17__22_05_18.jpg')} />
      </View>
    );
  }
};

AppRegistry.registerComponent('ReacrVrSamplePano', () => ReacrVrSamplePano);
