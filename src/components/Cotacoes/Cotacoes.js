import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import Valores from './API_Moedas';

export default class Cotacoes extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 20 }}>Cotações das Principais Moedas:</Text>
          <Valores />
        </View>
      </View>
    );
  }
}
