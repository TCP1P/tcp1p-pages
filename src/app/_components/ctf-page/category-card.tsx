import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface CategoryCardProps {
    iconClass: any;
    text: string;
    description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ iconClass, text, description }) => {
    return (
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl border border-red-500/10 p-6 hover:border-red-400/30 transition-all duration-300">
            <div className="card-body items-center text-center text-white">
                <div className="w-12 h-12 bg-red-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={iconClass} className="text-red-400 text-3xl" />
                </div>
                <h2 className="card-title text-lg font-medium mb-2">{text}</h2>
                <p className="text-gray-400 mb-4">{description}</p>
            </div>
        </div>
    );
};

export default CategoryCard;
