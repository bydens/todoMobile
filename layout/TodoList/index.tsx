import { Todo } from "@/types/todo";
import { FlatList, View } from "react-native";
import TodoItem from "../TodoItem";

type TodoListProps = { 
  todos?: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <View>
      <FlatList 
        data={todos}
        renderItem={({ item }) => <TodoItem title={item.title} isCompleted={item.isCompleted} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TodoList;