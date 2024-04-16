import Image from "next/image"
import GoogleImage from "../../../public/Google-Cloud-Emblem.png"

export function Sponsor() {
    const sponsors = [
        {
            name: "Google",
            text: "Infra sponsored by goo.gle/ctfsponsorship",
            image: GoogleImage
        },
    ]
    return <>
        <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 gap-4">
            {sponsors.map((sponsor, _index) => (
                <div className="card w-96">
                    <figure className="px-10 pt-10">
                        <Image src={sponsor.image} alt={sponsor.text}></Image>
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
