import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
type Props = {};

const Layout = (props: Props) => {
  return (
    <Tabs>
      <Tabs.Screen
        name="one"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: () => <Ionicons name="person" size={24} color="blue" />,
          href: null,
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
