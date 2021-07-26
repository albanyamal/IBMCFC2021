import React, { useRef } from 'react';
import color from '../config/color';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';


const state = {
    opacity: 0.5
}


function HomeScreen({ navigation }) {


    return (
        <View style={styles.background}>
            <View style={styles.bottomBar}>
                <Pressable style={styles.pressibleButton} onPress={() => navigation.navigate('EntryScreen')}>
                    <Image style={styles.unknownImage} source={require('../assets/unknown.png')} />
                </Pressable>
                <Pressable style={styles.pressibleButton} onPress={() => console.log("Pressed")}>
                    <Image style={styles.unknownImage} source={require('../assets/home.png')} />
                </Pressable>
                <Pressable style={styles.pressibleButton} onPress={() => console.log("Pressed")}>
                    <Image style={styles.unknownImage} source={require('../assets/questions.png')} />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: color.secondary,
        alignContent: 'center',
    },
    bottomBar: {
        height: 100,
        width: '100%',
        backgroundColor: color.primary,
        position: 'absolute',
        bottom:0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
    },
    unknownImage: {
        opacity: state.opacity,
        height:65,
        width:65,
        resizeMode: 'contain',
    },
    pressibleButton: {
        top: 15,
    },
})

export default HomeScreen;