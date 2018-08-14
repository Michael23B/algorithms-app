import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, CardItem, Text as TextBase, Body } from "native-base";

//Creates an array with headers as strings and question name/descriptions as objects
function FormatText(text) {
    let lineArr = text.split('\n');

    let formattedArr = [];
    let lineObj = {name: '', desc: ''}

    lineArr.forEach(line => {
        if (line.startsWith('#')) formattedArr.push(line.slice(1)); //Push the header onto the array
        else {
            //Set the desc and push this object, then reset it.
            if (lineObj.name !== '') {
                lineObj.desc = line;
                formattedArr.push(lineObj);
                lineObj = {name: '', desc: ''};
            }
            else lineObj.name = line; //Set the name and wait for a desc to be added
        }
    });

    return formattedArr;
}

const FormattedList = (props) => {
    let formattedTextArr = FormatText(props.text || props.children);
    let { containerStyle, headerTextStyle, horizontalRule } = styles;

    return(
        <View style={containerStyle}>
            {formattedTextArr.map((line, iter) => {
                return(
                    typeof(line) === 'string'
                    ? <View key={'container' + iter}>
                        <Text style={headerTextStyle} key={line + iter}>{line}</Text>
                        <View key={'rule' + iter} style={horizontalRule}></View>
                    </View>
                    : <CardWithHeaderBody navigation={props.navigation} headerText={line.name} key={line + iter}>{line.desc}</CardWithHeaderBody>
                )
            })}
        </View>
    )
}

const CardWithHeaderBody = (props) => (
    <Card>
        <CardItem header bordered button onPress={() => props.navigation.navigate('Question', {test123: 'test123'})}>
            <TextBase style={styles.nameTextStyle}>{props.headerText}</TextBase>
        </CardItem>
        <CardItem>
            <Body>
                <TextBase style={styles.descriptionTextStyle}>
                    {props.bodyText || props.children}
                </TextBase>
            </Body>
        </CardItem>
        
    </Card>
)

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        margin: 2
      },
    headerTextStyle: {
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: 5

    },
    nameTextStyle: {
        fontSize: 18
    },
    descriptionTextStyle: {
        fontSize: 14,
        color: '#444'
    },
    horizontalRule: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 5
    }
});

export default FormattedList;