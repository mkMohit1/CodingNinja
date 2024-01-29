import styles from "./TodoList.module.css";
import { useState } from "react";
import { dustbin } from "../Assest/Assest";

export default function TodoList(props) {
  const { title, category, complete, date, id } = props.todo;
  const { checkboxUpdate, deleteTodo } = props;
  const [datacomplete, setDataComplete] = useState(complete);

  const handleCheckboxChange = () => {
    setDataComplete(!datacomplete);
  };

  return (
    <div className={styles.TodoList}>
      <div>
        <input
          type="checkbox"
          value="complete"
          checked={datacomplete}
          onClick={(e) => checkboxUpdate(id)}
        />
      </div>
      <div className={styles.TodoDetail}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>
          {complete ? <del>{title}</del> : title}
        </h3>
        <span className={styles.category}>{category}</span>
      </div>
      <button className={styles.delete} onClick={() => deleteTodo(id)}>
        <img src={dustbin} alt="delete" />
      </button>
    </div>
  );
}
