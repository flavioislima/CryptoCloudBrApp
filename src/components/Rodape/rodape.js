import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Rodape extends Component<{}> {
  render() {
    return (
      <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#008f00',
        borderWidth: 0.25,
        borderColor: 'gray',
        height: 30 }}
      >
        <Text style={{ color: 'white', fontSize: 11, textAlign: 'center' }}>
        CryptoCloudBrasil©</Text>
      </View>
    );
  }
}
