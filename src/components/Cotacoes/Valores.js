import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';

const icone = require('./BTC.png');

export default class Valores extends Component<{}> {
  render() {
    return (
      <ScrollView style={styles.MainView}>

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

      </ScrollView>
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
    Icone: {
      width: 40,
      height: 40,
      marginVertical: 2.5
    }

});
