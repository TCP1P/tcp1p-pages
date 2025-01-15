import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface DonatorCardProps {
    name: string;
    text: string;
    image: StaticImageData;
    url: string;
    donate: string;
}

const DonatorCard: React.FC<DonatorCardProps> = ({ name, text, image, url, donate }) => {
    return (
        <div className="card shadow-lg">
            <figure className="px-10 pt-10 w-full flex justify-center">
                <Link href={url} target="_blank">
                    <div className="w-[250px] h-[250px] relative">
                        <Image
                            src={image}
                            alt={name}
                            layout="fill"
                            objectFit="contain"
                            quality={100}
                        />
                    </div>
                </Link>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{text}</p>
                <p className="text-lg font-semibold text-green-600">
                    Donation: {donate}
                </p>
            </div>
        </div>
    );
};

export default DonatorCard;
