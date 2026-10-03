import { faBlog, faEnvelope, faHashtag } from "@fortawesome/free-solid-svg-icons";

export const repositories = [
    {
        title: "Paradigmctf Blockchain Infra Extended",
        repoUrl: "https://github.com/TCP1P/Paradigmctf-BlockChain-Infra-Extended",
        icon: faBlog,
        description: "Infrastructure for Paradigm CTF blockchain challenges, extended with a web interface and additional challenge setups.",
        note: "This repository is a fork of the original Paradigm CTF repository."
    },
    {
        title: "TCP1P Theme",
        repoUrl: "https://github.com/TCP1P/tcp1p-theme",
        icon: faHashtag,
        description: "The TCP1P Theme is a CTFd theme built based on the CTFd core-beta theme.",
        note: "This repository is a fork of the original CTFd core-beta theme."
    },
    {
        title: "Mobile POC Tester",
        repoUrl: "https://github.com/TCP1P/Mobile-POC-Tester",
        icon: faEnvelope,
        description: "A web application for testing CTF proofs of concept against vulnerable Android apps, with multiple challenges in a single emulator.",
        note: "Builds on TCP1P's CTF Mobile Exploitation project.",
        noteUrl: "https://github.com/TCP1P/CTF-Mobile-Exploitation"
    },
];
