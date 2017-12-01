import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Rodape from '../Rodape/rodape';

const logo = require('./logo.png');
const contato = require('../Contatos/contato.png');
const cotacoes = require('../Cotacoes/cotacoes.png');
const services = require('../Servicos/servicos.png');
const about = require('../QuemSomos/quemsomos.png');


export default class MainScreen extends Component<{}> {
  render() {
    return (
        <View style={styles.MainView}>
          <View style={styles.LogoView}>
            <Image source={logo} style={styles.LogoIcon} />
          </View>

          <View style={styles.IconsView}>
            <TouchableOpacity onPress={() => Actions.servicos()}>
              <Image source={services} style={styles.Icons} />
              <Text style={styles.TextIcons}>Serviços</Text>
            </TouchableOpacity>
              <TouchableOpacity onPress={() => Actions.cotacoes()}>
                <Image source={cotacoes} style={styles.Icons} />
                <Text style={styles.TextIcons}>Cotações</Text>
              </TouchableOpacity>
            </View>

          <View style={styles.IconsView}>
          <TouchableOpacity onPress={() => Actions.contato()}>
            <Image source={contato} style={styles.Icons} />
            <Text style={styles.TextIcons}>Contato</Text>
          </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.quemsomos()}>
              <Image source={about} style={styles.Icons} />
              <Text style={styles.TextIcons}>Quem Somos</Text>
            </TouchableOpacity>
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
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange',
      borderWidth: 0.25,
      borderColor: 'gray'
    },
    LogoIcon: {
      width: 300,
      height: 100,
      //marginBottom: 5,
    },
    Icons: {
      width: 100,
      height: 100,
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 10,
    },
    TextIcons: {
      fontSize: 20,
      color: '#3a4347',
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    BottomText: {
      fontSize: 12,
      textAlign: 'center',
      color: 'white'
    },
  });
