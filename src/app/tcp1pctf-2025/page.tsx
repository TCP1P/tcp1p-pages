import { Categories } from "./categories";
import { Countdown } from "./countdown";
import { CrateTemplate } from "./crate";
import { Donator } from "./donations";
import { FAQ } from "./faq";
import { Sponsor } from "./sponsors";

export default function Page() {
    const ctfDate = new Date("2025-10-11").getTime();
    return (
        <main className="flex-1 pt-24 px-4 sm:px-6 lg:px-8 relative z-10">
            <CrateTemplate />
            <div className="flex flex-col">
                <div className="lg:w-8/12 md:w-10/12 self-center text-center mx-4">
                    <div className="items-center">
                        <h1 className="text-6xl text-white mb-16">TCP1P CTF 2025</h1>
                        <div className="mb-12">
                            <Countdown endDate={ctfDate} />
                        </div>
                        <p className="text-gray-300 mb-8">Exploring Nusantara's Digital Realm</p>
                        <div className="divider mb-8"></div>
                        <p className="text-justify text-gray-400">
                            TCP1PCTF 2024 is an annual Capture The Flag (CTF) event organized by the TCP1P community. This marks the second edition of our international CTF event. This thrilling CTF follows a jeopardy-style format and encompasses a variety of challenges ranging in difficulty from easy to medium-high. Participants will have the opportunity to test their skills and knowledge across various categories, ensuring a diverse and engaging experience.
                        </p>
                    </div>
                    <section className="my-16 p-8">
                        <h2 className="text-4xl text-white mb-10">Categories</h2>
                        <div className="divider mb-10"></div>
                        <Categories />
                    </section>
                    <section className="my-16 p-8">
                        <h2 className="text-4xl text-white mb-10">FAQ</h2>
                        <div className="divider mb-10"></div>
                        <FAQ />
                    </section>
                    <section className="my-16 p-8">
                        <h2 className="text-4xl text-white mb-10">Call for Sponsorships</h2>
                        <div className="divider mb-10"></div>
                        <p className="text-gray-300">
                            The call for sponsorship for TCP1P-CTF 2024 is open! For more details contact us at <a className="link" href="mailto:tcp1pindo@gmail.com">tcp1pindo@gmail.com</a>.
                        </p>
                    </section>
                    <section className="my-16 p-8">
                        <h2 className="text-4xl text-white mb-10">Sponsors</h2>
                        <div className="divider mb-10"></div>
                        <Sponsor />
                    </section>
                    <section className="my-16 p-8">
                        <h2 className="text-4xl text-white mb-10">Donators</h2>
                        <div className="divider mb-10"></div>
                        <Donator />
                    </section>
                </div>
            </div>
        </main>
    );
}
