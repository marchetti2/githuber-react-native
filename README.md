<h2>About</h2>

This project starts with the login screen where the user types his/her username on github and the application makes an API call. If the user exists, the next screen shows all the user's repositories and organizations, separated by tabbed browsing.

<p align="center">
 <a href="#screens">Screens</a> | <a href="#technologies">Technologies</a> | <a href="#started">Getting started</a> | <a href="#license">License</a>
</p>

<h2 id="screens">Screens</h2>

<p align="center">
  <img src="https://media.giphy.com/media/cGzQEokvcSKqhmZPED/giphy.gif">
</p>

<h2 id="technologies">Technologies</h2>

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

<h2 id="started">Getting started</h2>

<h4>Requirements</h4>

- [Git](https://git-scm.com) 
- [Node.js](https://nodejs.org/en/) 
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

> I recommend use Yarn

- [Cocoapods](https://cocoapods.org) (on macOS)

<h4>Clone the project and access the folder</h4>

```bash
$ git clone https://github.com/marchetti2/githuber-react-native.git && cd githuber-react-native
```
<h4>Install the dependencies</h4>

```bash
$ yarn
```
<h4>if you are using macOS:</h4>

```bash
$ cd ios
$ pod install 
$ cd ..
$ yarn ios --simulator="iPhone 11"  
##choose the simulator you are using. in this example is iphone 11.
```
<h4>if you are using android:</h4>

```bash
$ yarn android
```
<h4>Well done, project is started!</h4>

<h2 id="license">License</h2>

This is a [RocketSeat](https://rocketseat.com.br) GoStack course project(old journey).
