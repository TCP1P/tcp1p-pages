import Card from "../_components/card";
import { repositories } from "./repositories";


const Repositories: React.FC = () => {

    return (
        <main className="flex-1 pt-24 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {repositories.map((feature, index) => (
                        <Card
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            note={feature.note}
                            repoUrl={feature.repoUrl}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Repositories;
