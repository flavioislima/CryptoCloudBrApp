import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import Valores from './Valores';
import Rodape from '../Rodape/rodape';

export default class Cotacoes extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { listaMoedas: [] };
  }

  componentWillMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=15')
    .then(response => { this.setState({ listaMoedas: response.data }); })
    .catch(() => { console.log('Erro ao recuperar os dados'); });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 8 }}>
          <Text style={{ textAlign: 'center', fontSize: 20 }}>Cotações das Principais Moedas</Text>
          { this.state.listaItens.map(item => (<Valores key={item.symbol} item={item} />))}
        </ScrollView>
        <Rodape />
      </View>
    );
  }
}
