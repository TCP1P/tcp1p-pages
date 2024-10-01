import Image from "next/image";

import logo from '../../../public/TCP1P _Main White Red.svg'

export function LogoHeader() {
    return <>
        <div className="flex flex-col items-center">
            <Image src={logo} alt={"TCP1P Logo"} width={400} height={100}></Image>
            <p className="font-bold text-3xl">The CTF Player 1P</p>
            <p>CTF Team From Indonesia</p>
        </div>
    </>
}
