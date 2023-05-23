import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import FlashMessage from "react-native-flash-message";
import 'react-native-gesture-handler';
import { Provider, useSelector } from "react-redux";
import { Loading } from "./components";
import store from "./redux/store";
import Router from "./router";

const MainApp = () => {
  const { isLoading } = useSelector((state) => state.globalReducer)

  return (

    <Provider store={store}>
      <NavigationContainer>
        <Router />
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <StatusBar translucent backgroundColor="#8D92A3" />
        <FlashMessage position="bottom" />
        {isLoading && <Loading />}
      </NavigationContainer>
    </Provider >

  );
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;

