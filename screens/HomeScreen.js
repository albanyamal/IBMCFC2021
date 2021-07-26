import React, { useRef } from 'react';
import color from '../config/color';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';


const state = {
    opacity: 0.5
}


function HomeScreen({ navigation }) {

    const unknownRef = useRef();
    const homeRef = useRef();
    const questionsRef = useRef();
    const view = useRef();

    return (
        <View style={styles.background}>
            <View>
                <Text>Hello</Text>
            </View>
            <View style={styles.bottomBar} ref={view}>
                <Pressable ref={unknownRef} style={styles.pressibleButton} onPress={() => navigation.navigate('EntryScreen')}>
                    <Image style={styles.unknownImage} source={require('../assets/unknown.png')} />
                </Pressable>
                <Pressable ref={homeRef} style={styles.pressibleButton} onPress={() => console.log("Pressed")}>
                    <Image style={styles.unknownImage} source={require('../assets/home.png')} />
                </Pressable>
                <Pressable ref={questionsRef} style={styles.pressibleButton} onPress={() => console.log("Pressed")}>
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
    },
    unknownImage: {
        opacity: state.opacity
    },
    pressibleButton: {
        top: 30,
    },
})

export default HomeScreen;