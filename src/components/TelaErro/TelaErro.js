import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class TelaErro extends Component<{}> {
  render() {
    const backColor = this.props.corFundo;
    return (
      <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backColor,
        flex: 1 }}
      >
        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>
        Ocorreu um Erro, Verifique se está conectado a Internet
        :(
        </Text>
      </View>
    );
  }
}
