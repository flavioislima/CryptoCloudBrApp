import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

const icone = require('./BTC.png');

export default class Valores extends Component<{}> {
  render() {
    const Nome = this.props.item.name;
    const BTC = this.props.item.price_btc;
    const BRL = this.props.item.price_brl;
    const Reais = parseFloat(BRL).toFixed(2);
    const Porcentagem1h = this.props.item.percent_change_1h;
    const Porcentagem24h = this.props.item.percent_change_24h;
    const Porcentagem7d = this.props.item.percent_change_7d;

    return (
      <View style={styles.MainView}>

        <View style={styles.MoedasView}>
          <View style={styles.NomeView}>
            <Text style={styles.Nome}>{Nome}</Text>
            <Image style={styles.Icone} source={icone} />
          </View>
          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <View style={styles.InfoView}>
              <Text style={styles.PorcentagemPos}>{Porcentagem24h}</Text>
            </View>
            <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                <Text style={styles.Valor}>R$ {Reais}</Text>
                <Text style={styles.ValorBTC}>{BTC} btc</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    MainView: {
      //flex: 1,
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
      borderWidth: 0.5,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
    },
    InfoView: {
      //flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    Nome: {
      fontSize: 13,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginVertical: 2.5
    },
    PorcentagemPos: {
      fontSize: 12,
      color: 'yellow',
      marginRight: 100,
      marginLeft: 15,
    },
    PorcentagemNeg: {
      fontSize: 12,
      color: 'red',
      marginRight: 100,
      marginLeft: 15,
    },
    Valor: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      marginRight: 10
    },
    ValorBTC: {
      fontSize: 13,
      color: 'white',
      paddingHorizontal: 10
    },
    Icone: {
      width: 40,
      height: 40,
      marginVertical: 2.5
    }

});
