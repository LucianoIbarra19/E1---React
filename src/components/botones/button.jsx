const Button = () => {
    return (
        <div className="flex row-span-2 gap-7">
                <button className="w-40 py-3 rounded-xl bg-yellow-500 font-inter text-black">
                    Agregar
                </button>
                <button className="w-40 rounded-xl py-3 bg-red-500 font-anton">
                    Remover
                </button>
            </div>
    )
}

export { Button }