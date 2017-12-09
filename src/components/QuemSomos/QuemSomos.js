import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  BackHandler,
  TouchableOpacity,
  Linking,
  ViewPagerAndroid
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Cabecalho from '../Cabecalho/Cabecalho';
import Rodape from '../Rodape/rodape';

const alan = require('./membros/alan.png');
const flavio = require('./membros/flavio.jpg');
const terra = require('./membros/terra.jpg');
const vitor = require('./membros/vitor.jpg');
const cereja = require('./membros/cereja.jpg');
const gabriel = require('./membros/gabriel.jpg');

const www = require('./icones/www.png');
const twitter = require('./icones/twit.png');
const facebook = require('./icones/face.png');
const email = require('./icones/mail.png');

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
      <Cabecalho descricao="Quem Somos" corFundo={corPrimaria} />
        <View style={styles.SobreView}>
          <Text style={styles.TextAbout}>
          A CryptoCloudBR é uma StartUp que visa resolver problemas e atender demanda de
          investidores brasileiros no mercado de mineração,
          compra, venda e troca de moedas e ativos digitais,
          não se limitando somente a venda de Bitcoins, mas também de Ethereum, IOTA,
          Dash, ZCash, entre outras.
          A empresa busca desenvolver soluções dentre as quais se destacam
          a mineração em nuvem e os aplicativos para venda e troca, tanto de moedas,
          quanto de produtos por moedas. Também pretende abrir a primeira exchange
          P2P do país, facilitando assim, a troca, compra e venda de moedas diretamente
          pelos usuários, sem intermédio bancário.
          </Text>
        </View>

        <View style={styles.IconesView}>
        <TouchableOpacity
        onPress={() => Linking.openURL('http://cryptocloudbrasil.com.br')}
        >
          <Image
          style={styles.Icones} source={www}
          />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => Linking.openURL('https://twitter.com/CryptoCloudBR')}
        >
        <Image style={styles.Icones} source={twitter} />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => Linking.openURL('https://www.facebook.com/Cryptocloudbrasil/')}
      >
        <Image style={styles.Icones} source={facebook} />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => Linking.openURL('mailto:cryptocloudbrasil@gmail.com')}
      >
        <Image style={styles.Icones} source={email} />
      </TouchableOpacity>
    </View>

        <View style={styles.ImagesView}>
          <View style={styles.MembrosView}>
            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>
            Sociedade Formada por:
            </Text>

            <ViewPagerAndroid
            style={styles.PagerView}
            initialPage={0}
            >
              <View style={styles.pageStyle} key="0">
                  <View style={{ marginLeft: 5, justifyContent: 'space-between' }}>
                    <Text style={styles.NomePage}>Alan Lago</Text>
                    <Text style={styles.NomePage}>Flávio Lima</Text>
                    <Text style={styles.NomePage}>Gabriel Lehn</Text>
                    <Text style={styles.NomePage}>Jonatas Terra</Text>
                    <Text style={styles.NomePage}>Matheus Cereja</Text>
                    <Text style={styles.NomePage}>Vitor Abel</Text>
                    <Text style={{ marginTop: 40, alignSelf: 'center' }}>
                      Arraste para mais informações >>>
                    </Text>
                  </View>
              </View>

              <View style={styles.pageStyle} key="1">
                <View style={styles.SociosView}>
                  <Image source={alan} style={styles.Imagem} />
                  <View style={{ marginLeft: 5 }}>
                    <Text style={styles.Nome}>Alan Lago</Text>
                    <Text style={styles.Descricao}>Infraestura de Mineração</Text>
                  </View>
                </View>
                <Text style={styles.NomeProximo}>Flávio Lima >>></Text>
              </View>

              <View style={styles.pageStyle} key="2">
                <View style={styles.SociosView}>
                  <Image source={flavio} style={styles.Imagem} />
                  <View style={{ marginLeft: 5 }}>
                    <Text style={styles.Nome}>Flávio Lima</Text>
                    <Text style={styles.Descricao}>Desenvolvedor de Aplicações</Text>
                  </View>
                </View>
                <Text style={styles.NomeProximo}>Gabriel Lehn >>></Text>
              </View>

              <View style={styles.pageStyle} key="3">
                <View style={styles.SociosView}>
                  <Image source={gabriel} style={styles.Imagem} />
                  <View style={{ marginLeft: 5 }}>
                    <Text style={styles.Nome}>Gabriel Lehn</Text>
                    <Text style={styles.Descricao}>Mídias Sociais</Text>
                  </View>
                </View>
                <Text style={styles.NomeProximo}>Jonatas Terra >>></Text>
              </View>

              <View style={styles.pageStyle} key="4">
                <View style={styles.SociosView}>
                  <Image source={terra} style={styles.Imagem} />
                  <View style={{ marginLeft: 5 }}>
                    <Text style={styles.Nome}>Jonatas Terra</Text>
                    <Text style={styles.Descricao}>Administração e Contabilidade</Text>
                  </View>
                </View>
                <Text style={styles.NomeProximo}>Matheus Cereja >>></Text>
              </View>

              <View style={styles.pageStyle} key="5">
                <View style={styles.SociosView}>
                  <Image source={cereja} style={styles.Imagem} />
                  <View style={{ marginLeft: 5 }}>
                    <Text style={styles.Nome}>Matheus Cereja</Text>
                    <Text style={styles.Descricao}>Marketing e Vendas</Text>
                  </View>
                </View>
                <Text style={styles.NomeProximo}>Vitor Abel >>></Text>
              </View>

              <View style={styles.pageStyle} key="6">
                <View style={styles.SociosView}>
                  <Image source={vitor} style={styles.Imagem} />
                  <View style={{ marginLeft: 5 }}>
                    <Text style={styles.Nome}>Vitor Abel</Text>
                    <Text style={styles.Descricao}>Adminstração e Finanças</Text>
                  </View>
                </View>
              </View>

            </ViewPagerAndroid>

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
      borderWidth: 0.85,
      borderColor: 'orange',
      paddingBottom: 3
    },
    IconesView: {
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.85,
      borderColor: 'orange',
//      marginVertical: 2
    },
    MembrosView: {
      flex: 3,
      borderWidth: 0.85,
      borderColor: 'orange',
    },
    PagerView: {
      flex: 1,
      backgroundColor: 'white'
    },
    pageStyle: {
      //alignItems: 'center',
      padding: 10,
    },
    SociosView: {
      flexDirection: 'row',
      //alignItems: 'center',
      //margin: 5,
    },
    ImagesView: {
      flex: 8,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    TextAbout: {
      fontSize: 14,
      textAlign: 'center'

      },
    NomePage: {
      fontSize: 16,
      marginVertical: 5,
      fontWeight: 'bold'
    },
    Nome: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    Descricao: {
      fontSize: 14
    },
    NomeProximo: {
      marginTop: 80,
      alignSelf: 'center'
  },
    Imagem: {
      width: 150,
      height: 150
    },
    Icones: {
      width: 40,
      height: 40,
      marginHorizontal: 10
    },

  });
