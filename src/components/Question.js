import React from 'react'
import { Text, ScrollView, View } from 'react-native';
import { Textarea, Content, Accordion, Button } from "native-base";
import axios from 'axios';
import PathMap from '../data/PathMap'
const Buffer = require('buffer/').Buffer;

class Question extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        accordian: [
            { title: "Hint 1", content: "Uh oh. Hints are not implemented yet." },
            { title: "Hint 2", content: "Uh oh. Hints are not implemented yet." }
          ],
        question: props.navigation.getParam('question'),
        category: props.navigation.getParam('category'),
        solution: "Solution couldn\'t be loaded... Please make sure you\'re connected to the internet!",
        path: PathMap[props.navigation.getParam('name')]
      }
    }

    handleResponse(res) {
        let newState = Object.assign({}, this.state);
        newState.solution = Buffer.from(res.data.content, "base64").toString('utf8');
        this.setState(newState);
    }
    
    async componentWillMount() {
        let path = PathMap[this.state.category];
        //Fetch readme from github
        //axios.get('https://api.github.com/repos/Michael23B/Exercises-Algorithms-and-Data-Structures-in-C-Sharp/contents/' + path)
            //.then(res => this.handleResponse(res))
            //.catch(console.error)
    }
  
    render() {
    let { scrollStyle, headerTextStyle, questionTextStyle, horizontalRule } = styles;
    return(
        <ScrollView style={scrollStyle}>
            <Content padder>
                <Text style={headerTextStyle}>{this.state.category}</Text>
                <View style={horizontalRule}></View>
                <Text style={questionTextStyle}>{this.state.question}</Text>
                <Text style={questionTextStyle}>{this.state.path}</Text>
                <Textarea style={{backgroundColor: '#fff'}} rowSpan={10} bordered placeholder={ this.props.navigation.getParam('test123', 'Write your code here!') } />
                <Accordion dataArray={this.state.accordian}/>
                <Button light onPress={() => this.props.navigation.navigate('Solution', {...this.state})}><Text>  View the solution  </Text></Button>
            </Content>
        </ScrollView>
      )
    }
}

const styles = {
    scrollStyle: {
        flex: 1
    },
    headerTextStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 5
    },
    questionTextStyle: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5
    },
    horizontalRule: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 5
    }
}

export default Question;