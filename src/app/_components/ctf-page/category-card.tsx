import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface CategoryCardProps {
    iconClass: any;
    text: string;
    description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ iconClass, text, description }) => {
    return (
        <div className="event-category">
            <FontAwesomeIcon icon={iconClass} className="event-category-icon" aria-hidden="true" />
            <h3>{text}</h3>
            <p>{description}</p>
        </div>
    );
};

export default CategoryCard;
