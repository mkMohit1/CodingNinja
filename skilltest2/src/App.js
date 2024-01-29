import TodoForm from "./Component/TodoForm";
import { useEffect, useState } from "react";
import TodoList from "./Component/TodoList";

function App() {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://my-json-server.typicode.com/mkMohit1/todolistDummyServer/db"
                );
                const data = await response.json();
                setAllData(data.posts);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const addHandler = (value) => {
        const temp = {
            id: allData.length + 1,
            title: value,
        };

        setAllData([...allData, temp]);

        updateToApi(temp);
    };

    const updateToApi = async (value) => {
        try {
            const response = await fetch(
                "https://my-json-server.typicode.com/mkMohit1/todolistDummyServer/posts",
                {
                    method: "POST",
                    body: JSON.stringify(value),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                }
            );
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <>
            <TodoForm addHandler={addHandler} />
            <TodoList data={allData} />
        </>
    );
}

export default App;
