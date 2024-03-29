import "react-native-gesture-handler";
import React from "react";
import AppLoaging from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import { ThemeProvider } from "styled-components/native";

import theme from "./src/theme";
import { AuthProvider } from "hooks/auth";
import { Routes } from "routes";
import { Order } from "screens/Order";
import { Orders } from "screens/Orders";

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoaded) return <AppLoaging />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <AuthProvider>
        <Routes />
        {/* <Order /> */}
        {/* <Orders /> */}
      </AuthProvider>
    </ThemeProvider>
  );
}
