import React, { Component } from 'react';
import {
  View,
  BackHandler
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Lista from './Lista';
import Rodape from '../Rodape/rodape';

BackHandler.addEventListener('hardwareBackPress', () => {
 if (Actions.currentScene !== Actions.MainScreen) {
   Actions.pop();
   return true;
 }
 return false;
});

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
