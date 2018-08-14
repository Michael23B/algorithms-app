import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Card = (props) => (
    <View style={styles.cardStyle}><Text>test123(card)</Text></View>
)

const styles = StyleSheet.create({
    cardStyle: {
        borderWidth: 2,
        borderColor: '#222',
        borderRadius: 2,
        shadowColor: '#222',
        shadowOffset: {height: 2, width: 1},
        shadowOpacity: 0.2,
        padding: 3,
        margin: 10,
        alignSelf: 'center'
    }
})

export default Card;