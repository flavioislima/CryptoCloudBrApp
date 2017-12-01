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
        height: 40 }}
      >
        <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>CryptoCloudBrasil -
            Todos os Direitos Reservados</Text>
      </View>
    );
  }
}
