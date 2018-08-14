import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import List from './src/components/List';
import { createStackNavigator } from 'react-navigation';
import Question from './src/components/Question.js'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      krappa: 'krappa123'
    }
  }

  render() {
    let { appViewStyle, scrollViewStyle, textStyle } = styles;
    let { navigation } = this.props;

    return (
      <View style={appViewStyle}>
        <ScrollView style={scrollViewStyle}>
            <Text onPress={() => this.props.navigation.navigate('Question')} style={textStyle}>{this.state.krappa}</Text>
            <List navigation={navigation}/>
        </ScrollView>
      </View>
    );
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