import React from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(["Can't call set"]);
import Routes from './src/routes';

export default class App extends React.Component {
  render() {
    return (
      <Routes/>
    );
  }
}