import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Lista extends Component<{}> {
  render() {
    return (
      <View style={styles.MainView}>
        <View style={styles.ServicosView}>
          <View style={styles.ItemView}>
            <Text style={styles.Titulo}>Investimentos em CriptoMoedas</Text>
            <Text style={styles.Descricao}>Temos diversos planos de Investimento
            que cabem no seu bolso e com retorno de até 50% ao ano.
            </Text>
            <Text style={styles.button}>Clique Aqui para Conhecê-los</Text>
          </View>
          <View style={styles.ItemView}>
            <Text style={styles.Titulo}>Mineração de CriptoMoedas em Nuvem</Text>
            <Text style={styles.Descricao}>Para você que deseja Minerar Moedas como Bitcoin,
            Ethereum, Monero ou Dash mas não deseja investir num Equipamento específico
            bem como toda a configuração e manutenção envolvida.
            Alugamos o poder de mineração de nossas mineradoras e não cobramos taxa de manutenção
            alguma e você poderá acompanhar seus ganhos diariamente pelo App.
            </Text>
            <Text style={styles.button}>Conheça nossos Planos de Mineração</Text>
          </View>

          <View style={styles.ItemView}>
            <Text style={styles.Titulo}>Compra e Venda de Moedas</Text>
            <Text style={styles.Descricao}>A CryptoCloudBrasil também trabalha como
            corretora de CriptoMoedas, na verdade, nos destacamos de nossos concorrentes
            por oferecer um portifólio mais difersificado contendo também Dash, Monero,
            Zcash, Ripple, entre outras, tudo isso disponível em nosso App.
            </Text>
            <Text style={styles.button} >App de Compra e Venda de Moedas</Text>
          </View>

          <View disabled style={styles.ItemView}>
            <Text style={styles.Titulo}>Compra e Venda de Produtos com Moedas</Text>
            <Text disabled style={styles.Descricao}>
            A CryptoCloudBrasil desenvolveu o primeiro
            app de compra e venda de produtos usando tanto Dinheiro quanto CryptoMoedas.
            Confira agora mesmo essa novidade!
            </Text>
            <Text style={styles.button}>Baixar nosso App de Negociações</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    MainView: {
      flex: 1,
      backgroundColor: 'white'
    },
    ServicosView: {
      flex: 1,
      justifyContent: 'center'
    },
    ItemView: {
      marginHorizontal: 5,
      borderBottomWidth: 0.25,
      borderBottomColor: 'orange',
      marginBottom: 2.5
    },
    Titulo: {
      fontSize: 16,
      color: 'black',
      fontWeight: 'bold',
      backgroundColor: 'lightgray',
      textAlign: 'center'
    },
    Descricao: {
      fontSize: 13,
      textAlign: 'justify'
    },
    button: {
      //backgroundColor: 'orange',
      color: 'blue',
      textAlign: 'center',
      width: 280,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: 5,
      marginBottom: 5,
      textDecorationLine: 'underline'
    },
  });
