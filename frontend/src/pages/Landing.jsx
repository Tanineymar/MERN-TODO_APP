import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/Logo"
// import {Github , Linkdein} from "lucide-react"


function Landing() {
    const [scrolled, setScrolled] = useState(false)


    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", fn)
        return () => window.removeEventListener("scroll", fn)
    }, [])


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
                    <Link className="w-full sm:w-auto border border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white text-sm px-8 py-3.5 rounded-xl transition-colors">See how it works</Link>
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
                            <span className="mt-0.5 w-4 h-4 rounded-full border border-gray-600 shrink-0" />
                            <div>
                                <p className="text-xs font-medium text-white">Go for a run</p>
                                <p className="text-xs text-gray-600 mt-0.5">30 minutes morning run in the park.</p>
                            </div>
                        </div>
                        {/* done */}
                        <div className="flex items-start gap-3 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 opacity-50">
                            <span className="mt-0.5 w-4 h-4 rounded-full bg-indigo-600 border-indigo-600 border shrink-0 flex items-center justify-center">
                                <svg width="7" height="7" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 5l2.5 2.5L8 3" />
                                </svg>
                            </span>
                            <p className="text-xs font-medium text-gray-600 line-through">Send weekly team update</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="px-6 pb-28 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                    <div className="relative bg-linear-to-br from-indigo-950/80 to-gray-900 border border-indigo-800/40 rounded-2xl p-6 hover:border-indigo-500/60 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                        <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="w-8 h-8 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-medium text-white mb-2">Add fast</h3>
                        <p className="text-sm text-indigo-200/50">Create tasks with a title and description in seconds.</p>
                    </div>

                    <div className="relative bg-linear-to-br from-violet-950/80 to-gray-900 border border-violet-800/40 rounded-2xl p-6 hover:border-violet-500/60 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                        <div className="absolute inset-0 bg-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="w-8 h-8 bg-violet-600/20 rounded-lg flex items-center justify-center mb-4">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 12l2 2 4-4" />
                                <rect x="3" y="3" width="18" height="18" rx="4" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-medium text-white mb-2">Stay on track</h3>
                        <p className="text-sm text-violet-200/50">Mark tasks done, edit anytime, delete when finished.</p>
                    </div>

                    <div className="relative bg-linear-to-br from-fuchsia-950/80 to-gray-900 border border-fuchsia-800/40 rounded-2xl p-6 hover:border-fuchsia-500/60 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                        <div className="absolute inset-0 bg-fuchsia-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="w-8 h-8 bg-fuchsia-600/20 rounded-lg flex items-center justify-center mb-4">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e879f9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="3" />
                                <path d="M16 7V5a2 2 0 0 0-4 0v2" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-medium text-white mb-2">Works anywhere</h3>
                        <p className="text-sm text-fuchsia-200/50">Fully responsive on desktop, tablet, and mobile.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 pb-28 max-w-4xl mx-auto">
                <div className="bg-linear-to-br from-violet-900 to-indigo-700 rounded-3xl px-10 py-16 text-center">
                    <h2 className="font-serif text-3xl font-normal text-white mb-3" style={{ letterSpacing: "-0.03em" }}>Ready to get started?</h2>
                    <p className="text-indigo-200 text-sm mb-8">
                        Join thousands staying productive with Taskly.
                    </p>
                    <Link to="/register" className="inline-block bg-white text-indigo-700 font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-indigo-50 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-white/20 transition-colours ">
                        Create free account
                    </Link>

                </div>
            </section>
           {/* Footer */}
<section className="border-t border-gray-800 px-6 py-8 text-center">
    <p className="text-md text-gray-500">© 2026 Taskly.</p>

    <div className="flex items-center justify-center gap-4 mt-3">
        
           <a href="https://github.com/Tanineymar"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
        >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#e2e8f0">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
        </a>
        
           <a href="https://www.linkedin.com/in/tanishk-panchal-6694a0373?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
        >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#0a66c2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        </a>
    </div>
        <p className="text-sm text-gray-600 mt-3">Made with ❤️ by Tanishk Panchal</p>
</section>
        </div >
    )
}
export default Landing


