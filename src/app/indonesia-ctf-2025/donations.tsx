import Image from "next/image";
import Bocchi from "../../../public/bochi_duit.jpg";
import Link from "next/link";

export function Donator() {
    const donators = [
        {
            name: "Bocchi",
            text: '"Mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu" -Bocchi',
            image: Bocchi,
            url: "https://youtu.be/PYtsD-X_UiQ",
            donate: "Rp 1.000.000"
        },
    ];

    return (
        <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {donators.map((donator, index) => (
                <div key={index} className="card shadow-lg">
                    <figure className="px-10 pt-10 w-full flex justify-center">
                        <Link href={donator.url} target="_blank">
                            <div className="w-[250px] h-[250px] relative">
                                <Image
                                    src={donator.image}
                                    alt={donator.name}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                />
                            </div>
                        </Link>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{donator.name}</h2>
                        <p>{donator.text}</p>
                        <p className="text-lg font-semibold text-green-600">
                            Donation: {donator.donate}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
