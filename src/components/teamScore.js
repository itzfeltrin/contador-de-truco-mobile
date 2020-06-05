import React, {Component} from 'react';

import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlightBase} from 'react-native';

export default class TeamScore extends Component {
    handleButton = (sinal) => {
        this.props.handleButton(sinal, this.props.time)
    }

    render() {
        const {score, time} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.name}>Time {time}</Text>
                <Text style={styles.score}>{score}</Text>
                <TouchableOpacity style={styles.button} onPress={this.handleButton.bind(null, '+')}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.handleButton.bind(null, '-')}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 3,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        paddingVertical: 5,
        color: 'white',
    },
    score: {
        fontSize: 48,
    },
    button: {
        width: '50%',
        height: 40,
        backgroundColor: '#ffffff75',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 3,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 32,
    }
    
})