import style from "./Dropdown.module.css";
export default function Dropdown(props) {
    const { name, Option, id } = props.data;
    return (
        <div className={style.Container}>
            <h2>Should you use a dropdown?</h2>
            <select name={name} id={`dropdown-${id}`} defaultValue={"Select"}>
                <option value={"Select"} hidden>Select</option>
                {Option.map((item, index) => <option value={item} key={index}>{item}</option>)}
            </select>
        </div >
    );
}