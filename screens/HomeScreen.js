import React, { useRef, useState } from 'react';
import color from '../config/color';
import {StyleSheet, Text, View, Pressable, Image, ScrollView, Button} from 'react-native';


function HomeScreen({ navigation }) {
    const [showAqua, setShowAqua] = useState(false);
    const [showHome, setShowHome] = useState(true);
    const [showQuestions, setShowQuestions] = useState(false);
    const [aquagenuityData, setAquagenuityData] = useState();
    function switchPage(page){
        if (page == 'Aqua'){
            setShowAqua(true);
            setShowHome(false);
            setShowQuestions(false);
        }
        else if (page == 'Home'){
            setShowAqua(false);
            setShowHome(true);
            setAquagenuityData(null);
            setShowQuestions(false);
        }
        else if (page == 'Questions'){
            setShowAqua(false);
            setShowHome(false);
            setAquagenuityData(null);
            setShowQuestions(true);
        }
    }

    const callAquagenuity = async (zipcode) => {
        try {
          const response = await fetch('https://aquagenuity.com/GetWaterScore', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            data: {"auth":{"username":"GfcFPmmqsUkF","password":"YjW4wjgZ2ie1"},"zipcode":"94706"}
        });
          const json = await response.json();
          setAquagenuityData(response.status);
          return json;
        } catch (error) {
          setAquagenuityData(response.status);
          console.error(error);
        }
      };



    return (
        <View style={styles.background}>
        <View style={styles.navBar}>
            <Pressable style={styles.accountPressible} onPress={() => navigation.navigate('SettingsScreen')}>
                <Image style={styles.accountButton} source={require('../assets/accountLight.png')} />
            </Pressable>
            {showHome ? <Text style={styles.title}>Home</Text> : null}   
            {showAqua ? <Text style={styles.title}>Aqua</Text> : null}
            {showQuestions ? <Text style={styles.title}>Questions</Text> : null}
        </View>

            {showHome ?  
            <View style={styles.homeScreen}></View> : null}

            {showAqua ?  
            <View style={styles.aquaScreen}> 
                <Button title="Get Aqua Score" onPress={() => callAquagenuity('94706')} /> 
                <Text style={styles.bodyText}>{aquagenuityData}</Text>        
            </View> : null}

            {showQuestions ?  
            <View style={styles.questionsScreen}> 
            </View> : null}

            
            

            <View style={styles.bottomBar}>
                <Pressable style={styles.pressibleButton} onPress={() => switchPage('Aqua')}>
                    <Image style={styles.bottomBarButton} source={require('../assets/unknown.png')} />
                </Pressable>
                <Pressable style={styles.pressibleButton} onPress={() => switchPage('Home')}>
                    <Image style={styles.bottomBarButton} source={require('../assets/home.png')} />
                </Pressable>
                <Pressable style={styles.pressibleButton} onPress={() => switchPage('Questions')}>
                    <Image style={styles.bottomBarButton} source={require('../assets/questions.png')} />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        color: color.black,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 30,
    },
    bodyText: {
        fontSize: 40,
        color: 'tomato',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    accountPressible: {
        position: 'absolute',
        right: 15,
        top: 32,
        height:50,
        width:50,
        resizeMode: 'contain',
    },
    aquaScreen: {
        flex: 1,
        backgroundColor: color.black,
        marginHorizontal: 20,
        marginTop: '30%',
        marginBottom: '30%',
    },
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
    bottomBarButton: {
        opacity: 1,
        height:65,
        width:65,
        resizeMode: 'contain',
    },
    accountButton: {
        opacity: 1,
        height:50,
        width:50,
        resizeMode: 'contain',
    },
    homeScreen: {
        flex: 1,
        backgroundColor: color.white,
        marginHorizontal: 20,
        marginTop: '30%',
        marginBottom: '30%',
    },
    pressibleButton: {
        top: 15,
    },
    questionsScreen: {
        flex: 1,
        backgroundColor: 'cyan',
        marginHorizontal: 20,
        marginTop: '30%',
        marginBottom: '30%',
    },
    navBar: {
        height: 90,
        width: '100%',
        backgroundColor: color.primary,
        position: 'absolute',
        top:0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
    },

})

export default HomeScreen;