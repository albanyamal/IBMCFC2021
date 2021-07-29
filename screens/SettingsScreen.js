import React, { useRef, useState } from 'react';
import color from '../config/color';
import {StyleSheet, Text, View, Pressable, Image, ScrollView, Button} from 'react-native';


function SettingsScreen({ navigation }) {

    return (
        <View style={styles.background}>
            <Text style={styles.text}>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'gold',
        alignContent: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 40,
        color: color.black,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
})

export default SettingsScreen;