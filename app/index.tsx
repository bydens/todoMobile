import { COLORS } from "@/constants/ui";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Header from "./../layout/Header";

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  return (
    <View
      style={styles.container}
    >
      <StatusBar barStyle={"light-content"} />
      <Header />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
    // justifyContent: "center",
    // alignItems: "center",
  },
})