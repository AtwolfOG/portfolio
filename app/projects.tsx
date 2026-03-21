"use client"
import Image from "next/image";
import type React from "react";

type projectType = {
    src: string, 
    title: string, 
    description: string, 
    link: string, 
    lang: string[], 
    additional?: string
}

const projectDetails: projectType[] = [
    {
        src: "/images/devora.png",
        title: "Devora",
        description: "Devora lets companies run live coding interviews with built-in video calls, coding environments, and structured challenges",
        link: "https://github.com/AtwolfOG/devora",
        lang: ["Go", "Javascript", "Nextjs", "TypeScript", "postgresql"],
        additional: "comming soon"
    },
    {
        src: "/images/gelnd.png",
        title: "Gelnd",
        description: "This is an analytics web app for christians to help manage their spiritual life",
        link: "https://github.com/AtwolfOG/gelnd",
        lang: ["Javascript", "Nextjs", "CSS", "TypeScript", "mongodb"],
        additional: "upcoming changes"
    },
    {
        src: "/images/cake.png",
        title: "Cake Ahoh",
        description: "This is a frontend demo for selling healthy made delicious cake",
        link: "https://cakeahoh.app/",
        lang: ["Javascript", "HTML", "CSS", "TypeScript"]
    },
    {
        src: "/images/sable_omega.png",
        title: "Sable Omega",
        description: "This is a landing page to seamlessly generate, customize, and perfect your designs with cutting-edge AI technology",
        link: "https://fun-sable-omega.vercel.app/",
        lang: ["Javascript", "HTML", "CSS", "React"]
    }
]

export default function Projects(){
    return(
        <article className="m-auto">
            <h2 className="text-center my-3">Projects</h2>

            <div className="grid project-con gap-4 justify-center  grid-cols-[repeat(auto-fit,_min(80vw,_450px)]">
                {projectDetails.map(({src, title, description, link, lang, additional})=><ProjectsCard key={title} src={src} title={title} description={description} link={link} lang={lang} additional={additional} />)}
            </div>
        </article>
    )
}

export function ProjectsCard({src, title, description, link, lang, additional}: projectType){
    return(
        <div className="relative">
            <div className="project-image-container w-[95vw] relative max-w-[450px] aspect-video ">
                <Image src={src} alt={title} fill/>
            </div>
            <div className="h-70 md:h-60 px-4 z-10 flex flex-col items-center justify-center gap-4 bg-[hsla(0,0,0,1)]">
                <div>
                    <h2 className="my-2">{title}</h2>
                    <p className="my-2 opacity-70">{description}</p>
                </div>
                <div className="flex justify-between gap-4 flex-wrap">
                    <div className="flex flex-wrap gap-2 ">
                        {lang.map((lang, index) => (
                            <span  style={{ '--content': `"${lang}"` } as React.CSSProperties}
                            className={`text-sm btn-anim rounded-2xl px-2 py-1 opacity-75`} key={index}>
                                <span className="">{lang}</span>
                                </span>
                        ))}
                    </div>
                    <a href={link} className="self-end text-sm opacity-75 link" target="_blank" rel="noopener noreferrer">View Project🔗</a>
                </div>
                {additional && <p className="absolute text-sm! opacity-70 text-(--destructive) top-5 left-5">{additional}</p>}
            </div>
        </div>
    )
}
