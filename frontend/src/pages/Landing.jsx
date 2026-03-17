import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/Logo"


function Landing() {
    const [scrolled, setScrolled] = useState(false)
    const [tasks, setTasks] = useState([
        { id: 1, text: "Review design system tokens", desc: "Check spacing, color variables, and typography scale.", done: false },
        { id: 2, text: "Write API integration tests", desc: "Cover auth endpoints and error handling.", done: false },
        { id: 3, text: "Send weekly team update", desc: "", done: true },
    ])

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", fn)
        return () => window.removeEventListener("scroll", fn)
    }, [])

    const toggle = (id) => setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
    const sorted = [...tasks.filter(t => !t.done), ...tasks.filter(t => t.done)]
    return (
        <div className="min-h-screen bg-black text-white" >

            {/* Ṇavbar */}
            <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur border-b border-gray-800 " : "bg-transparent"}`} >
                <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                    <Logo dark={true} width={110} />
                    <div className="flex items-center gap-3">
                        <Link to="/login" className="text-sm text-gray-500 hover:text-white transition-colors px-3 py-1.5">
                            Sign in
                        </Link>
                        <Link to="/register" className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition-colors">
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section></section>


        </div>
    )
}
export default Landing


