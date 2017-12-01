import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import MainScreen from './src/components/MainScreen/MainScreen';
import Contatos from './src/components/Contatos/Contatos';
import Servicos from './src/components/Servicos/Servicos';
import QuemSomos from './src/components/QuemSomos/QuemSomos';
import Cotacoes from './src/components/Cotacoes/Cotacoes';

class CryptoCloudBR extends Component<{}> {
  render() {
      return (
        <Router>
          <Stack key="root">
            <Scene
            key='main' component={MainScreen} title="CryptoCloudBrasil"
            titleStyle={{ alignSelf: 'center', color: 'white' }}
            headerStyle={{ backgroundColor: 'orange' }}
            />
            <Scene
            key='contato' component={Contatos} title="Nossos Contatos"
            titleStyle={{ paddingLeft: 45, color: 'white' }}
            headerStyle={{ backgroundColor: '#005196' }}
            />
            <Scene
            key='servicos' component={Servicos} title="Nossos Serviços"
            titleStyle={{ paddingLeft: 45, color: 'white' }}
            headerStyle={{ backgroundColor: '#ffa500' }}
            onBackButton={MainScreen}
            />
            <Scene
            key='cotacoes' component={Cotacoes} title="Cotações"
            titleStyle={{ marginHorizontal: 10, color: 'white' }}
            headerStyle={{ backgroundColor: '#008f00' }}
            />
            <Scene
            key='quemsomos' component={QuemSomos} title="Quem Somos"
            titleStyle={{ paddingLeft: 58, color: 'white' }}
            headerStyle={{ backgroundColor: 'orange' }}
            />
          </Stack>
        </Router>
      );
  }
}

AppRegistry.registerComponent('CryptoCloudBR', () => CryptoCloudBR);
