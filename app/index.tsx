import { COLORS } from "@/constants/ui";
import TodoList from "@/layout/TodoList";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Header from "./../layout/Header";

const defaultTodos: Todo[] = [
  {
    id: 1,
    title: "Buy groceries",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Walk the dog",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Read a book",
    isCompleted: true,
  },
  {
    id: 4,
    title: "Write some code",
    isCompleted: false,
  },
  {
    id: 5,
    title: "Call a friend",
    isCompleted: false,
  },
]

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  return (
    <View
      style={styles.container}
    >
      <StatusBar barStyle={"light-content"} />
      <Header />
      <TodoList todos={todos} />
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