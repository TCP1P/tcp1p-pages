"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Links {
    title: string,
    url: string
}

export function NavbarBelow() {
    const path = usePathname()
    function isActive(urlpath: string) {
        if (urlpath == path) {
            return "tab-active"
        }
        return ""
    }
    const links: Links[] = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "CTFs",
            url: "/ctfs"
        },
        {
            title: "Repositories",
            url: "/repositories"
        },
        // {
        //     title: "TCP1P CTF 2024",
        //     url: "/tcp1pctf-2024"
        // }
    ]
    return <>
        <div className="w-full flex justify-center mt-4">
            <div role="tablist" className="tabs tabs-boxed">
                {links.map(link => {
                    const active = isActive(link.url)
                    return (
                        <Link key={link.title} href={link.url} className={`tab ${active}`}>{link.title}</Link>
                    )
                })}
            </div>
        </div>
    </>
}
