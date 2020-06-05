import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import TopBar from './components/topBar';
import Score from './components/score';

export default class App extends Component {
    state = {
        scores: [0, 0],
    }

    handleButton = (sinal, time) => {
        const newArr = Object.assign(this.state.scores);
        sinal === '+' ? newArr[time - 1] = newArr[time - 1] + 1 : newArr[time - 1] > 0 ? newArr[time - 1] = newArr[time - 1] - 1 : null;
        this.setState({scores: newArr});
    }

    resetScores = () => {
        this.setState({
            scores: [0, 0],
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/background.jpg')} style={styles.backgroundImage} />
                <TopBar />
                <Score handleButton={this.handleButton} scores={this.state.scores}/>
                <Text style={styles.watermark}>Desenvolvido por Pedro Feltrin, 2020</Text>
                <TouchableOpacity style={styles.button} onPress={this.resetScores}>
                    <Text style={styles.buttonText}>RECOMEÇAR</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        
    },
    watermark: {
        position: 'absolute',
        bottom: 5,
        right: 20,
        color: 'white',
    },
    backgroundImage: {
        position: 'absolute',
    },
    button: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 3,
        width: '90%',
        marginTop: 10,
        padding: 20,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    }
})