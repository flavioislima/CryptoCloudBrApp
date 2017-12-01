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
    return (
      <View style={styles.MainView}>

        <View style={styles.MoedasView}>
          <View style={styles.NomeView}>
            <Text style={styles.Nome}>{this.props.item.name}</Text>
            <Image style={styles.Icone} source={icone} />
          </View>
          <View style={{ justifyContent: 'center' }}>
            <View style={styles.InfoView}>
              <Text style={styles.Porcentagem}>{this.props.item.percent_change_24h}</Text>
              <Text style={styles.Valor}>$USD {this.props.item.price_usd}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.ValorBTC}>{this.props.item.price_btc}btc</Text>
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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    Nome: {
      fontSize: 13,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'left',
      marginVertical: 2.5
    },
    Porcentagem: {
      fontSize: 12,
      color: 'green',
      marginRight: 100,
      marginLeft: 15,
    },
    Valor: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white'
    },
    ValorBTC: {
      fontSize: 13,
      color: 'white',
    },
    Icone: {
      width: 40,
      height: 40,
      marginVertical: 2.5
    }

});
