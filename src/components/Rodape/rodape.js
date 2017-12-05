import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Rodape extends Component<{}> {
  render() {
    const backColor = this.props.corFundo;
    return (
      <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backColor,
        // borderWidth: 0.25,
        // borderColor: 'gray',
        height: 35 }}
      >
        <Text style={{ color: 'white', fontSize: 11, textAlign: 'center' }}>
        CryptoCloudBrasil©</Text>
      </View>
    );
  }
}
