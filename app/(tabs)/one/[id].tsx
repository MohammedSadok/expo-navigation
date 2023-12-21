import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

type Props = {};

const Page = (props: Props) => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
