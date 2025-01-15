import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export interface SponsorCardProps {
    name: string;
    text: string;
    image: StaticImageData;
    url: string;
    contribution: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, text, image, url, contribution }) => {
    return (
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl border border-red-500/10 p-6 hover:border-red-400/30 transition-all duration-300">
            <div className="text-center flex flex-col items-center">
                <Link href={url} target="_blank" className="w-[250px] h-[250px] relative mb-6">
                    <Image
                        src={image}
                        alt={name}
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                    />
                </Link>
                <h3 className="text-white text-lg font-medium mb-2">{name}</h3>
                <p className="text-gray-400 mb-4">{text}</p>
                <div className="bg-gray-800/50 rounded-lg p-4 mb-4 w-full">
                    <p className="text-gray-300">
                        <span className="text-red-400 text-xs">[CONTRIBUTION]</span>
                        <br />
                        {contribution || "N/A"}
                    </p>
                </div>
                <a href={url} target='_blank' className="text-red-400 cursor-pointer hover:text-red-300 transition-colors duration-300 flex items-center">
                    View More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
            </div>
        </div>
    );
};

export default SponsorCard;
