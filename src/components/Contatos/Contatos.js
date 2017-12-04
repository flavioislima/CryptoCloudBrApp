import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  BackHandler
} from 'react-native';
import { Actions } from 'react-native-router-flux';
//import FormContato from './FormContato';
import Rodape from '../Rodape/rodape';

BackHandler.addEventListener('hardwareBackPress', () => {
 if (Actions.currentScene !== Actions.MainScreen) {
   Actions.pop();
   return true;
 }
 return false;
});

export default class Contatos extends Component<{}> {
  render() {
    return (
      <View style={styles.MainView}>
          <View style={styles.ListaView}>
            <Text style={styles.Contatos}>Central de Atendimento: 0800 000 666</Text>
            <Text style={styles.Contatos}>E-mail: contato@CryptoCloudBrasil.com.br</Text>
            <Text style={styles.Contatos}>WebSite: CryptoCloudBrasil.com.br</Text>
            <Text />
            <Text>Clique Aqui para entrar em contato agora mesmo!</Text>
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
    TitleView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    ListaView: {
      flex: 7,
      // alignItems: 'center',
      // justifyContent: 'center'
    },
    BottomView: {
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#005196',
      borderWidth: 0.25,
      borderColor: 'gray'
    },
    TextTitle: {
      fontSize: 21,
      color: 'orange',
      fontWeight: 'bold'
    },
    BottomText: {
      fontSize: 12,
      color: 'white',
      textAlign: 'center',
    },
    Contatos: {
        fontSize: 16,
        fontWeight: 'bold'
    }

  });
