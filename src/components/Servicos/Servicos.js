import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import Lista from './Lista';
import Rodape from '../Rodape/rodape';

export default class Servicos extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 8 }}>
          <Lista />
        </View>
        <Rodape />
      </View>
    );
  }
}
