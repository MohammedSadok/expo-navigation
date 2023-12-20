import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const Two = (props: Props) => {
  return (
    <View>
      <Link asChild href={"/"}>
        <Text>go to root element of your application</Text>
      </Link>
    </View>
  );
};

export default Two;

const styles = StyleSheet.create({});
