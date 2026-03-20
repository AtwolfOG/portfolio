"use client"
import type React from "react"
import type { JSX } from "react"

const Arrow: JSX.Element = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg>

export default function Footer(){
    return(
        <footer className="flex flex-col h-[90vh] text-[hsl(0,0,70%)] max-h-[600px] md:max-h-[500px] bg-background mt-10 px-5 pt-10 pb-20 md:px-20 md:py-10 gap-16">
            <div className="flex items-center justify-between">
                <p>© 2026</p>
                <div className="flex gap-3 items-center"><p className="">BACK TO TOP</p><div onClick={handleClick} className="bounce text-xl border rounded-full bg-[hsl(0,0,20%)] p-4">{Arrow}</div></div>
            </div>
            <div>
                <p className="opacity-70">HAVE A PROJECT IN MIND?</p>
                <h1 className="text-9xl! opacity-40">LET'S TALK</h1>
            </div>
            <div className="flex items-center flex-wrap gap-3 justify-between">
                <div className="flex gap-2">
                    <a href="https://github.com/AtwolfOG" className="flex" target="_blank" ><span style={{ "--content": `"GITHUB"`} as React.CSSProperties} className="text-sm btn-anim rounded-2xl px-2 py-1 opacity-75"><span>GITHUB</span></span></a>
                    <a href="https://x.com/AyokunleAdedapo" className="flex" target="_blank"><span style={{ "--content": `"TWITTER"`} as React.CSSProperties} className="text-sm btn-anim rounded-2xl px-2 py-1 opacity-75"><span>TWITTER</span></span></a>
                </div>
                <div>
                    <p>
                        <span className="opacity-70">Designed by </span><span>Atwolf</span>
                    </p>
                    <p>
                        <span className="opacity-70">Development by </span><span>Atwolf</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

function handleClick(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}