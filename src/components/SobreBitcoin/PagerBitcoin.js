import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ViewPagerAndroid
} from 'react-native';

export default class PagerBitcoin extends Component <{}> {
  render() {
    return (
      <ViewPagerAndroid
      style={styles.PagerView}
      initialPage={0}
      >
      <View style={styles.pageStyle} key="1">
        <Text style={styles.Titulo}>O que é Bitcoin?</Text>
        <View style={{ flex: 7 }}>
          <Text style={styles.Texto}>Texto</Text>
        </View>
        <Text style={styles.Texto}>Arraste para a próxima página</Text>
      </View>
      <View style={styles.pageStyle} key="2">
        <Text style={styles.Titulo}>Quais Problemas ela Resolve?</Text>
        <View style={{ flex: 7 }}>
          <Text style={styles.Texto}>Texto</Text>
        </View>
        <Text style={styles.Texto}>Arraste para a próxima página</Text>
      </View>
      <View style={styles.pageStyle} key="3">
        <Text style={styles.Titulo}>O que é a Blockchain?</Text>
        <View style={{ flex: 7 }}>
          <Text style={styles.Texto}>Texto</Text>
        </View>
        <Text style={styles.Texto}>Arraste para a próxima página</Text>
      </View>
      <View style={styles.pageStyle} key="4">
        <Text style={styles.Titulo}>Por que investir em Bitcoins??</Text>
        <View style={{ flex: 7 }}>
          <Text style={styles.Texto}>Texto</Text>
        </View>
        <Text style={styles.Texto}>Arraste para a próxima página</Text>
      </View>
      <View style={styles.pageStyle} key="5">
        <Text style={styles.Titulo}>Bitcoin é uma Bolha?</Text>
        <View style={{ flex: 7 }}>
          <Text style={styles.Texto}>Texto</Text>
        </View>
        <Text style={styles.Texto}>Arraste para a próxima página</Text>
      </View>
      <View style={styles.pageStyle} key="6">
        <Text style={styles.Titulo}>Quanto a CryptoCloudBrasil</Text>
        <View style={{ flex: 7 }}>
          <Text style={styles.Texto}>Texto</Text>
        </View>
        <Text style={styles.Texto}>Arraste para a próxima página</Text>
      </View>
      <View style={styles.pageStyle} key="7">
        <Text style={styles.Titulo}>Quais as Vantagens de Trabalhar Conosco??</Text>
        <View style={{ flex: 7 }}>
          <Text style={styles.Texto}>Texto</Text>
        </View>
      </View>
    </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
    MainView: {
      flex: 1,
      backgroundColor: 'white',
    },
    PagerView: {
      flex: 8,
      backgroundColor: 'white'
    },
    pageStyle: {
      alignItems: 'center',
      padding: 20,
    },
    Titulo: {
      fontSize: 16,
      color: 'orange',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    Texto: {
      fontSize: 14,
      color: 'darkgray',
      textAlign: 'center'
    }
  });
