import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import text from '../data/readme';
import FormattedList from './FormattedList'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'readme': text
        }
    }

    render() {
        return(
            <View style={styles.listStyle}>
                <FormattedList>{this.state.readme}</FormattedList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listStyle: {
        borderWidth: 2,
        borderColor: '#222',
        borderRadius: 2,
        shadowColor: '#222',
        shadowOffset: {height: 2, width: 1},
        shadowOpacity: 0.2,
        padding: 3,
        margin: 10,
        alignSelf: 'center',
        width: '80%'
    }
})

export default List;

//TODO: need to strip markdown from readme file in order to use it properly
 
//import Markdown from 'react-native-simple-markdown'
//import { Font } from "expo";
//import axios from 'axios';
//const Buffer = require('buffer/').Buffer;

//This goes in the List class
/*
handleResponse(res) {
    this.setState({
        'readme': Buffer.from(res.data.content, "base64").toString('utf8')
    })
}

async componentWillMount() {
    //Fetch readme from github
    axios.get('https://api.github.com/repos/Michael23B/Exercises-Algorithms-and-Data-Structures-in-C-Sharp/readme')
        .then(res => this.handleResponse(res))
        .catch(console.error)
    
    //Load fonts for Markdown
    await Font.loadAsync({
        Courier: require("../data/Courier.ttf")
    });

}
*/