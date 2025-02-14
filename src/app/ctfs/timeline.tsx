import {
    faRocket,
    faGift,
    faCapsules,
    faAnchorLock,
    faHamburger,
    faHouseChimneyUser,
    faGamepad,
    faHandsHolding,
    faLadderWater,
    faTape
} from "@fortawesome/free-solid-svg-icons";
import ExternalLink from "../_components/external-link";
import { faSafari } from "@fortawesome/free-brands-svg-icons";

export const timelineData = [
    {
        year: "2025",
        months: [
            {
                name: "January",
                progress: 75,
                events: [
                    {
                        icon: faTape,
                        title: "TECHCOMPFEST 2025",
                        date: "Jan 6, 2025",
                        repoUrl: "https://github.com/TCP1P/TECHCOMPFEST-2025-PUBLIC",
                        description: "TECHCOMFEST CTF is a Capture The Flag (CTF) event organized by Politeknik Negeri Semarang in collaboration with TCP1P."
                    }
                ]
            },
        ]
    },
    {
        year: "2024",
        months: [
            {
                name: "October",
                progress: 85,
                events: [
                    {
                        icon: faSafari,
                        title: "Slashroot 8 CTF 2024",
                        date: "Oct 11, 2024",
                        repoUrl: "https://github.com/Kelompok-Studi-Linux-Stikom-Bali/slashroot-8-challs",
                        description: "Slashroot 8 CTF is a Capture The Flag (CTF) event organized by KSL (Kelompok Studi Linux) STIKOM Bali in collaboration with TCP1P."
                    }
                ]
            },
            {
                name: "October",
                progress: 90,
                events: [
                    {
                        icon: faRocket,
                        title: "TCP1P CTF 2024",
                        date: "Oct 11, 2024",
                        repoUrl: "https://github.com/TCP1P/TCP1P-CTF-2024-Challenges-Public",
                        description: "TCP1PCTF 2024 is an annual Capture The Flag (CTF) event organized by the TCP1P community. This marks the second edition of our international CTF event."
                    }
                ]
            },
            {
                name: "September",
                progress: 80,
                events: [
                    {
                        icon: faCapsules,
                        title: "INTECHFEST CTF 2024",
                        date: "Sep 09, 2024",
                        repoUrl: "https://github.com/TCP1P/INTECHFEST-CTF-2024-Challenges-Public",
                        description: "The Information and Technology Festival, also known as INTECFEST, is an event hosted by the Computer Club at Bali State Polytechnic. It consists of three main events: Web Design Competition, UI/UX Competition, and Capture The Flag (CTF)."
                    }
                ]
            },
            {
                name: "March",
                progress: 85,
                events: [
                    {
                        icon: faAnchorLock,
                        title: "TCP1P CTF Special Ramadhan 2024",
                        date: "Mar 09, 2024",
                        repoUrl: "https://github.com/TCP1P/TCP1P-CTF-Special-Ramadhan-2024",
                        description: "TCP1P Capture The Flag (CTF) is CTF playground event conducted during Ramadhan in 2024."
                    }
                ]
            },
        ]
    },
    {
        year: "2023",
        months: [
            {
                name: "December",
                progress: 80,
                events: [
                    {
                        icon: faHandsHolding,
                        title: "TECHCOMFEST 2024",
                        date: "Dec 20, 2023",
                        repoUrl: "https://github.com/TCP1P/TECHCOMFEST2024",
                        description: "TECHCOMFEST CTF is a Capture The Flag (CTF) event organized by Politeknik Negeri Semarang in collaboration with TCP1P."
                    },
                    {
                        icon: faGift,
                        title: "TCP1P Playground 2023",
                        date: "Dec 01, 2023",
                        repoUrl: "https://github.com/TCP1P/TCP1P-Playground-2023",
                        description: "TCP1P Playground is an event organized by TCP1P designed for learning purposes. It features easy to medium challenges in a variety of categories and is exclusively open to participants from Indonesia."
                    }
                ]
            },
            {
                name: "November",
                progress: 75,
                events: [
                    {
                        icon: faHamburger,
                        title: "Securi(e) The System 2023",
                        date: "Nov 29, 2023",
                        repoUrl: "https://github.com/TCP1P/SecureTheSystem2023",
                        description: "Securie The System CTF is organized by the University of Kuningan in collaboration with TCP1P."
                    }
                ]
            },
            {
                name: "October",
                progress: 85,
                events: [
                    {
                        icon: faHouseChimneyUser,
                        title: "TCP1P CTF 2023",
                        date: "Oct 13, 2023",
                        repoUrl: "https://github.com/TCP1P/TCP1P-CTF-2023-Challenges",
                        description: (
                            <>
                                TCP1PCTF 2023 took place in October 2023 and achieved a favorable rating on{" "}
                                <ExternalLink href="https://ctftime.org/event/2001" className="link" mode="red">
                                    CTFtime
                                </ExternalLink>

                                , with a score of 24.85.
                            </>
                        ),
                    },
                    {
                        icon: faLadderWater,
                        title: "Hology6",
                        date: "Oct 8, 2023",
                        repoUrl: "https://github.com/Hology6",
                        description: "Hology6 CTF is a Capture The Flag (CTF) event hosted by the Faculty of Computer Science at Brawijaya University."
                    }
                ]
            },
            {
                name: "September",
                progress: 55,
                events: [
                    {
                        icon: faGamepad,
                        title: "INTECHFEST CTF 2023",
                        date: "Sep 09, 2023",
                        repoUrl: "https://github.com/TCP1P/INTECHFEST-CTF-2023-Challenges",
                        description: "The Information and Technology Festival, also known as INTECFEST, is an event hosted by the Computer Club at Bali State Polytechnic. It consists of three main events: Web Design Competition, UI/UX Competition, and Capture The Flag (CTF)."
                    }
                ]
            }
        ]
    }
];
