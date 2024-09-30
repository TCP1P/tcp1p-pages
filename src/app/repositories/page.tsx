import { Box, BoxProps } from "./box";

export default function Page() {
    const repositories: BoxProps[] = [
        {
            title: "Paradigmctf Blockchain Infra Extended",
            repoUrl: "https://github.com/TCP1P/Paradigmctf-BlockChain-Infra-Extended",
            children: "This repository contains the setup for Paradigm CTF blockchain challenges, based on the original repository. We've introduced new features, including a web interface and additional challenge setups."
        },
        {
            title: "TCP1P Theme",
            repoUrl: "https://github.com/TCP1P/tcp1p-theme",
            children: "The TCP1P Theme is a CTFd theme built based on the CTFd core-beta theme."
        },
        {
            title: "Mobile POC Tester",
            repoUrl: "https://github.com/TCP1P/Mobile-POC-Tester",
            children: "This repository contains the mobile Proof of Concept (POC) tester for CTF challenges. The POC tester is a web application that allows users to test their POCs against a vulnerable Android application. It supports multiple challenges within a single Android emulator."
        },
    ];

    return (
        <>
            <div className="text-center">
                <h1 className="text-2xl">Repositories</h1>
                <p>We have several repositories that we use in our Capture The Flag (CTF) event, listed below:</p>
            </div>
            <div className="w-full flex flex-col mt-4">
                <div className="w-11/12 grid lg:grid-cols-3 md:grid-cols-2 gap-3 self-center">
                    {repositories.map((repo, index) => (
                        <Box key={index} title={repo.title} repoUrl={repo.repoUrl}>
                            {repo.children}
                        </Box>
                    ))}
                </div>
            </div>
        </>
    );
}
