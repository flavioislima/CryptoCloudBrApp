import React, { Component } from 'react';
//import 'es6-symbol';
import { AppRegistry } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import MainScreen from './src/components/MainScreen';
import Contatos from './src/components/Contatos/Contatos';
import Servicos from './src/components/Servicos/Servicos';
import QuemSomos from './src/components/QuemSomos/QuemSomos';
import Cotacoes from './src/components/Cotacoes/Cotacoes';

class Home extends Component<{}> {
  render() {
      return (
        <Router>
          <Stack key="root">
            <Scene
            key='main' component={MainScreen} title="CryptoCloudBrasil"
            titleStyle={{ alignSelf: 'center' }}
            />
            <Scene
            key='contato' component={Contatos}
            title="Nossos Contatos" titleStyle={{ paddingLeft: 45 }}
            />
            <Scene
            key='servicos' component={Servicos} title="Nossos Serviços"
            titleStyle={{ paddingLeft: 45 }}
            />
            <Scene
            key='cotacoes' component={Cotacoes} title="Cotações"
            titleStyle={{ paddingLeft: 66 }}
            />
            <Scene
            key='quemsomos' component={QuemSomos} title="Quem Somos"
            titleStyle={{ paddingLeft: 58 }}
            />
          </Stack>
        </Router>
      );
  }
}

AppRegistry.registerComponent('CCBR2', () => Home);
