import React from "react";
import formTodo from "./formTodo/formTodo";
import taskList from "./taskList/taskList";

const Container = () => {
    return (
        <div>
            <formTodo />
            <taskList />
        </div>
    )
}

export default Container