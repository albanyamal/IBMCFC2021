import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ColorPropType, StyleSheet, Text, View, Image, Pressable  } from 'react-native';
import color from '../config/color';

function EntryScreen({ navigation }) {
    return (
    <View style={styles.background}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {color.primary} translucent = {true} />

      <View style={styles.logoContainer}>
        <Image style={styles.homeLogo} source={require('../assets/logo.png')}/>
        <Text style={styles.appName}>App Name</Text>   
      </View>
   
      <View style={styles.bottomView}>
        <Pressable style={styles.continueButton} onPress={() => navigation.navigate('HomeScreen')}><Text style={styles.continueText}>Continue</Text></Pressable>
      </View>
    </View>
    
    );
}

const styles = StyleSheet.create({
    appName: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      top: 300,
    },
    background: {
      flex: 1,
      backgroundColor: color.primary,
      alignItems: 'center',
    },
    continueButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: color.tertiary,
    },
    continueText: {
      fontSize: 20,
      lineHeight: 22,
      fontWeight: 'bold',
      letterSpacing: 0.3,
      color: 'white',
    },
    bottomView:{
      width: '100%', 
      height: 100, 
      backgroundColor: color.primary, 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },
    homeLogo: {
      height:250,
      width: 250,
      top: 200,
      resizeMode: 'contain',
      
    },
    logoContainer: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent:'center',
    },

});

export default EntryScreen;