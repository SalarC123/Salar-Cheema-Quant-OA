function Navbar() {
    
    return (
        <nav className="flex flex-row justify-around p-4 text-white ">
            <a className="underline-offset-4 cursor-pointer underline decoration-red-500 decoration-4 font-extrabold text-xl">Home</a>
            <a className="underline-offset-4 cursor-pointer hover:underline decoration-red-500 decoration-4 font-extrabold text-xl">News</a>
            <a className="underline-offset-4 cursor-pointer hover:underline decoration-red-500 decoration-4 font-extrabold text-xl">Contact</a>
        </nav>
    )
}

export default Navbar