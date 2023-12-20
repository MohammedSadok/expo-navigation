import { Link, useRouter } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export default function Page() {
  const router = useRouter();
  return (
    <View>
      <Button onPress={() => router.push("/register")} title="register" />
      <Link href={"/one"} asChild>
        <Button title="go to one" />
      </Link>
      <Link href={"/two"} asChild>
        <Button title="go to two" />
      </Link>
      <Link href={"/one/details"} asChild>
        <Button title="go to details" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
