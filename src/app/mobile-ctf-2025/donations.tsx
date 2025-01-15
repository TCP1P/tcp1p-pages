import { StaticImageData } from "next/image";
import Bocchi from "../../../public/bochi_duit.jpg";

interface DonatorItem {
    name: string;
    text: string;
    image: StaticImageData;
    url: string;
    donate: string;
}

const donators: DonatorItem[] = [
    {
        name: "Bocchi",
        text: '"Mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu" -Bocchi',
        image: Bocchi,
        url: "https://youtu.be/PYtsD-X_UiQ",
        donate: "Rp 1.000.000"
    },
];

export default donators;
