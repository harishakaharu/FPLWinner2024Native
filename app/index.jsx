import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomePage from "../components/homePage/HomePage";
import { ImageBackground } from "react-native";
import backImg from "../assets/images/backgroundImage/backImg.jpg";
import { appStyle } from "./appStyle";

const index = () => {
  return (
    <ImageBackground
      source={backImg}
      imageStyle={appStyle.imgStyle}
      style={appStyle.backImg}
    >
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <HomePage />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default index;
