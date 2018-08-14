import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import List from './src/components/List';
import { createStackNavigator } from 'react-navigation';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      krappa: 'krappa123'
    }
  }
//<Text onPress={() => this.props.navigation.navigate('Question')} style={textStyle}>{this.state.krappa}</Text>
  render() {
    let { appViewStyle, scrollViewStyle, textStyle } = styles;
    return (
      <View style={appViewStyle}>
        <ScrollView style={scrollViewStyle}>
            <List/>
        </ScrollView>
      </View>
    );
  }
}

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blah: 'blah'
    }
  }

  render() {
    return(
      <Text>{this.state.blah}</Text>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: Home,
    Question: Question
  },
  {
    initialRouteName: 'Home',
  }
)

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


export default class App extends React.Component {
  render() {
    return(
      <RootStack/>
    )
  }
}