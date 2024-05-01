import { TimelineProps, Timelines } from "./timeline";

export default function Page() {
    const ctfs: TimelineProps[] = [
        {
            title: "Intechfest CTF 2023",
            repoUrl: "https://github.com/TCP1P/INTECHFEST-CTF-2023-Challenges",
            date: new Date("2023-9-9"),
            children: "The Information and Technology Festival, also known as INTECFEST, is an event hosted by the Computer Club at Bali State Polytechnic. It consists of three main events: Web Design Competition, UI/UX Competition, and Capture The Flag (CTF)."
        },
        {
            title: "Hology6",
            repoUrl: "https://github.com/Hology6",
            date: new Date("2023-10-8"),
            children: "Hology6 CTF is a Capture The Flag (CTF) event hosted by the Faculty of Computer Science at Brawijaya University."
        },
        {
            title: "TCP1P CTF 2023",
            repoUrl: "https://github.com/TCP1P/TCP1P-CTF-2023-Challenges",
            date: new Date("2023-10-13"),
            children: (
                <>
                    TCP1PCTF 2023 took place in October 2023 and achieved a favorable rating on{" "}
                    <a href="https://ctftime.org/event/2001" className="link" target="_blank">
                        CTFtime
                    </a>
                    , with a score of 24.85.
                </>
            )
        },
        {
            title: "Securi(e) The System 2023",
            repoUrl: "https://github.com/TCP1P/SecureTheSystem2023",
            date: new Date("2023-11-29"),
            children: "Securie The System CTF is organized by the University of Kuningan in collaboration with TCP1P."
        },
        {
            title: "TCP1P Playground 2023",
            repoUrl: "https://github.com/TCP1P/TCP1P-Playground-2023",
            date: new Date("2023-12-1"),
            children: "TCP1P Playground is an event organized by TCP1P designed for learning purposes. It features easy to medium challenges in a variety of categories and is exclusively open to participants from Indonesia."
        },
        {
            title: "TECHCOMFEST 2024",
            repoUrl: "https://github.com/TCP1P/TECHCOMFEST2024",
            date: new Date("2023-12-20"),
            children: "TECHCOMFEST CTF is a Capture The Flag (CTF) event organized by Politeknik Negeri Semarang in collaboration with TCP1P."
        },
        {
            title: "TCP1P CTF Special Ramadhan 2024",
            repoUrl: "https://github.com/TCP1P/TCP1P-CTF-Special-Ramadhan-2024",
            date: new Date("2024-3-20"),
            children: "TCP1P Capture The Flag (CTF) is CTF playground event conducted during Ramadhan in 2024."
        }
    ];

    return (
        <>
            <div className="text-center">
                <h1 className="text-2xl">CTFs</h1>
                <p>We have organize and collaborate on multiple Capture The Flag (CTF) events. Here are the CTFs that we have organized and collaborated before:</p>
            </div>

            <div className="w-full flex flex-col mt-4">
                <div className="w-11/12 self-center">
                    <Timelines timelines={ctfs}></Timelines>
                </div>
            </div>
        </>
    );
}
