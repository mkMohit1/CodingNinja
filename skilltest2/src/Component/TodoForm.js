import { useState, useEffect, createRef } from "react";
import styles from "./TodoForm.module.css";
export default function TodoForm(props) {
    const { addHandler } = props;
    const todoRef = createRef();
    const submithandle = (e) => {
        e.preventDefault();
        addHandler(todoRef.current.value);
        todoRef.current.value = "";
    }
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
                <div className={styles.formbutton}>
                    <button type="submit">Add</button>
                </div>
            </div>
        </form>
    );
}
