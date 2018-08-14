import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import List from './src/components/List';
import { createStackNavigator } from 'react-navigation';
import Question from './src/components/Question'
import Solution from './src/components/Solution'
import { YellowBox } from 'react-native';
import { Root } from "native-base";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home'
  }

  render() {
    let {  scrollViewStyle } = styles;
    let { navigation } = this.props;

    return (
        <ScrollView style={scrollViewStyle}>
            <List navigation={navigation}/>
        </ScrollView>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: Home,
    Question: Question,
    Solution: Solution
  },
  {
    initialRouteName: 'Home',
  }
)

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1
  },
  textStyle: {
    fontSize: 20
  }
});


export default class App extends React.Component {
  render() {
    return(
      <Root>
        <RootStack/>
      </Root>
    )
  }
}

//Syntax highlighter seems to cause some warnings, just disabling them for now
YellowBox.ignoreWarnings(['Warning: Failed prop type']);