import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

let i = 0;

function FormatText(text) {
    return text.split('\n');
}

//TODO: put this text in a box with some shadow
const FormattedList = (props) => {
    let formattedTextArr = FormatText(props.text || props.children);
    let { headerTextStyle, nameTextStyle, descriptionTextStyle } = styles;
    return(
        <View>
            {formattedTextArr.map((line, iter) => {
                return(
                    line.startsWith('#')
                    ? <Text style={headerTextStyle} key={line + iter}>{line.slice(i = 1)}</Text>
                    : <Text style={i++ % 2 == 1 ? nameTextStyle : descriptionTextStyle} key={line + iter}>{line}</Text>
                )
                {//This code above is super unreadable and I should reformat it but its slick as though. :))
                 //We increment i as we check because it will always be a name followed by a description.
                 //Then we just reset it to 1 while we are slicing the heading text.
                }
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    headerTextStyle: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    nameTextStyle: {
        fontSize: 18
    },
    descriptionTextStyle: {
        fontSize: 14,
        color: '#444'
    }
  });

export default FormattedList;