import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import MainScreen from './src/components/MainScreen/MainScreen';
import SobreBitcoin from './src/components/SobreBitcoin/SobreBitcoin';
import Servicos from './src/components/Servicos/Servicos';
import QuemSomos from './src/components/QuemSomos/QuemSomos';
import Cotacoes from './src/components/Cotacoes/Cotacoes';

class CryptoCloudBR extends Component<{}> {
  render() {
      return (
        <Router >
          <Stack key="root">
            <Scene
            key='main' component={MainScreen} title="CryptoCloudBrasil"
            titleStyle={{ alignSelf: 'center', color: 'white' }}
            headerStyle={{ backgroundColor: 'orange', height: 35 }}
            hideNavBar
            />
            <Scene
            key='sobrebitcoin' component={SobreBitcoin}
            titleStyle={{ paddingLeft: 45, color: 'orange' }}
            headerStyle={{ backgroundColor: 'white', height: 35 }} hideNavBar
            />
            <Scene
            key='servicos' component={Servicos} title="Nossos Serviços"
            titleStyle={{ paddingLeft: 45, color: 'orange' }}
            headerStyle={{ backgroundColor: 'white', height: 35 }} hideNavBar
            />
            <Scene
            key='cotacoes' component={Cotacoes}
            titleStyle={{ marginHorizontal: 95, color: 'white' }}
            headerStyle={{ backgroundColor: 'white', height: 35 }} hideNavBar
            />
            <Scene
            key='quemsomos' component={QuemSomos} title="Quem Somos"
            titleStyle={{ paddingLeft: 58, color: 'orange' }}
            headerStyle={{ backgroundColor: 'white', height: 35 }} hideNavBar

            />
          </Stack>
        </Router>
      );
  }
}

AppRegistry.registerComponent('CryptoCloudBR', () => CryptoCloudBR);
