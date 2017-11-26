import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios'
import Valores from './Valores';

export default class Cotacoes extends Component<{}> {
  componentDidMount() {
    axios.get();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 8 }}>
          <Text style={{ textAlign: 'center', fontSize: 20 }}>Cotações das Principais Moedas</Text>
          <Valores />
        </View>
        <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#008f00',
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
