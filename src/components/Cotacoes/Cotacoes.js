import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Valores from './Valores';

export default class Cotacoes extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 20 }}>Cotações das Principais Moedas</Text>
          <Valores />
        </View>
      </View>
    );
  }
}
