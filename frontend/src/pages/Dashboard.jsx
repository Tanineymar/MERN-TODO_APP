import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Logo from "../assets/Logo"
import { toast } from "react-hot-toast"

function Dashboard() {

    const navigate = useNavigate()

    const [scrolled,        setScrolled]        = useState(false)
    const [username,        setUsername]        = useState("")


    const [todos,           setTodos]           = useState([])
    const [loading,         setLoading]         = useState(false)
    const [error,           setError]           = useState(null)


    const [showForm,        setShowForm]        = useState(false)
    const [title,           setTitle]           = useState("")
    const [description,     setDescription]     = useState("")


    const [showEdit,        setShowEdit]        = useState(false)
    const [editingTodo,     setEditingTodo]     = useState(null)
    const [editTitle,       setEditTitle]       = useState("")
    const [editDescription, setEditDescription] = useState("")


    const getId = (todo) => todo._id || todo.id


    const openEdit = (todo) => {
        setEditingTodo(todo)
        setEditTitle(todo.title)
        setEditDescription(todo.description || "")
        setShowEdit(true)
    }


    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", fn)
        return () => window.removeEventListener("scroll", fn)
    }, [])

    // 1 FETCH
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                setLoading(true)
                const token = localStorage.getItem("token")
                if (!token) { navigate("/login"); return }

                const decoded = JSON.parse(atob(token.split('.')[1]))
                setUsername(decoded?.name || decoded?.username || "User")

                const res = await axios.get("http://localhost:3000/todo/home", {
                    withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` }
                })
                setTodos(res.data.todos)
            } catch (error) {
                setError("Failed to fetch todos")
            } finally {
                setLoading(false)
            }
        }
        fetchTodos()
    }, [])

    // 2 ADD
    const handleAdd = async () => {

        if (!title.trim()){
            toast.error("Title is required")
            return
        }
        if(title.trim().length < 3){
            toast.error("Title must be at least 3 characters")
            return
        }
        if(title.trim().length > 50){
            toast.error("Title must be under 50 characters")
            return
        }
        if(description.length > 200){
            toast.error("Description must be under 200 characters")
        }

        try {
            const token = localStorage.getItem("token")
            const res = await axios.post("http://localhost:3000/todo/create",
                { title, description },
                {
                    withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` }
                }
            )
            setTodos(prev => [res.data.todo, ...prev])
            setTitle("")
            setDescription("")
            setShowForm(false)
        } catch (error) {
            toast.error("Failed to add todo")
        }
    }

    // 3 UPDATE
    const handleUpdate = async () => {
        if (!editTitle.trim()){
            toast.error("Title is required")
            return
        }
        if(editTitle.trim().length < 3){
            toast.error("Title must be at least 3 characters")
            return
        }
        if(editTitle.trim().length > 50){
            toast.error("Title must be under 50 characters")
            return
        }
        if(editDescription.length > 200){
            toast.error("Description must be under 200 characters")
            return
        }
        
        try {
            const token = localStorage.getItem("token")
            const id = getId(editingTodo)
            await axios.put(
                `http://localhost:3000/todo/update/${id}`,
                { title: editTitle, description: editDescription },
                {
                    withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` }
                }
            )
            setTodos(prev => prev.map(singleTodo =>
                getId(singleTodo) === id
                ? { ...singleTodo, title: editTitle, description: editDescription }
                : singleTodo
            ))
            setShowEdit(false)
            setEditingTodo(null)
        } catch (error) {
            // console.log("Update Error:", error.response)
            toast.error("Failed to update todo")
        }
    }

    // 4 DELETE
    const handleDelete = async (todo) => {
        const id = getId(todo)
        try {
            const token = localStorage.getItem("token")
            await axios.delete(
                `http://localhost:3000/todo/delete/${id}`,
                {
                    withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` }
                }
            )
            setTodos(prev => prev.filter(singleTodo => getId(singleTodo) !== id))
            toast.success("Todo deleted successfully")
        } catch (error) {
            // console.log("delete error:", error.response)
            toast.error("Failed to delete todo")
        }
    }

    // 5 TOGGLE COMPLETED
    const handleToggle = async (todo) => {
        const id = getId(todo)
        try {
            const token = localStorage.getItem("token")
            await axios.put(
                `http://localhost:3000/todo/update/${id}`,
                { completed: !todo.completed },
                {
                    withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` }
                }
            )
            setTodos(prev => prev.map(singleTodo =>
                getId(singleTodo) === id
                ? { ...singleTodo, completed: !singleTodo.completed }
                : singleTodo
            ))
        } catch (error) {
            // console.log("Toggle Error:", error.response)
           toast.error("Failed to update todo")
        }
    }

    return (
        <div className="min-h-screen bg-black text-white">

            {/* NAVBAR */}
            <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 flex items-center justify-between px-6 h-14 ${
                scrolled ? "bg-black/80 backdrop-blur border-b border-gray-800" : "bg-transparent"
            }`}>
                <Logo dark={true} width={110} />
                <button
                    onClick={() => { localStorage.removeItem("token"); navigate("/login") }}
                    className="text-xs text-gray-600 hover:text-red-400 hover:bg-red-500/10 px-3 py-1.5 rounded-lg transition-all duration-200"
                >
                    Log out
                </button>
            </nav>

            <div className="max-w-2xl mx-auto px-6 pt-24 pb-24">

                {/* GREETING */}
                <h1 className="text-lg font-serif mb-6">
                    Welcome, <em className="text-fuchsia-400 italic">{username}</em>
                </h1>

                {/* ADD BUTTON */}
                <button
                    onClick={() => setShowForm(true)}
                    className="w-full flex items-center gap-3 border border-gray-800 hover:border-indigo-600/50 text-gray-500 hover:text-indigo-400 rounded-2xl px-5 py-4 mb-4 transition-all text-left"
                >
                    + New task
                </button>

                {/* ADD MODAL */}
                {showForm && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
                        onClick={(e) => e.target === e.currentTarget && setShowForm(false)}
                    >
                        <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-7 shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-serif text-2xl font-normal">New task</h2>
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
                                >
                                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                                        <path d="M1 1l10 10M11 1L1 11" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mb-5">
                                <label className="block text-xs text-gray-500 mb-2">Title</label>
                                <input
                                    autoFocus type="text" value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                                    placeholder="e.g. Buy groceries"
                                    className="w-full bg-gray-950 border border-gray-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-700 outline-none transition-colors"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-xs text-gray-500 mb-2">
                                    Description <span className="text-gray-700">(optional)</span>
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Add some details…" rows={3}
                                    className="w-full bg-gray-950 border border-gray-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-700 outline-none resize-none transition-colors"
                                />
                            </div>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="px-5 py-2.5 text-sm border border-gray-700 rounded-xl text-gray-400 hover:text-white transition-colors"
                                >Cancel</button>
                                <button
                                    onClick={handleAdd}
                                    className="px-5 py-2.5 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors"
                                >Save task</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* EDIT MODAL */}
                {showEdit && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
                        onClick={(e) => e.target === e.currentTarget && setShowEdit(false)}
                    >
                        <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-7 shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-serif text-2xl font-normal">Edit task</h2>
                                <button
                                    onClick={() => setShowEdit(false)}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
                                >
                                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                                        <path d="M1 1l10 10M11 1L1 11" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mb-5">
                                <label className="block text-xs text-gray-500 mb-2">Title</label>
                                <input
                                    autoFocus type="text" value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleUpdate()}
                                    className="w-full bg-gray-950 border border-gray-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-xs text-gray-500 mb-2">
                                    Description <span className="text-gray-700">(optional)</span>
                                </label>
                                <textarea
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)}
                                    rows={3}
                                    className="w-full bg-gray-950 border border-gray-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white outline-none resize-none transition-colors"
                                />
                            </div>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setShowEdit(false)}
                                    className="px-5 py-2.5 text-sm border border-gray-700 rounded-xl text-gray-400 hover:text-white transition-colors"
                                >Cancel</button>
                                <button
                                    onClick={handleUpdate}
                                    className="px-5 py-2.5 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors"
                                >Update task</button>
                            </div>
                        </div>
                    </div>
                )}

                {loading && <p className="text-gray-500">Loading...</p>}
                {error   && <p className="text-red-400">{error}</p>}

                {/* TODO LIST */}
                {todos.map(todo => (
                    <div
                        key={getId(todo)}
                        className={`flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-xl px-5 py-4 mb-3 hover:border-gray-700 transition-colors ${todo.completed ? "opacity-50" : ""}`}
                    >
                        {/* CHECKBOX */}
                        <button
                            onClick={() => handleToggle(todo)}
                            className={`mt-0.5 w-5 h-5 rounded-full border shrink-0 flex items-center justify-center transition-all ${
                                todo.completed
                                ? "bg-indigo-600 border-indigo-600"
                                : "border-gray-600 hover:border-indigo-400"
                            }`}
                        >
                            {todo.completed && (
                                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 5l2.5 2.5L8 3"/>
                                </svg>
                            )}
                        </button>

                        {/* CONTENT */}
                        <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium ${todo.completed ? "line-through text-gray-600" : "text-white"}`}>
                                {todo.title}
                            </p>
                            {todo.description && (
                                <p className="text-gray-500 text-xs mt-1">{todo.description}</p>
                            )}
                        </div>

                        {/* EDIT + DELETE */}
                        <div className="flex gap-1 shrink-0">
                            <button
                                onClick={() => openEdit(todo)}
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-indigo-500 bg-gray-800 sm:text-gray-600 sm:bg-transparent hover:text-indigo-400 hover:bg-gray-800 transition-colors"
                            >
                                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 2l3 3-8 8H3v-3l8-8z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => handleDelete(todo)}
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-red-400 bg-red-500/10 sm:text-gray-600 sm:bg-transparent  hover:text-red-400 hover:bg-red-500/10 transition-colors"
                            >
                                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 9h8l1-9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Dashboard