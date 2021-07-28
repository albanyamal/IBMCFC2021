import React, { useRef, useState } from 'react';
import color from '../config/color';
import {StyleSheet, Text, View, Pressable, Image, ScrollView, Button} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const state = {
    opacity: 0.5
}



function HomeScreen({ navigation }) {
    const [inputList, setInputList] = useState([<Text style={styles.appName} key={"Home"}>Home</Text>]);
    const [showAqua, setShowAqua] = useState(false);
    const [showHome, setShowHome] = useState(true);
    const [aquagenuityData, setAquagenuityData] = useState();
    function switchPage(page){
        if (page == 'Aqua'){
            setShowAqua(true);
            setShowHome(false);
        }
        else if (page == 'Home'){
            setShowAqua(false);
            setShowHome(true);
            setAquagenuityData(null)
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
            {showHome ?  
            <View style={styles.homeScreen}> 
                <Text style={styles.appName} key={inputList.length + 1}>Home</Text>           
            </View> : null}

            {showAqua ?  
            <View style={styles.aquaScreen}> 
                <Text style={styles.appName} key={inputList.length + 1}>Aqua</Text>  
                <Button title="Get Aqua Score" onPress={() => callAquagenuity('94706')} /> 
                <Text style={styles.appName}>{aquagenuityData}</Text>        
            </View> : null}

            
            

            <View style={styles.bottomBar}>
                <Pressable style={styles.pressibleButton} onPress={() => switchPage('Aqua')}>
                    <Image style={styles.unknownImage} source={require('../assets/unknown.png')} />
                </Pressable>
                <Pressable style={styles.pressibleButton} onPress={() => switchPage('Home')}>
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
    appName: {
        fontSize: 50,
        color: 'deepskyblue',
        fontWeight: 'bold',
        textAlign: 'center',
        top: 300,
    },
    aquaScreen: {
        flex: 1,
        backgroundColor: color.black,
        marginHorizontal: 20,
        marginTop: '10%',
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
    homeScreen: {
        flex: 1,
        backgroundColor: color.white,
        marginHorizontal: 20,
        marginTop: '10%',
        marginBottom: '30%',
    },
    pressibleButton: {
        top: 15,
    },
    unknownImage: {
        opacity: state.opacity,
        height:65,
        width:65,
        resizeMode: 'contain',
    },
})

export default HomeScreen;