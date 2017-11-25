import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

export default class Cotacoes extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text>Cotações das Principais Moedas:</Text>
        </View>
      </View>
    );
  }
}
