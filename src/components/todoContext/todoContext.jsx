import { Todo } from "../Todo/Todo"
import { TodoInput } from "../TodoInput/ToDoInput"

const TodoContext = () => {
    return (
        <div>
            Container
            <TodoInput />
            <Todo />
        </div>
    )
}

export { TodoContext }