import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import FormContato from './FormContato';

const contato = require('../imgs/contact.png');

export default class Contatos extends Component<{}> {
  render() {
    return (
      <View style={styles.MainView}>
          <KeyboardAvoidingView style={styles.TitleView}>
            <Image source={contato} style={{ width: 100, height: 100 }} />
            <Text style={styles.TextTitle}>Nossos Contatos</Text>
          </KeyboardAvoidingView>
          <KeyboardAvoidingView style={styles.contatos}>
            <Text style={styles.Contatos}>Central de Atendimento: 0800 000 666</Text>
            <Text style={styles.Contatos}>E-mail: contato@CryptoCloudBrasil.com.br</Text>
            <Text style={styles.Contatos}>WebSite: CryptoCloudBrasil.com.br</Text>
            <Text />
          </KeyboardAvoidingView>
          <FormContato />
          <View style={styles.BottomView}>
            <Text style={styles.BottomText}>CryptoCloudBrasil -
            Todos os Direitos Reservados</Text>
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
    TitleView: {
      flex: 3,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    BottomView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
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
      textAlign: 'center',
    },


  });
