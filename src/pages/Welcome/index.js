import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import styles from '../../../src/styles';
import api from '../../services/api';
import '../../config/ReactotronConfig';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';

export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    username: '',
    loading: false,
    error: false,
  };

  checkUsersExist = async username => {
    const user = await api.get(`/users/${username}`);
    return user;
  };
  saveUser = async username => {
    AsyncStorage.setItem('@tois', username);
  };

  signIn = async () => {
    const {username} = this.state;
    const {navigation} = this.props;
    this.setState({loading: true});

    try {
      await this.checkUsersExist(username);
      await this.saveUser(username);

      navigation.navigate('User');
    } catch (err) {
      console.tron.log('Usuario inexistente');
      this.setState({loading: false, error: true});
    }
  };

  render() {
    const {username, loading, error} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem Vindo</Text>
        <Text style={styles.text}>
          Para continuar, digite seu usuario do GitHub.
        </Text>
        {error && <Text style={styles.error}>Usuario inexistente</Text>}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            placeholder="Digite seu usuario"
            value={username}
            onChangeText={text => {
              this.setState({username: text});
            }}
          />
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Prosseguir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
