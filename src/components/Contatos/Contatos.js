import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  BackHandler,
  Image,
  Linking,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Cabecalho from '../Cabecalho/Cabecalho';
import Rodape from '../Rodape/rodape';

BackHandler.addEventListener('hardwareBackPress', () => {
 if (Actions.currentScene !== Actions.MainScreen) {
   Actions.pop();
   return true;
 }
 return false;
});

const logo = require('./icones/logo.png');
const twitter = require('./icones/twitter.png');
const facebook = require('./icones/facebook.png');
const email = require('./icones/email.png');


export default class Contatos extends Component<{}> {
  render() {
    const corPrimaria = 'skyblue';
    return (
      <View style={styles.MainView}>
      <Cabecalho descricao="Redes Sociais" corFundo={corPrimaria} />
          <View style={styles.ListaView}>
              <TouchableOpacity
              style={styles.ContatoView}
              onPress={() => Linking.openURL('http://cryptocloudbrasil.com.br')}
              >
                <Image
                style={styles.Imagens} source={logo}
                />
                <Text style={styles.Contatos}>CryptoCloudBrasil.com.br</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.ContatoView}
              onPress={() => Linking.openURL('https://twitter.com/CryptoCloudBR')}
              >
              <Image style={styles.Imagens} source={twitter} />
              <Text style={styles.Contatos}>CryptoCloudBR</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.ContatoView}
            onPress={() => Linking.openURL('https://www.facebook.com/Cryptocloudbrasil/')}
            >
              <Image style={styles.Imagens} source={facebook} />
              <Text style={styles.Contatos}>Cryptocloudbrasil</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.ContatoView}
            onPress={() => Linking.openURL('mailto:cryptocloudbrasil@gmail.com')}
            >
              <Image style={styles.Imagens} source={email} />
              <Text style={styles.Contatos}>Contato@CryptoCloudBrasil.com.br</Text>
            </TouchableOpacity>
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
    ListaView: {
      flex: 7,
      marginVertical: 20,
      //justifyContent: 'center'
    },
    ContatoView: {
      flexDirection: 'row',
      marginHorizontal: 8,
      marginVertical: 8,
      paddingVertical: 8,
      paddingHorizontal: 6,
      alignItems: 'center',
      //justifyContent: 'center'
    },
    TextTitle: {
      fontSize: 21,
      color: 'orange',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 48,
      textDecorationLine: 'underline'
    },
    Imagens: {
      width: 65,
      height: 65
    },
    Contatos: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10
    }

  });
