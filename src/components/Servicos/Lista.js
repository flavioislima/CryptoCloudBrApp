import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

export default class Lista extends Component<{}> {
  render() {
    return (
      <View style={styles.MainView}>
        <View>
          <Text>Nossos Serviços</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    MainView: {
      flex: 1,
      backgroundColor: 'white'
    },
    AboutView: {
      flex: 1,
      marginLeft: 5,
    },
    TitleView: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 5,
    },
    ImagesView: {
      flex: 8,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    BottomView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderWidth: 0.25,
      borderColor: 'gray'
    },
    TextTitle: {
      fontSize: 16,
      color: 'orange',
      fontWeight: 'bold',
    },
    TextAbout: {
      fontSize: 14,

    },
  });
