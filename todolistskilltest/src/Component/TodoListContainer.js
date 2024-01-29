import TodoList from "./TodoList";
export default function TodoListContainer(props) {
  const { data, checkboxUpdate, deleteTodo } = props;
  return (
    <div className="TodoListContainer">
      {data.map((todo, index) => (
        <TodoList
          key={index}
          todo={todo}
          checkboxUpdate={checkboxUpdate}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
