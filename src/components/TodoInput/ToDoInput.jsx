const TodoInput = () => {
    return (
        <div className="mt-6 relative flex gap-7">
            <input 
                type="text" 
                className="focus:shadow-lg font-inter focus:shadow-blue-800 pl-4 w-96 py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
                placeholder="Ingrese su nueva tarea aquí" 
            />
        </div>
    )
}

export { TodoInput }