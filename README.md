## Githuber

This project starts with the login screen where the user types his/her username on github and the application makes an API call. If the user exists, the next screen shows all the user's repositories and organizations, separated by tabbed browsing.

<p align="center">
  <img src="https://media.giphy.com/media/cGzQEokvcSKqhmZPED/giphy.gif">
</p>

##  Dependencies

- [react-native](https://reactnative.dev)
- [react-navigation](https://reactnavigation.org)
- [axios](https://github.com/axios/axios)
- [async-storage](https://github.com/react-native-async-storage/async-storage)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [prop-types](https://github.com/facebook/prop-types)
- [reactotron](https://github.com/infinitered/reactotron)
- [react-native-status-bar-height](https://github.com/ovr/react-native-status-bar-height)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)


## Getting started

### Requirements

- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

> I recommend use Yarn

- [Cocoapods](https://cocoapods.org) (on macOS)



**Clone the project and access the folder**

```bash
$ git clone https://github.com/marchetti2/GitHuber.git && cd GitHuber
```

**Install the dependencies**

```bash
$ yarn
```

** if you are using macOS: **

```bash
$ cd ios
$ pod install 
$ cd ..
$ yarn ios --simulator="iPhone 11"  
##choose the simulator you are using. in this example is iphone 11.
```

** if you are using android: **

```bash
$ cd ios
$ yarn android
```



** Well done, project is started!**

##  License

This is a [RocketSeat](https://rocketseat.com.br) GoStack course project(old journey).
