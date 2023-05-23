import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { Logo } from "../../assets";

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn');
        }, 2000);
    }, []);

    return (
        <View style={{backgroundColor: '#f19097', flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <Logo style={{height: 10}} />
            <View style={{height: 38}} />
            <Text style={{fontSize: 20, color: '#020202'}}>Selamat Datang di Glumory Apps</Text>
        </View>
    );
};

export default SplashScreen;