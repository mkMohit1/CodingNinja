import TodoForm from "./Component/TodoForm";
import { useEffect, useState } from "react";
import TodoListContainer from "./Component/TodoListContainer";
import { addTodo } from "./Assest/Assest";

function App() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/mkMohit1/todolistDummyServer/db",
        );
        const data = await response.json();
        setAllData(data.todos);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addHandler = async (value) => {
    let currentdate = new Date();
    let tempDate =
      currentdate.getDate() +
      "-" +
      (currentdate.getMonth() + 1) + // Adding 1 since getMonth returns 0-indexed month
      "-" +
      currentdate.getFullYear();
    const temp = {
      id: allData.length + 1,
      date: tempDate,
      complete: false,
      ...value,
    };

    try {
      const gettingData = await addTodoApi(temp);
      setAllData([gettingData, ...allData]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const checkboxUpdate = async (id) => {
    const updatedTodo = allData.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    try {
      await updateToApi(id, !allData.find((todo) => todo.id === id)?.complete);
      setAllData([...updatedTodo]);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    const updatedTodo = allData.filter((todo) => todo.id !== id);

    try {
      await deleteTodoApi(id);
      setAllData([...updatedTodo]);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const updateToApi = async (id, complete) => {
    try {
      await fetch(
        `https://my-json-server.typicode.com/mkMohit1/todolistDummyServer/todos/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            complete: complete,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        },
      );
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const addTodoApi = async (value) => {
    try {
      const addTodo = await fetch(
        "https://my-json-server.typicode.com/mkMohit1/todolistDummyServer/todos",
        {
          method: "POST",
          body: JSON.stringify(value),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        },
      ).then((response) => response.json());

      return addTodo;
    } catch (error) {
      throw new Error("Error adding todo:", error);
    }
  };

  const deleteTodoApi = async (id) => {
    try {
      await fetch(
        `https://my-json-server.typicode.com/mkMohit1/todolistDummyServer/todos/${id}`,
        {
          method: "DELETE",
        },
      );
    } catch (error) {
      throw new Error("Error deleting todo:", error);
    }
  };

  return (
    <>
      <TodoForm addHandler={addHandler} />
      <TodoListContainer
        data={allData}
        checkboxUpdate={checkboxUpdate} // Corrected function name to follow camelCase convention
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
