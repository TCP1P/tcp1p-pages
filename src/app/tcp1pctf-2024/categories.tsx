import { faChain, faCloud, faGamepad, faGear, faLock, faPhone, faQuestion, faSearch, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Categories() {
    const categories = [
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
            iconClass: faPhone,
            text: 'Mobile',
            description: 'This category deals with security challenges related to mobile applications and devices.'
        },
        {
            iconClass: faLock,
            text: 'Cryptography',
            description: 'This category involves deciphering and breaking encryption techniques and algorithms.'
        },
        {
            iconClass: faSearch,
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
            iconClass: faGamepad,
            text: 'Game Exploitation',
            description: 'This category features challenges related to game development and exploiting or bypassing game security.'
        }
    ];

    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="card w-full image-full">
                        <figure className="px-10 pt-10">
                            <FontAwesomeIcon icon={category.iconClass} className="text-7xl"></FontAwesomeIcon>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{category.text}</h2>
                            <p>{category.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
