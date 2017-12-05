import React, { Component } from 'react';
import {
  View,
  BackHandler
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Lista from './Lista';
import Cabecalho from '../Cabecalho/Cabecalho';
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
    const corPrimaria = '#938FB1';
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 8 }}>
        <Cabecalho descricao="Nossos Serviços" corFundo={corPrimaria} />
          <Lista />
        </View>
        <Rodape corFundo={corPrimaria} />
      </View>
    );
  }
}
