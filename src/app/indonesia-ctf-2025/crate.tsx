"use client"
import Script from "next/script";

export function CrateTemplate() {
    return <>
    <Script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" dangerouslySetInnerHTML={{
        __html: `
            new Crate({
                server: '1127235720629723176', // TCP1P-CTF
                channel: '1127238284075081808' // #announcement
            })
        `
    }}>
    </Script>
    </>
}
