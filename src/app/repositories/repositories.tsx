import { faBlog, faEnvelope, faHashtag } from "@fortawesome/free-solid-svg-icons";

export const repositories = [
    {
        title: "Paradigmctf Blockchain Infra Extended",
        repoUrl: "https://github.com/TCP1P/Paradigmctf-BlockChain-Infra-Extended",
        icon: faBlog,
        description: "This repository contains the setup for Paradigm CTF blockchain challenges, based on the original repository. We've introduced new features, including a web interface and additional challenge setups.",
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
        description: "This repository contains the mobile Proof of Concept (POC) tester for CTF challenges. The POC tester is a web application that allows users to test their POCs against a vulnerable Android application. It supports multiple challenges within a single Android emulator.",
        note: "This repository is an upgrade of https://github.com/TCP1P/CTF-Mobile-Exploitation."
    },
];
