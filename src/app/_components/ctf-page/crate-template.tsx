"use client";
import Script from "next/script";

interface CrateScriptProps {
    server: string;
    channel: string;
}

const CrateScript: React.FC<CrateScriptProps> = ({ server, channel }) => {
    return (
        <Script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" dangerouslySetInnerHTML={{
            __html: `
                new Crate({
                    server: '${server}', 
                    channel: '${channel}' 
                })
            `
        }}>
        </Script>
    );
};

export default CrateScript;
