import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

const seta = require('./seta.png');

export default class Cabecalho extends Component<{}> {
  render() {
    const backColor = this.props.corFundo;
    return (
      <TouchableOpacity
        onPress={() => Actions.pop()}
        style={{
        flexDirection: 'row',
        backgroundColor: backColor,
        alignItems: 'center',
        height: 35
      }}
      >
        <StatusBar backgroundColor={backColor} />
        <Image
        source={seta}
        style={{ width: 28, height: 28, marginRight: 80, marginLeft: 5 }}

        />
        <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          height: 35,
          //backgroundColor: 'orange',
        }}
        >{this.props.descricao}
        </Text>
      </TouchableOpacity>
    );
  }
}
