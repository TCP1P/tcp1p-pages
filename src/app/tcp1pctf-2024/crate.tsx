'use client'
import { useEffect } from "react";
import Crate from "@widgetbot/react-embed"

export function CrateTemplate() {
    useEffect(()=>{
        new Crate({
            server: '1127235720629723176', // TCP1P-CTF
            channel: '1127238284075081808' // #announcement
        })
    }, [])
    return <></>
}
