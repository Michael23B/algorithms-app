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
        let { navigation } = this.props;

        return(
            <View style={styles.listStyle}>
                <FormattedList navigation={navigation}>{this.state.readme}</FormattedList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listStyle: {
        padding: 3,
        margin: 10,
        alignSelf: 'center'
    }
})

export default List;