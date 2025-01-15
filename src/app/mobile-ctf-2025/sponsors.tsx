import Image, { StaticImageData } from "next/image";
import GoogleImage from "../../../public/Google-Cloud-Emblem.png";
import SeccodeId from "../../../public/secodeid.jpeg";
import OffSec from "../../../public/OffSec_Tagline_White_Text.png";
import Archonlabs from "../../../public/Archonlabs.png";
import OtterSec from "../../../public/ottersec.jpg";
import Seclab from "../../../public/seclab.svg";
import SponsorCard from "../_components/ctf-page/sponsor-card";

interface SponsorItem {
    name: string;
    text: string;
    image: StaticImageData;
    url: string;
    contribution: string;
}

const sponsors: SponsorItem[] = [
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

export default sponsors;
