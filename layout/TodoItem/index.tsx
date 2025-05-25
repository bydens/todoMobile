import StyledText from "@/components/StyledText";
import React from "react";

type TodoProps = {
  title: string;
  isCompleted: boolean;
};

const TodoItem: React.FC<TodoProps> = ({ title, isCompleted }) => {
  return (
    <StyledText>
      {title} {isCompleted ? "✅" : "❌"}
    </StyledText>
  );
}
export default TodoItem;
