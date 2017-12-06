import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

export default class Lista extends Component<{}> {
  render() {
    return (
      <View style={styles.MainView}>
        <View style={styles.ServicosView}>
          <ScrollView style={styles.ItemView}>
            <Text style={styles.Titulo}>Investimentos em CriptoMoedas</Text>
            <Text style={styles.Descricao}>Temos diversos planos de Investimento
            que cabem no seu bolso e com retorno de até 50% ao ano. Você investe
            um valor fixo e nós fazemos ele render, aplicando moedas estabelecidas
            e com garantia de retorno. Tudo feito com muito cuidado e muito estudo.
            </Text>
            <Text style={styles.button}>Clique Aqui para Conhecê-los</Text>
          </ScrollView>
          <ScrollView style={styles.ItemView}>
            <Text style={styles.Titulo}>Mineração de CriptoMoedas em Nuvem</Text>
            <Text style={styles.Descricao}>Para você que deseja Minerar Moedas como Bitcoin,
            Ethereum, Monero ou Dash mas não deseja investir num Equipamento específico
            bem como toda a configuração e manutenção envolvida.
            Alugamos poder de mineração, sem taxas de manutenção
            e você acompanhará seus ganhos diariamente pelo nosso App.
            Mais informações em Breve.
            </Text>
          </ScrollView>

          <ScrollView style={styles.ItemView}>
            <Text style={styles.Titulo}>Compra e Venda de Moedas</Text>
            <Text style={styles.Descricao}>A CryptoCloudBrasil também trabalha como
            corretora de CriptoMoedas, na verdade, nos destacamos de nossos concorrentes
            por oferecer um portifólio mais difersificado contendo também Dash, Monero,
            Zcash, Ripple, entre outras, tudo isso estará disponível em nosso App.
            </Text>
          </ScrollView>

          <ScrollView style={styles.ItemView}>
            <Text style={styles.Titulo}>Compra e Venda de Produtos com Moedas</Text>
            <Text disabled style={styles.Descricao}>
            A CryptoCloudBrasil está desenvolvendo o primeiro
            app de compra e venda de produtos usando tanto Dinheiro quanto CryptoMoedas.
            Aguarde que teremos novidades em breve!
            </Text>
          </ScrollView>
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
      justifyContent: 'center',
      height: '95%'
    },
    ItemView: {
      marginHorizontal: 5,
      borderWidth: 1.35,
      borderColor: 'black',
      marginVertical: 2.5,
      flex: 1
          },
    Titulo: {
      fontSize: 16,
      color: 'black',
      fontWeight: 'bold',
      backgroundColor: '#adb18f',
      textAlign: 'center'
    },
    Descricao: {
      fontSize: 13,
      textAlign: 'center',
      paddingHorizontal: 5
    },
    button: {
      //backgroundColor: 'orange',
      color: 'blue',
      textAlign: 'center',
      width: 280,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginVertical: 5,
      textDecorationLine: 'underline'
    },
  });
