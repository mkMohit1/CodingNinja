import { useState, useEffect, createRef } from "react";
import { addTodo } from "../Assest/Assest";
import styles from "./TodoForm.module.css";
export default function TodoForm(props) {
  const { addHandler } = props;
  const todoRef = createRef();
  const categorieRef = createRef();
  const submithandle = (e) => {
    e.preventDefault();
    const temp = {
      title: todoRef.current.value,
      category: categorieRef.current.value,
    };
    addHandler(temp);
    todoRef.current.value = "";
    categorieRef.current.value = "";
  };
  return (
    <form onSubmit={(e) => submithandle(e)} className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h1>
          &#x7B; <u>TODO APP</u> &#x7D;
        </h1>
      </div>
      <div className={styles.innerForm}>
        <div className={styles.formInput}>
          <input type="text" placeholder="Add Todo" ref={todoRef} required />
        </div>
        <select
          ref={categorieRef}
          id="categorySelect"
          name="category"
          className={styles.categorical}
          required
        >
          <option value="" hidden>
            Please select your category
          </option>
          <option value="Health">Health</option>
          <option value="Other">Other</option>
          <option value="Personal">Personal</option>
        </select>

        <div className={styles.formbutton}>
          <button type="submit">
            <span>Add Todo</span>
            <img src={addTodo} alt="todoAdd" />
          </button>
        </div>
      </div>
    </form>
  );
}
