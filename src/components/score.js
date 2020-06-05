import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import TeamScore from './teamScore'

export default class Score extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TeamScore handleButton={this.props.handleButton} score={this.props.scores[0]} time="1"></TeamScore>
                <TeamScore handleButton={this.props.handleButton} score={this.props.scores[1]} time="2"></TeamScore>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#cccccc50',
        width: '90%',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 3,
        padding: 10,
    }
})