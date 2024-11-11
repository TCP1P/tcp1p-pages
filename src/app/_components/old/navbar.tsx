"use client"
import Link from "next/link";


export function TopNavbar() {
    return <>
        <nav className="sticky">
            <div className="navbar">
                <div className="navbar-start">
                    <Link href="/" className="btn btn-ghost text-xl">TCP1P</Link>
                </div>
            </div>
        </nav>
    </>
}
