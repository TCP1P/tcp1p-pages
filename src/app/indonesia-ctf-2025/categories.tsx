import { faChain, faCloud, faGamepad, faGear, faLock, faPhone, faQuestion, faSearch, faShield, faArchive } from "@fortawesome/free-solid-svg-icons";
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
        // {
        //     iconClass: faPhone,
        //     text: 'Mobile',
        //     description: 'This category deals with security challenges related to mobile applications and devices.'
        // },
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
        // {
        //     iconClass: faGamepad,
        //     text: 'Game Exploitation',
        //     description: 'This category features challenges related to game development and exploiting or bypassing game security.'
        // },
        {
            iconClass: faSearch,
            text: 'OSINT',
            description: 'This category focuses on gathering information from publicly available sources.'
        }
    ];

    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="bg-gray-900/50 backdrop-blur-xl rounded-xl border border-red-500/10 p-6 hover:border-red-400/30 transition-all duration-300">
                        <div className="card-body items-center text-center text-white">
                            <div className="w-12 h-12 bg-red-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <FontAwesomeIcon icon={category.iconClass} className="text-red-400 text-3xl" />
                            </div>
                            <h2 className="card-title text-lg font-medium mb-2">{category.text}</h2>
                            <p className="text-gray-400 mb-4">{category.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
