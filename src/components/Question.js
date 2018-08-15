import React from 'react'
import { Text, ScrollView, View } from 'react-native';
import { Textarea, Content, Accordion, Button, Toast } from "native-base";
import axios from 'axios';
import GetPath from '../data/PathMap'
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
        name: props.navigation.getParam('name'),
        category: props.navigation.getParam('category'),
        solution: "",
        path: GetPath(props.navigation.getParam('category'), props.navigation.getParam('name'))
        //path: PathMap[props.navigation.getParam('name')]
      }
      this.handleSolutionPress = this.handleSolutionPress.bind(this);
    }

    static navigationOptions = {
        title: 'Question'
    }

    handleSolutionPress() {
        if (this.state.solution !== "") this.props.navigation.navigate('Solution', {...this.state});
        else Toast.show({
            text: "Solution loading! Try again in a moment.",
            duration: 3000
          });
    }

    handleResponse(res) {
        let newState = Object.assign({}, this.state);
        newState.solution = Buffer.from(res.data.content, "base64").toString('utf8');
        this.setState(newState);
    }
    
    async componentWillMount() {
        if (this.state.solution != "") return; //Already have our solution
        //Fetch readme from github
        axios.get('https://api.github.com/repos/Michael23B/Exercises-Algorithms-and-Data-Structures-in-C-Sharp/contents/' + this.state.path)
            .then(res => this.handleResponse(res))
            .catch(() => this.state.solution = 'Solution couldn\'t be loaded... Please make sure you\'re connected to the internet!')
    }
  
    render() {
    let { scrollStyle, headerTextStyle, questionTextStyle, horizontalRule, buttonStyle } = styles;
    return(
        <ScrollView style={scrollStyle}>
            <Content padder>
                <Text style={headerTextStyle}>{this.state.name}</Text>
                <View style={horizontalRule}></View>
                <Text style={questionTextStyle}>{this.state.question}</Text>
                <Textarea style={{backgroundColor: '#fff'}} rowSpan={10} bordered placeholder={ this.props.navigation.getParam('test123', 'Write your code here!') } />
                <Accordion dataArray={this.state.accordian}/>
                <Button style={buttonStyle} light onPress={this.handleSolutionPress}><Text>  View the solution  </Text></Button>
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
    },    
    buttonStyle: {
        alignSelf: 'center',
        marginTop: 5
    }
}

export default Question;