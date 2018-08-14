import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Content } from "native-base";
import CodeBlock from './CodeBlock'

class Solution extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Solution'
    }

    render() {
        return(
            <ScrollView style={styles.scrollViewStyle}>
            <Content padder>
                <Text style={styles.headerTextStyle}>{this.props.navigation.getParam('name')}</Text>
                <View style={styles.horizontalRule}></View>
            </Content>
            
            <CodeBlock>
                    {this.props.navigation.getParam('solution', 
                    "The solution didn't load. Try pressing back and waiting a moment. Yes, I'm aware that's a terrble solution.")}
            </CodeBlock>
        </ScrollView>
        )
    }
}

const styles = {
    scrollViewStyle: {
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

export default Solution;