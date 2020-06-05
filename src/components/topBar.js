import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default class TopBar extends Component {
    render() {
        this.state = {
            gameCounter: 0,
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Contador de Truco!</Text>
                <Text style={styles.description}>Jogo {this.state.gameCounter}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: '#cccccc50',
        borderRadius: 3,
        paddingVertical: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',        
        marginVertical: 5,
        color: 'white',
    },
    description: {
        fontSize: 18,
        backgroundColor: '#fff',
        width: '100%',
        textAlign: 'center',
        paddingVertical: 5,
    }
})