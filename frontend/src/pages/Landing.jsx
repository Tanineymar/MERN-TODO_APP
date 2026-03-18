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
            <nav className={`fixed top-0 inset-x-0 py-1.5 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur border-b border-gray-800 " : "bg-transparent"}`} >
                <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                    <Logo dark={true} width={110} />
                    <div className="flex items-center gap-3">
                        <Link to="/login" className="text-sm text-gray-500 hover:text-white transition-colors px-3 py-1.5">
                            Login
                        </Link>
                        <Link to="/register" className="text-sm bg-indigo-600 hover:bg-indigo-800 text-white px-4 py-2 rounded-xl transition-colors">
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-40 pb-24 px-6 text-center max-w-3xl mx-auto">
                <span className="inline-block text-xs tracking-widest uppercase text-gray-400 mb-6 border border-gray-800 rounded-full px-4 py-1.5">
                    Simple · Minimal · Yours
                </span>
                <h1 className="font-serif text-5xl sm:text-6xl  md:text-7xl font-normal text-white leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
                    Organize your tasks,{" "}
                    <em className="text-fuchsia-400 italic">effortlessly.</em>
                </h1>
                <p className="text-gray-400 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                    Taskly is a minimal todo app. No clutter, no bloat — just clarity.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link to="/register" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-800 text-white text-sm px-8 py-3.5 rounded-xl transition-colors">Start for free</Link>
                    <Link to="#preview" className="w-full sm:w-auto border border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white text-sm px-8 py-3.5 rounded-xl transition-colors">See how it works</Link>
                </div>
                <p className="mt-8 text-sm text-gray-600">
                    No credit card needed &nbsp;·&nbsp; Free forever &nbsp;·&nbsp; Works on all devices
                </p>
            </section>

            {/* APP PREVIEW */}
            <section className="px-6 pb-24">
                <div className="max-w-lg mx-auto rounded-2xl border border-gray-800 shadow-2xl shadow-indigo-950/30 overflow-hidden bg-black">

                    {/* title bar */}
                    <div className="bg-gray-950 border-b border-gray-800 px-5 py-3.5 flex items-center justify-between">
                        <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500 " />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 " />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 " />
                        </div>
                        <Logo dark={true} width={80} />
                        <span className="text-xs text-gray-500">2 left</span>
                    </div>
                    {/* greetings */}
                    <div className="px-5 pt-5 pb-3">
                        <p className="font-serif text-base">Welcome back, <em className="text-fuchsia-400 italic">Tanishk</em></p>
                        <p className="text-xs text-gray-600 mt-0.5">2 tasks remaining.</p>
                    </div>
                    {/* add btn */}
                    <div className="px-5 pb-4">
                        <div className="flex items-center gap-3 border border-gray-800 hover:border-gray-600 hover:text-white rounded-xl px-4 py-3 text-gray-700 text-xs">
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M6 1v10M1 6h10" />
                            </svg>
                            New task
                        </div>
                    </div>

                    {/* tasks */}
                    <div className="px-5 pb-5 flex flex-col gap-2">
                        {/* pending */}
                        <div className="flex items-start gap-3 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3">
                            <span className="mt-0.5 w-4 h-4 rounded-full border border-gray-600 " />
                            <div>
                                <p className="text-xs font-medium text-white">Buy groceries</p>
                                <p className="text-xs text-gray-600 mt-0.5">Milk, eggs, bread, fruits and vegetables.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3">
                            <span className="mt-0.5 w-4 h-4 rounded-full border border-gray-600 flex-shrink-0" />
                            <div>
                                <p className="text-xs font-medium text-white">Go for a run</p>
                                <p className="text-xs text-gray-600 mt-0.5">30 minutes morning run in the park.</p>
                            </div>
                        </div>
                        {/* done */}
                        <div className="flex items-start gap-3 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 opacity-50">
                            <span className="mt-0.5 w-4 h-4 rounded-full bg-indigo-600 border-indigo-600 border flex-shrink-0 flex items-center justify-center">
                                <svg width="7" height="7" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 5l2.5 2.5L8 3" />
                                </svg>
                            </span>
                            <p className="text-xs font-medium text-gray-600 line-through">Send weekly team update</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 pb-28 max-w-4xl mx-auto">
                <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6  ">
                    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-indigo-700/60 hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-sm font-medium text-white mb-2">Add fast</h3>
                        <p className="text-sm text-gray-500">Create tasks with a title and description in seconds.</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-indigo-700/60 hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-lg font-medium text-fuchsia-400 mb-2">Stay on track</h3>
                        <p className="text-sm text-gray-500">Mark tasks done, edit anytime, delete when finished.</p>
                    </div>
                    <div className="bg-gray-900 border text-fuchsia-400 border-gray-800 rounded-2xl p-8 hover:border-indigo-700/60 hover:bg-gray-800 hover:-translate-y-1 duration-300">
                        <h3 className="text-sm font-medium text-fl mb-2">Works anyhwhere</h3>
                        <p className="text-sm text-white">Fully responsive on desktop, tablet, and mobile.</p>
                    </div>
                </div>

            </section>




        </div>
    )
}
export default Landing


