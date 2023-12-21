import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
type Props = {};

const Layout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "login" }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "formSheet" }} />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
