import React, { Component } from 'react';
import {
  Text,
  View,
  ViewScroll,
  StyleSheet,
  Image
} from 'react-native';

const icone = require('./cotacoes.png');

export default class Valores extends Component<{}> {
  render() {
    return (
      <ViewScroll style={styles.MainView}>

        <View style={styles.MoedasView}>
          <View style={styles.NomeView}>
            <Text style={styles.Nome}>Bitcoin</Text>
            <Image style={styles.Icone} source={icone} />
          </View>
          <View style={styles.InfoView}>
            <Text style={styles.Porcentagem}>+10%</Text>
            <Text style={styles.Valor}>R$30000</Text>
          </View>
        </View>

        <View style={styles.MoedasView}>
          <View style={styles.NomeView}>
            <Text style={styles.Nome}>Btc Cash</Text>
            <Image style={styles.Icone} source={icone} />
          </View>
          <View style={styles.InfoView}>
            <Text style={styles.Porcentagem}>+12%</Text>
            <Text style={styles.Valor}>R$6000</Text>
          </View>
        </View>

        <View style={styles.MoedasView}>
          <View style={styles.NomeView}>
            <Text style={styles.Nome}>Ethereum</Text>
            <Image style={styles.Icone} source={icone} />
          </View>
          <View style={styles.InfoView}>
            <Text style={styles.Porcentagem}>+15%</Text>
            <Text style={styles.Valor}>R$1800</Text>
          </View>
        </View>

      </ViewScroll>
    );
  }
}

const styles = StyleSheet.create({
    MainView: {
      flex: 1,
      backgroundColor: 'white'
    },
    MoedasView: {
      flexDirection: 'row',
      marginHorizontal: 5,
      marginVertical: 2.5,
      height: 80,
      backgroundColor: 'orange'
    },
    NomeView: {
      width: 80,
    },
    InfoView: {
      flexDirection: 'row'
    },
    Nome: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center'
    },
    Porcentagem: {
      fontSize: 12,
      color: 'green'
    },
    Valor: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white'
    },
    Icone: {
      width: 50,
      height: 50
    }

});
