import { faChain, faCloud, faGear, faLock, faQuestion, faSearch, faShield, faArchive } from "@fortawesome/free-solid-svg-icons";
import { CategoryCardProps } from "../_components/ctf-page/category-card";

const categories: CategoryCardProps[] = [
    {
        iconClass: faCloud,
        text: 'Web Exploitation',
        description: 'This category focuses on exploiting vulnerabilities in web applications and servers.'
    },
    {
        iconClass: faGear,
        text: 'Reverse Engineering',
        description: 'This category involves analyzing and understanding the functionality of compiled code or binary files.'
    },
    {
        iconClass: faLock,
        text: 'Cryptography',
        description: 'This category involves deciphering and breaking encryption techniques and algorithms.'
    },
    {
        iconClass: faArchive,
        text: 'Forensics',
        description: 'This category focuses on analyzing digital evidence and investigating cybercrimes.'
    },
    {
        iconClass: faQuestion,
        text: 'Misc',
        description: 'This category covers various challenges that don\'t fit into specific categories.'
    },
    {
        iconClass: faShield,
        text: 'Binary Exploitation',
        description: 'This category involves exploiting vulnerabilities in binary programs and systems.'
    },
    {
        iconClass: faChain,
        text: 'Blockchain',
        description: 'This category involves challenges related to blockchain technology.'
    },
    {
        iconClass: faSearch,
        text: 'OSINT',
        description: 'This category focuses on gathering information from publicly available sources.'
    }
]


export default categories