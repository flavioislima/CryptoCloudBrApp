import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import StackNavigator from 'react-navigation';

export default class Bar extends Component <{}> {
  render() {
    const navigation = this.props.navigation;
    if (this.props.voltar === true) {
      return (
        <View style={styles.Bar}>
          <Text style={styles.TopText} onPress={() => navigation.goBack()}>
          Voltar</Text>
        </View>
      );
    }
    return (
      <View style={styles.Bar}>
        <Text style={styles.TopText}>CryptoCloud Brasil</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    Bar: {
      flex: 1,
      backgroundColor: 'white'
    },
    TopText: {
      fontSize: 18,
      height: 40,
      fontWeight: 'bold',
      backgroundColor: 'lightgray',
      textAlign: 'center',
      paddingTop: 10
      },
  });
