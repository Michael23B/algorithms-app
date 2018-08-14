import React from 'react'
import { Text, ScrollView, View } from 'react-native';
import { Textarea, Content, Accordion } from "native-base";
import axios from 'axios';
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import { solarizedlight } from 'react-syntax-highlighter/styles/prism';
const Buffer = require('buffer/').Buffer;

class Question extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        accordian: [
            { title: "Hint", content: "Uh oh. Hints are not implemented yet." },
            { title: "Solution", content: "Loading solution... Make sure you're connected to the internet!" }
          ],
        question: "Question (description) would go here. This is the text of the question. It will be passed via props.",
        category: "Dynamic Programming"
      }
    }

    handleResponse(res) {
        let newState = Object.assign({}, this.state);
        newState.accordian[1].content = <CodeBlock>{Buffer.from(res.data.content, "base64").toString('utf8')}</CodeBlock>
        this.setState(newState);
    }
    
    async componentWillMount() {
        let path = 'PracticeQuestionsSharp/Algorithms/BinarySearch.cs'
        //Fetch readme from github
        axios.get('https://api.github.com/repos/Michael23B/Exercises-Algorithms-and-Data-Structures-in-C-Sharp/contents/' + path)
            .then(res => this.handleResponse(res))
            .catch(console.error)
    }
  
    render() {
    let { scrollStyle, headerTextStyle, questionTextStyle, horizontalRule } = styles;
    return(
        <ScrollView style={scrollStyle}>
            <Content padder>
                <Text style={headerTextStyle}>{this.state.category}</Text>
                <View style={horizontalRule}></View>
                <Text style={questionTextStyle}>{this.state.question}</Text>
                <Textarea rowSpan={5} bordered placeholder={ this.props.navigation.getParam('test123', 'Write your code here!') } />
                <Accordion dataArray={this.state.accordian}/>
            </Content>
        </ScrollView>
      )
    }
}

const CodeBlock = (props) => (
    <SyntaxHighlighter language='csharp' style={solarizedlight} highlighter={"prism"}>
        {props.children || 'Loading solution... Please make sure you\'re connected to the internet!'}
    </SyntaxHighlighter>
)

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