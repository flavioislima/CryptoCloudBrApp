import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  BackHandler
} from 'react-native';
import { Actions } from 'react-native-router-flux';
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
    return (
      <View style={styles.MainView}>
        <View style={styles.AboutView}>
          <Text style={styles.TextAbout}>
          Corretora, Controladora de Fundos e Mineradora de CryptoMoedas.
          </Text>
        </View>


          <View style={styles.ImagesView}>
            <View style={{ flex: 3 }}>
              <View style={styles.TitleView}>
                <Image source={flavio} style={styles.Imagem} />
                <View style={{ marginLeft: 5 }}>
                  <Text style={styles.Nome}>Flávio Lima</Text>
                  <Text style={styles.Descricao}>Desenvolvedor e Trading</Text>
                </View>
              </View>

            <View style={styles.TitleView}>
              <Image source={alan} style={styles.Imagem} />
              <View style={{ marginLeft: 5 }}>
                <Text style={styles.Nome}>Alan Lago</Text>
                <Text style={styles.Descricao}>Gerente de Infraestura</Text>
              </View>
            </View>

            <View style={styles.TitleView}>
              <Image source={vitor} style={styles.Imagem} />
              <View style={{ marginLeft: 5 }}>
                <Text style={styles.Nome}>Vitor Abel</Text>
                <Text style={styles.Descricao}>Adminstração e Finanças</Text>
              </View>
            </View>

            <View style={styles.TitleView}>
              <Image source={terra} style={styles.Imagem} />
              <View style={{ marginLeft: 5 }}>
                <Text style={styles.Nome}>Jonatas Terra</Text>
                <Text style={styles.Descricao}>Administração e Contabilidade</Text>
              </View>
            </View>

            <View style={styles.TitleView}>
              <Image source={cereja} style={styles.Imagem} />
              <View style={{ marginLeft: 5 }}>
                <Text style={styles.Nome}>Matheus Cereja</Text>
                <Text style={styles.Descricao}>Marketing e Vendas</Text>
              </View>
            </View>

          </View>
        </View>

        <Rodape />

      </View>
    );
  }
}

const styles = StyleSheet.create({
    MainView: {
      flex: 1,
      backgroundColor: 'white'
    },
    AboutView: {
      flex: 1,
      marginLeft: 5,
    },
    TitleView: {
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
    BottomView: {
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange',
      borderWidth: 0.25,
      borderColor: 'gray'
    },
    TextTitle: {
      fontSize: 16,
      color: 'orange',
      fontWeight: 'bold',
    },
    TextAbout: {
      fontSize: 14,

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
