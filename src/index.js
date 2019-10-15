import React, {Component} from 'react';
import createNavigator from './routes';
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@tois');
    console.tron.log(username);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      userChecked: true,
      userLogged: !!username,
    });
  }

  render() {
    const {userChecked, userLogged} = this.state;
    // eslint-disable-next-line curly
    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);
    return <Routes />;
  }
}
