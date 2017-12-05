import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  BackHandler
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Cabecalho from '../Cabecalho/Cabecalho';
import Rodape from '../Rodape/rodape';

const flavio = require('./membros/flavio.jpg');
const alan = require('./membros/alan.jpg');
const terra = require('./membros/terra.jpg');
const vitor = require('./membros/vitor.jpg');
const cereja = require('./membros/cereja.jpg');

BackHandler.addEventListener('hardwareBackPress', () => {
 if (Actions.currentScene !== Actions.MainScreen) {
   Actions.pop();
   return true;
 }
 return false;
});

export default class QuemSomos extends Component<{}> {
  render() {
    const corPrimaria = '#837A7F';
    return (
      <View style={styles.MainView}>
        <View style={styles.AboutView}>
          <Cabecalho descricao="Quem Somos" corFundo={corPrimaria} />
          <Text style={styles.TextAbout}>
          A CryptoCloudBR é uma StartUp que visa resolver problemas e atender demanda de
          investidores brasileiros no mercado de mineração,
          compra, venda e troca de moedas e ativos digitais,
          não se limitando somente a venda de bitcoins.
          Ex.: Bitcoin, Ethereum, IOTA, Dash, ZCash, etc.
          A empresa busca desenvolver soluções dentre as quais se destacam
          a mineração e nuvem e os aplicativos para venda e troca, tanto de moedas
          quanto de produtos por moedas. Também pretende abrir a primeira exchange
          P2P do país, facilitando assim, a troca, compra e venda de moedas diretamente
          pelos usuários, sem intermédio bancário.
          </Text>
        </View>

        <View style={styles.ImagesView}>
          <View style={{ flex: 3 }}>
            <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>
            Membros
            </Text>
              <View style={styles.SociosView}>
                <Image source={flavio} style={styles.Imagem} />
                <View style={{ marginLeft: 5 }}>
                  <Text style={styles.Nome}>Flávio Lima</Text>
                  <Text style={styles.Descricao}>Desenvolvedor e Trading</Text>
                </View>
              </View>

            <View style={styles.SociosView}>
              <Image source={alan} style={styles.Imagem} />
              <View style={{ marginLeft: 5 }}>
                <Text style={styles.Nome}>Alan Lago</Text>
                <Text style={styles.Descricao}>Gerente de Infraestura</Text>
              </View>
            </View>

            <View style={styles.SociosView}>
              <Image source={vitor} style={styles.Imagem} />
              <View style={{ marginLeft: 5 }}>
                <Text style={styles.Nome}>Vitor Abel</Text>
                <Text style={styles.Descricao}>Adminstração e Finanças</Text>
              </View>
            </View>

            <View style={styles.SociosView}>
              <Image source={terra} style={styles.Imagem} />
              <View style={{ marginLeft: 5 }}>
                <Text style={styles.Nome}>Jonatas Terra</Text>
                <Text style={styles.Descricao}>Administração e Contabilidade</Text>
              </View>
            </View>

            <View style={styles.SociosView}>
              <Image source={cereja} style={styles.Imagem} />
              <View style={{ marginLeft: 5 }}>
                <Text style={styles.Nome}>Matheus Cereja</Text>
                <Text style={styles.Descricao}>Marketing e Vendas</Text>
              </View>
            </View>

          </View>
        </View>

        <Rodape corFundo={corPrimaria} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
    MainView: {
      flex: 1,
      backgroundColor: 'white'
    },
    SobreView: {
      flex: 1,
      marginLeft: 5,
    },
    SociosView: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 5,
    },
    ImagesView: {
      flex: 8,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    TextAbout: {
      fontSize: 13,
      textAlign: 'center'

      },
    Nome: {
      fontSize: 14,
      fontWeight: 'bold'
    },
    Descricao: {
      fontSize: 12
    },
    BottomText: {
      fontSize: 12,
      textAlign: 'center',
      color: 'white'
    },
    Imagem: {
      width: 50,
      height: 50
    },

  });
