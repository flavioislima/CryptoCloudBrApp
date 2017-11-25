import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('./logo.png');
const contato = require('../Contatos/contact.png');
const cotacoes = require('../Cotacoes/cotacoes.png');
const services = require('../Servicos/services.png');
const about = require('../QuemSomos/about.png');


export default class MainScreen extends Component<{}> {
  render() {
    return (
        <View style={styles.MainView}>
          <View style={styles.LogoView}>
            <Image source={logo} style={styles.LogoIcon} />
          </View>
          <View style={styles.IconsView}>
            <TouchableOpacity onPress={() => Actions.contato()}>
              <Image source={contato} style={styles.Icons} />
              <Text style={styles.TextIcons}>Contato</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.cotacoes()}>
              <Image source={cotacoes} style={styles.Icons} />
              <Text style={styles.TextIcons}>Cotações</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.IconsView}>
            <TouchableOpacity onPress={() => Actions.servicos()}>
              <Image source={services} style={styles.Icons} />
              <Text style={styles.TextIcons}>Serviços</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.quemsomos()}>
              <Image source={about} style={styles.Icons} />
              <Text style={styles.TextIcons}>Quem Somos</Text>
            </TouchableOpacity>
          </View>
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
    LogoView: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    IconsView: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    BottomView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderWidth: 0.25,
      borderColor: 'gray'
    },
    LogoIcon: {
      width: 280,
      height: 100,
      //marginBottom: 5,
    },
    Icons: {
      width: 100,
      height: 100,
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 10
    },
    TextIcons: {
      fontSize: 13,
      color: 'orange',
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    BottomText: {
      fontSize: 12,
      textAlign: 'center',
    },
  });
