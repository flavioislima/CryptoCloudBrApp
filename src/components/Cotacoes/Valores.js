import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import numeral from 'numeral';

export default class Valores extends Component<{}> {
  render() {
    const symbol = this.props.item.symbol;
    const Nome = this.props.item.name;
    const Rank = this.props.item.rank;
    const BTC = this.props.item.price_btc;
    const BRL = this.props.item.price_brl;
    const USD = this.props.item.price_usd;
    const Reais = numeral(parseFloat(BRL)).format('0,0.00');
    const Dolar = numeral(parseFloat(USD)).format('0,0.00');
    const Porcentagem1h = this.props.item.percent_change_1h;
    const Porcentagem24h = this.props.item.percent_change_24h;
    const Porcentagem7d = this.props.item.percent_change_7d;

    const btc = require('./icones/btc.png');
    const bch = require('./icones/bch.png');
    const eth = require('./icones/eth.png');
    const etc = require('./icones/etc.png');
    const xrp = require('./icones/xrp.png');
    const ltc = require('./icones/ltc.png');
    const dash = require('./icones/dash.png');
    const iota = require('./icones/iota.png');
    const lsk = require('./icones/lsk.png');
    const xlm = require('./icones/xlm.png');
    const xmr = require('./icones/xmr.png');
    const bcc = require('./icones/bcc.png');
    const ada = require('./icones/ada.png');
    const btg = require('./icones/btg.png');
    const eos = require('./icones/eos.png');
    const qtum = require('./icones/qtum.png');
    const omg = require('./icones/omg.png');
    const neo = require('./icones/neo.png');
    const xem = require('./icones/xem.png');
    const zec = require('./icones/zec.png');
    const generico = require('./icones/generico.png');

    let Icone;

    switch (symbol) {
      case 'BTC':
        Icone = btc;
        break;
      case 'ETH':
        Icone = eth;
        break;
      case 'BCH':
        Icone = bch;
        break;
      case 'LTC':
        Icone = ltc;
        break;
      case 'XMR':
        Icone = xmr;
        break;
      case 'XLM':
        Icone = xlm;
        break;
      case 'NEO':
        Icone = neo;
        break;
      case 'DASH':
        Icone = dash;
        break;
      case 'ETC':
        Icone = etc;
        break;
      case 'BTG':
        Icone = btg;
        break;
      case 'LSK':
        Icone = lsk;
        break;
      case 'ADA':
        Icone = ada;
        break;
      case 'OMG':
        Icone = omg;
        break;
      case 'XEM':
        Icone = xem;
        break;
      case 'XRP':
        Icone = xrp;
        break;
      case 'MIOTA':
        Icone = iota;
        break;
      case 'EOS':
        Icone = eos;
        break;
      case 'ZEC':
        Icone = zec;
        break;
      case 'QTUM':
        Icone = qtum;
        break;
      case 'BCC':
        Icone = bcc;
        break;
      default:
        Icone = btc;
        break;
      }

const Porcent1h = () => {
  if (Porcentagem1h >= -0.01) {
   return (<Text style={styles.PorcentagemPos}>1h: {Porcentagem1h}%</Text>);
 } return (<Text style={styles.PorcentagemNeg}>1h: {Porcentagem1h}%</Text>);
};

const Porcent24h = () => {
  if (Porcentagem24h >= -0.01) {
   return (<Text style={styles.PorcentagemPos}>24h: {Porcentagem24h}%</Text>);
 } return (<Text style={styles.PorcentagemNeg}>24h: {Porcentagem24h}%</Text>);
};

const Porcent7d = () => {
  if (Porcentagem7d >= -0.01) {
   return (<Text style={styles.PorcentagemPos}>7d: {Porcentagem7d}%</Text>);
 } return (<Text style={styles.PorcentagemNeg}>7d: {Porcentagem7d}%</Text>);
};
    return (
      <View style={styles.MainView}>

        <View style={styles.MoedasView}>
          <View style={styles.NomeView}>
            <Text style={styles.Nome}>{Rank}° {Nome}</Text>
            <Image style={styles.Icone} source={Icone} />
          </View>
          <View style={styles.InfoView}>
            <View style={styles.PercentView}>
              <Porcent1h />
              <Porcent24h />
              <Porcent7d />
            </View>
            <View style={styles.ValorView}>
                <Text style={styles.Valor}>R$ {Reais}</Text>
                <Text style={styles.ValorBTC}>U$ {Dolar}</Text>
                <Text style={styles.ValorBTC}>{BTC} BTC</Text>
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
      //marginHorizontal: 5,
      //marginVertical: 1.5,
      height: 70,
      backgroundColor: 'white',
      borderWidth: 0.25,
      borderColor: 'gray'
    },
    NomeView: {
      width: 115,
      //borderWidth: 0.5,
      //borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
    },
    InfoView: {
      justifyContent: 'center',
      flexDirection: 'row'
    },
    PercentView: {
      //flexDirection: 'row',
      //alignItems: 'center',
      justifyContent: 'center',
      width: 88
    },
    ValorView: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      width: 150
    },
    Nome: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'orange',
      textAlign: 'center',
      marginVertical: 0.5,
      fontFamily: 'tahoma'
    },
    PorcentagemPos: {
      fontSize: 12,
      color: 'green',
      paddingLeft: 8

    },
    PorcentagemNeg: {
      fontSize: 12,
      color: 'red',
      paddingLeft: 8
    },
    Valor: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'orange',
      // marginRight: 10
    },
    ValorBTC: {
      fontSize: 13,
      color: 'gray',
      // paddingHorizontal: 10
    },
    Icone: {
      width: 30,
      height: 30,
      marginVertical: 2.5
    }

});


// load a locale
numeral.register('locale', 'pt-br', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'mil',
            million: 'milhões',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return 'º';
        },
        currency: {
symbol: 'R$'
    }
});
    numeral.locale('pt-br');
