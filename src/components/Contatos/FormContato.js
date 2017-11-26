import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native';

export default class FormContato extends Component<{}> {
  constructor(props) {
  super(props);
  this.state = { nome: 'Digite seu Nome...',
    email: 'Digite seu E-mail...',
    telefone: 'Digite seu Telefone...',
    motivo: 'Escreva o Motivo do contato...'
    };
}
  render() {
    return (
      <View style={styles.FormView}>
        <Text>Formulário de contato:</Text>
        <View>
          <Text>Nome: </Text>
          <TextInput
          style={{ color: 'lightgray', width: 320 }}
          onChangeText={(nome) => this.setState({ nome })} value={this.state.nome}
          />
          <Text>E-mail: </Text>
          <TextInput
          style={{ color: 'lightgray', width: 320 }}
          onChangeText={(email) => this.setState({ email })} value={this.state.email}
          keyboardType='email-address'
          />
          <Text>Telefone: </Text>
          <TextInput
          style={{ color: 'lightgray', width: 320 }}
          onChangeText={(telefone) => this.setState({ telefone })} value={this.state.telefone}
          keyboardType='phone-pad'
          />
          <Text>Motivo do Contato: </Text>
          <TextInput
          style={{ color: 'lightgray', width: 320 }}
          onChangeText={(motivo) => this.setState({ motivo })}
          value={this.state.motivo}
          multiline
          />
        </View>
        <TouchableOpacity onPress={() => Alert.alert('Formulário Enviado!')} >
          <Text style={styles.button}>
          Enviar </Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
    FormView: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.25,
      borderColor: 'gray',
    },
    button: {
      backgroundColor: 'orange',
      textAlign: 'center',
      width: 100,
      borderWidth: 0.35,
      borderColor: 'white',
      fontWeight: 'bold',
      alignSelf: 'center',
      marginBottom: 5
    },
  });
