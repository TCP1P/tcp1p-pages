import Image from "next/image";
import GoogleImage from "../../../public/Google-Cloud-Emblem.png";
import SeccodeId from "../../../public/secodeid.jpeg";
import OffSec from "../../../public/OffSec_Tagline_White_Text.png";
import Archonlabs from "../../../public/Archonlabs.png";
import OtterSec from "../../../public/ottersec.jpg";
import Seclab from "../../../public/seclab.svg";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export function Sponsor() {
    const sponsors = [
        {
            name: "Ottersec",
            text: "Originally independent security researchers, our team has a proven track record in both web3 and traditional security. We work closely with passionate teams to provide a holistic and collaborative approach to security.",
            image: OtterSec,
            url: "https://osec.io/",
            contribution: "$1000 for top 3 team and 2 best writeup"
        },
        {
            name: "OffSec",
            text: "Empowering individuals and organizations to fight cyber threats with indispensable cybersecurity skills and resources.",
            image: OffSec,
            url: "https://www.offsec.com/",
            contribution: "1x Learn Fundamentals Subscription, 2x Annual PG Practice subscription (6 months to redeem)."
        },
        {
            name: "Google",
            text: "Infra sponsored by goo.gle/ctfsponsorship",
            image: GoogleImage,
            url: "https://goo.gle/ctfsponsorship",
            contribution: "$500 GCP vouchers"
        },
        {
            name: "SecLab Indonesia",
            text: "PT. Negeri Seni Teknologi (seclab.id) is a cybersecurity consulting company that primarily focuses on specialized penetration testing, reverse engineering, and human development.",
            image: Seclab,
            url: "https://seclab.id/",
            contribution: "Merch + Rp. 3.000.000 for writeup in Bahasa Indonesia"
        },
        {
            name: "Archonlabs",
            text: "Archonlabs focuses on adversary simulation and training to help you strengthen your cyber defense and get ready for unforeseen attacks.",
            image: Archonlabs,
            url: "https://web.facebook.com/archonlabs.id/",
            contribution: "Rp. 3.000.000 for writeup in Bahasa Indonesia"
        },
        {
            name: "Seccodeid Forum",
            text: "Seccodeid Forum is a community of cybersecurity enthusiasts in Indonesia.",
            image: SeccodeId,
            url: "https://seccodeid.com/",
            contribution: ""
        },
    ];

    return (
        <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {sponsors.map((sponsor, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-xl rounded-xl border border-red-500/10 p-6 hover:border-red-400/30 transition-all duration-300">
                    <div className="text-center flex flex-col items-center">
                        <Link href={sponsor.url} target="_blank" className="w-[250px] h-[250px] relative mb-6">
                            <Image
                                src={sponsor.image}
                                alt={sponsor.name}
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                            />
                        </Link>
                        <h3 className="text-white text-lg font-medium mb-2">{sponsor.name}</h3>
                        <p className="text-gray-400 mb-4">{sponsor.text}</p>
                        <div className="bg-gray-800/50 rounded-lg p-4 mb-4 w-full">
                            <p className="text-gray-300">
                                <span className="text-red-400 text-xs">[CONTRIBUTION]</span>
                                <br />
                                {sponsor.contribution || "N/A"}
                            </p>
                        </div>
                        <a href={sponsor.url} target='_blank' className="text-red-400 cursor-pointer hover:text-red-300 transition-colors duration-300 flex items-center">
                            View More
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
