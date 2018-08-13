import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import List from './src/components/List';
import Header from './src/components/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      krappa: 'krappa123'
    }
  }

  render() {
    let { appViewStyle, scrollViewStyle, textStyle } = styles;
    return (
      <View style={appViewStyle}>
        <Header>This is the header</Header>
        <ScrollView style={scrollViewStyle}>
            <List/>
            <Text style={textStyle}>{this.state.krappa}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appViewStyle: {
    flex: 1
  },
  scrollViewStyle: {
    flex: 1,
    zIndex: 1
  },
  textStyle: {
    fontSize: 20
  }
});
