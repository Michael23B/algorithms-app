import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Content } from "native-base";
import CodeBlock from './CodeBlock'

const Solution = (props) => (
    <ScrollView style={styles.scrollViewStyle}>
        <Content padder>
            <Text style={styles.headerTextStyle}>{props.navigation.getParam('category')}</Text>
            <View style={styles.horizontalRule}></View>
            <Text style={styles.questionTextStyle}>{props.navigation.getParam('question')}</Text>

            <CodeBlock>
                {props.navigation.getParam('solution')}
            </CodeBlock>
        </Content>
    </ScrollView>
)

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