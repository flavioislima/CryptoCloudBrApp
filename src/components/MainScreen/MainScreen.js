import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  StatusBar,
  BackHandler
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Rodape from '../Rodape/rodape';

const logo = require('./logo.png');
const bitcoin = require('../SobreBitcoin/bitcoin.png');
const cotacoes = require('../Cotacoes/cotacoes.png');
const services = require('../Servicos/servicos.png');
const about = require('../QuemSomos/quemsomos.png');


const exit = () => BackHandler.exitApp();
BackHandler.addEventListener('hardwareBackPress', () => {
   exit();
   return false;
});

export default class MainScreen extends Component<{}> {
  render() {
    const corPrimaria = 'orange';
    return (
        <View style={styles.MainView}>
          <StatusBar backgroundColor={corPrimaria} />
          <View style={styles.LogoView}>
            <Image source={logo} style={styles.LogoIcon} />
          </View>

        <View style={styles.AllIcons} >
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
            <TouchableOpacity onPress={() => Actions.sobrebitcoin()}>
              <Image source={bitcoin} style={styles.Icons} />
              <Text style={styles.TextIcons}>Sobre Bitcoin</Text>
            </TouchableOpacity>
              <TouchableOpacity onPress={() => Actions.quemsomos()}>
                <Image source={about} style={styles.Icons} />
                <Text style={styles.TextIcons}>Quem Somos</Text>
              </TouchableOpacity>
            </View>
        </View>

        <TouchableOpacity
        style={{ width: 70, alignSelf: 'center', height: 35, marginBottom: 15 }} 
        onPress={() => exit()}
        >
          <Text style={styles.Sair}>Sair</Text>
        </TouchableOpacity>

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
    LogoView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    AllIcons: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center'
    },
    IconsView: {
    //  flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    LogoIcon: {
      width: 300,
      height: 100,
      //marginBottom: 5,
    },
    Icons: {
      width: 110,
      height: 110,
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 5,
    },
    TextIcons: {
      marginBottom: 25,
      fontSize: 20,
      color: '#3a4347',
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    Sair: {
      marginBottom: 20,
      fontSize: 25,
      color: '#3a4347',
      fontWeight: 'bold',
      alignSelf: 'center',
      textAlign: 'center',
      //backgroundColor: 'orange',
      // width: 50,
      // height: 35
    },
  });
