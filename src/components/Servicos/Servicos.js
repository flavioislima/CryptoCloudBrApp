import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import Lista from './Lista';

export default class Servicos extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 8 }}>
          <Lista />
        </View>
        <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffa500',
          borderWidth: 0.25,
          borderColor: 'gray' }}
        >
          <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>CryptoCloudBrasil -
              Todos os Direitos Reservados</Text>
        </View>
      </View>
    );
  }
}
