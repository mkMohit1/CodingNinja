import styles from "./TodoList.module.css";
export default function TodoList(props) {
    console.log(props.data)
    return (
        <div className={styles.listContainer}>
        </div>
    );
}