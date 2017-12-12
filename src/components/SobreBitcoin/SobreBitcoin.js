import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  BackHandler
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import PagerBitcoin from './PagerBitcoin';
import Cabecalho from '../Cabecalho/Cabecalho';
import Rodape from '../Rodape/rodape';

export default class QuemSomos extends Component<{}> {
  render() {
    const corPrimaria = '#d4991c';
    return (
      <View style={styles.MainView}>
        <Cabecalho descricao="Sobre a Bitcoin" corFundo={corPrimaria} />
        <PagerBitcoin />
        <Rodape corFundo={corPrimaria} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    MainView: {
      flex: 1,
      backgroundColor: 'white',
    }
});

BackHandler.addEventListener('hardwareBackPress', () => {
 if (Actions.currentScene !== Actions.MainScreen) {
   Actions.pop();
   return true;
 }
 return false;
});
