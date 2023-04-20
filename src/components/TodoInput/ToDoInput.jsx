import { useState } from "react"

const TodoInput = props => {
    const [description, setDescription] = useState("")
    const { handleAddItem } = props
    const handleSubmit = e => {
        e.preventDefault()

        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            description
        })

        console.log(description)
        setDescription("")
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mt-6 relative flex gap-7">
                <input 
                    type="text" 
                    className="focus:shadow-lg font-inter focus:shadow-blue-800 pl-4 w-96 py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Ingrese su nueva tarea aquí" 
                />
                <button className="w-40 py-3 rounded-xl bg-yellow-500 font-inter text-black cursor-pointer" disabled={description ? "" : "disabled"}>
                    Agregar
                </button>
            </div>
        </form>
    )
}

export { TodoInput }