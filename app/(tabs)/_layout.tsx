import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

type Props = {};

const Layout = (props: Props) => {
  return (
    <Tabs>
      <Tabs.Screen name="one" options={{ headerShown: false }} />
      <Tabs.Screen name="two" />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
