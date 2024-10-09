import Image from "next/image"
import GoogleImage from "../../../public/Google-Cloud-Emblem.png"
import SeccodeId from "../../../public/secodeid.jpeg"
import OffSec from "../../../public/OffSec_Tagline_White_Text.png"
import Archonlabs from "../../../public/Archonlabs.png"
import OtterSec from "../../../public/ottersec.jpg"
import Seclab from "../../../public/seclab.svg"
import Link from "next/link"

export function Sponsor() {
    const sponsors = [
        {
            name: "Ottersec",
            text: "Originally independent security researchers, our team has a proven track record in both web3 and traditional security. We work closely with passionate teams to provide a holistic and collaborative approach to security.",
            image: OtterSec,
            url: "https://osec.io/",
            contribution: "$1000 for top 3 team and and 2 best writeup"
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
            text: "PT. Negeri Seni Teknologi (seclab.id) is cyber security consulting company that primarily focus on specialized penetration testing, reverse engineering and human development.",
            image: Seclab,
            url: "https://seclab.id/",
            contribution: "Merch + Rp. 3.000.000 for writeup bahasa Indonesia"
        },
        {
            name: "Archonlabs",
            text: "Archonlabs focuses on adversary simulation and training to help you strengthen your cyber defense and get ready for the unforeseen attacks.",
            image: Archonlabs,
            url: "https://web.facebook.com/archonlabs.id/",
            contribution: "Rp. 3.000.000 for writeup bahasa Indonesia"
        },
        {
            name: "Seccodeid Forum",
            text: "Seccodeid Forum is a community of cybersecurity enthusiasts in Indonesia.",
            image: SeccodeId,
            url: "https://seccodeid.com/",
        },
    ]
    return (
        <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {sponsors.map((sponsor, index) => (
                <div key={index} className="card shadow-lg">
                    <figure className="px-10 pt-10 w-full flex justify-center">
                        <Link href={sponsor.url} target="_blank">
                            <div className="w-[250px] h-[250px] relative">
                                <Image
                                    src={sponsor.image}
                                    alt={sponsor.name}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                />
                            </div>
                        </Link>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{sponsor.name}</h2>
                        <p>{sponsor.text}</p>
                        {sponsor.contribution && (
                            <div className="mt-4 px-4 py-2 bg-gray-800 rounded-lg shadow-inner">
                                <p className="text-sm text-gray-300">
                                    <strong>Contribution:</strong> {sponsor.contribution}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
