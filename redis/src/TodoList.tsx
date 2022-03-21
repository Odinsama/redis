import {ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import {createClient} from "redis";


export const TodoList = (props: {todos: string[], setTodos: Dispatch<SetStateAction<string[]>>}) => {
    let [todo, setTodo] = useState("")
    const onClickHandler = () => {
        props.setTodos(prevTodos => [...prevTodos, todo])
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.currentTarget.value)
    }
    const client = createClient({url: "http://localhost:6379"})

    return <div>
        <button onClick={() => {}}>Save to Redis</button>
        <div style={{marginTop: "1rem"}}><input onChange={onChangeHandler} type={"text"}/><button onClick={onClickHandler}>Add todo</button></div>
        <div>
            <ul>
            {props.todos.map(todo => {
                return <li>{todo}</li>
            })}
        </ul>
        </div>

    </div>
}