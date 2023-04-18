import { Title } from "./components/titles";
import { TodoInput } from "./components/TodoInput/ToDoInput";
import { Button } from "./components/botones";
import { TodoContext } from "./components/todoContext";
import { Todo } from "./components/Todo";


function App() {
  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput />
        <Button />
        <TodoContext>
          <Todo />
        </TodoContext>
      </div>
    </div>
  );
}





export default App;
