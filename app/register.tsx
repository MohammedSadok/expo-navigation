import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  return (
    <View>
      <Text>register</Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
