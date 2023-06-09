import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { BottomNavigator } from "../components";
import { Distributor, EditBank, EditProfile, Home, Profile, ResultSearch, SendOtp, SignIn, SignUp, SplashScreen, SuccessSignUp } from "../pages";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false}} />
            <Tab.Screen name="Distributor" component={Distributor} options={{ headerShown: false}} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false}} />
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SendOtp" component={SendOtp} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="SuccessSignUp" component={SuccessSignUp} options={{ headerShown: false }} />
            <Stack.Screen name="ResultSearch" component={ResultSearch} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
            <Stack.Screen name="EditBank" component={EditBank} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default Router;