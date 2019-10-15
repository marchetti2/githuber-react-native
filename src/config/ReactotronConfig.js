import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.configure() // controls connection & communication settings
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!
  console.tron = tron;

  tron.clear();
}
