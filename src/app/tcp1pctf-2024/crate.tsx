"use client"
import Script from "next/script";

export function CrateTemplate() {
    return <>
    <Script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" dangerouslySetInnerHTML={{
        __html: `
        new Crate({
            server: '299881420891881473',
            channel: '355719584830980096'
        })`
    }}>
    </Script>
    </>
}
