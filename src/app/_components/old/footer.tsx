import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import ctftimelogo from "../../../public/ctftime.png";
import ExternalLink from "../external-link";

export function TopFooter() {
    return (
        <footer className="footer footer-center p-10 text-base-content rounded">
            <nav>
                <div className="grid grid-flow-col gap-4 p-4">
                    <ExternalLink href="https://www.linkedin.com/company/tcp1p/" mode="red">
                        <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
                    </ExternalLink>
                    <ExternalLink href="https://github.com/TCP1P" mode="red">
                        <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                    </ExternalLink>
                    <ExternalLink href="https://ctftime.org/team/187248" mode="red">
                        <Image src={ctftimelogo} width={28} height={28} alt={"CTFtime"} />
                    </ExternalLink>
                    <ExternalLink href="mailto:tcp1pindo@gmail.com" mode="red">
                        <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
                    </ExternalLink>
                </div>
                <p>TCP1P • © 2024</p>
            </nav>
        </footer>
    );
}
