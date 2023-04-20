import { useState } from "react"
import { TodoInput } from "../TodoInput/ToDoInput"
import { TodoContext } from "../todoContext"

const Todo = () => {
    const [list, setList] = useState("")
    const handleAddItem = addItem =>{
        setList([...list, addItem])
    }
    return (
        <div>
            <TodoInput handleAddItem={handleAddItem}/>
            <TodoContext />
            <img className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/close-icon.svg" alt="Close-Icon"/>
        </div>
    )
}

export { Todo }