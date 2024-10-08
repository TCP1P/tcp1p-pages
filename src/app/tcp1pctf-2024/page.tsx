import { Categories } from "./categories";
import { Countdown } from "./countdown";
import { Donator } from "./donations";
import { FAQ } from "./faq";
import { Sponsor } from "./sponsors";
import Crate from "@widgetbot/crate"

export default function Page() {
    new Crate({
        server: '1127235720629723176', // TCP1P-CTF
        channel: '1127238284075081808' // #announcement
    })
    const ctfDate = new Date("2024-10-11").getTime()
    return <>
        <div className="flex flex-col gap-4">
            <div className="grid lg:w-8/12 md:w-10/12 self-center text-center gap-8 mx-4">
                <div className="items-center">
                    <h1 className="text-6xl">TCP1P CTF 2024</h1>
                    <p>Exploring Nusantara's Digital Realm</p>
                    <div className="flex flex-col w-full items-center mt-3">
                        <Countdown endDate={ctfDate}></Countdown>
                    </div>
                    <div className="divider"></div>
                    <p className="text-justify">TCP1PCTF 2024 is an annual Capture The Flag (CTF) event organized by the TCP1P community. This marks the second edition of our international CTF event. This thrilling CTF follows a jeopardy-style format and encompasses a variety of challenges ranging in difficulty from easy to medium-high. Participants will have the opportunity to test their skills and knowledge across various categories, ensuring a diverse and engaging experience.</p>
                </div>
                <div>
                    <h2 className="text-4xl">Categories</h2>
                    <div className="divider"></div>
                    <Categories></Categories>
                </div>
                <div>
                    <h2 className="text-4xl">FAQ</h2>
                    <div className="divider"></div>
                    <FAQ></FAQ>
                </div>
                <div>
                    <h2 className="text-4xl">Call for Sponsorships</h2>
                    <div className="divider"></div>
                    <p>The call for sponsorship for TCP1P-CTF 2024 is open! For more details contact us at <a className="link" href="mailto:tcp1pindo@gmail.com">tcp1pindo@gmail.com</a>.</p>
                </div>
                <div>
                    <h2 className="text-4xl">Sponsors</h2>
                    <div className="divider"></div>
                    <Sponsor></Sponsor>
                </div>
                <div>
                    <h2 className="text-4xl">Donators</h2>
                    <div className="divider"></div>
                    <Donator></Donator>
                </div>
            </div>
        </div>
    </>
}
