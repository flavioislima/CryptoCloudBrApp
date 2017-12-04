import React, { Component } from 'react';
import { Text, View, ScrollView, RefreshControl, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Valores from './Valores';
import Rodape from '../Rodape/rodape';

BackHandler.addEventListener('hardwareBackPress', () => {
 if (Actions.currentScene !== Actions.MainScreen) {
   Actions.pop();
   return true;
 }
 return false;
});

export default class Cotacoes extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { listaMoedas: [], refreshing: false, };
  }


  componentWillMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?convert=BRL&limit=20')
    .then(response => { this.setState({ listaMoedas: response.data }); })
    .catch(() => { console.log('Erro ao recuperar os dados'); });
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    axios.get('https://api.coinmarketcap.com/v1/ticker/?convert=BRL&limit=20')
    .then(response => { this.setState({ listaMoedas: response.data, refreshing: false }); })
    .catch(() => { console.log('Erro ao recuperar os dados'); });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 8 }}
           refreshControl={
                            <RefreshControl
                              refreshing={this.state.refreshing}
                              onRefresh={this._onRefresh.bind(this)}
                            />
                            }
        >
          <Text style={{ textAlign: 'center', fontSize: 20 }}>TOP 20 Moedas</Text>
          { this.state.listaMoedas.map(item => (<Valores key={item.symbol} item={item} />))}
        </ScrollView>
        <Rodape />
      </View>
    );
  }
}
