import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ViewPagerAndroid,
  BackHandler
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Cabecalho from '../Cabecalho/Cabecalho';
import Rodape from '../Rodape/rodape';

export default class QuemSomos extends Component<{}> {
  render() {
    const corPrimaria = '#837A7F';
    return (
      <View style={styles.MainView}>
      <Cabecalho descricao="Sobre a Bitcoin" corFundo={corPrimaria} />

        <ViewPagerAndroid
        style={styles.PagerView}
        initialPage={0}
        >
        <View style={styles.pageStyle} key="1">
          <Text style={styles.Titulo}>O que é Bitcoin?</Text>
          <View style={{ flex: 7 }}>
            <Text style={styles.Texto}>Texto</Text>
          </View>
          <Text style={styles.Texto}>Arraste para a próxima página</Text>
        </View>
        <View style={styles.pageStyle} key="2">
          <Text style={styles.Titulo}>Quais Problemas ela Resolve?</Text>
          <View style={{ flex: 7 }}>
            <Text style={styles.Texto}>Texto</Text>
          </View>
          <Text style={styles.Texto}>Arraste para a próxima página</Text>
        </View>
        <View style={styles.pageStyle} key="3">
          <Text style={styles.Titulo}>O que é a Blockchain?</Text>
          <View style={{ flex: 7 }}>
            <Text style={styles.Texto}>Texto</Text>
          </View>
          <Text style={styles.Texto}>Arraste para a próxima página</Text>
        </View>
        <View style={styles.pageStyle} key="4">
          <Text style={styles.Titulo}>Por que investir em Bitcoins??</Text>
          <View style={{ flex: 7 }}>
            <Text style={styles.Texto}>Texto</Text>
          </View>
          <Text style={styles.Texto}>Arraste para a próxima página</Text>
        </View>
        <View style={styles.pageStyle} key="5">
          <Text style={styles.Titulo}>Bitcoin é uma Bolha?</Text>
          <View style={{ flex: 7 }}>
            <Text style={styles.Texto}>Texto</Text>
          </View>
          <Text style={styles.Texto}>Arraste para a próxima página</Text>
        </View>
        <View style={styles.pageStyle} key="6">
          <Text style={styles.Titulo}>Quanto a CryptoCloudBrasil</Text>
          <View style={{ flex: 7 }}>
            <Text style={styles.Texto}>Texto</Text>
          </View>
          <Text style={styles.Texto}>Arraste para a próxima página</Text>
        </View>
        <View style={styles.pageStyle} key="7">
          <Text style={styles.Titulo}>Quais as Vantagens de Trabalhar Conosco??</Text>
          <View style={{ flex: 7 }}>
            <Text style={styles.Texto}>Texto</Text>
          </View>
        </View>
      </ViewPagerAndroid>

      <Rodape corFundo={corPrimaria} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    MainView: {
      flex: 1,
      backgroundColor: 'white',
    },
    PagerView: {
      flex: 8,
      backgroundColor: 'white'
    },
    pageStyle: {
      alignItems: 'center',
      padding: 20,
    },
    Titulo: {
      fontSize: 16,
      color: 'orange',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    Texto: {
      fontSize: 14,
      color: 'darkgray',
      textAlign: 'center'
    }
  });

BackHandler.addEventListener('hardwareBackPress', () => {
 if (Actions.currentScene !== Actions.MainScreen) {
   Actions.pop();
   return true;
 }
 return false;
});
