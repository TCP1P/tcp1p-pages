import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import ctftimelogo from "../../../public/ctftime.png"
export function TopFooter() {
    return <>
        <footer className="footer footer-center p-10 p-t text-base-content rounded">
            <nav>
                <div className="grid grid-flow-col gap-4 p-4">
                    <a href="https://www.linkedin.com/company/tcp1p/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="text-3xl" /></a>
                    <a href="https://github.com/TCP1P" target="_blank"><FontAwesomeIcon icon={faGithub} className="text-3xl" /></a>
                    <a href="https://ctftime.org/team/187248" target="_blank"><Image src={ctftimelogo} width={28} height={28} alt={"CTFtime"}></Image></a>
                    <a href="mailto:tcp1pindo@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="text-3xl" /></a>
                </div>
                <p>TCP1P • © 2024</p>
            </nav>
        </footer>
    </>
}
