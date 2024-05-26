import Image from "next/image"
import GoogleImage from "../../../public/Google-Cloud-Emblem.png"
import SeccodeId from "../../../public/secodeid.jpeg"
import Link from "next/link"

export function Sponsor() {
    const sponsors = [
        {
            name: "Google",
            text: "Infra sponsored by goo.gle/ctfsponsorship",
            image: GoogleImage,
            url: "https://goo.gle/ctfsponsorship"
        },
        {
            name: "Seccodeid Forum",
            text: "Seccodeid Forum is a community of cybersecurity enthusiasts in Indonesia.",
            image: SeccodeId,
            url: "https://seccodeid.com/"
        }
    ]
    return <>
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
                    </div>
                </div>
            ))}
        </div>

    </>
}
