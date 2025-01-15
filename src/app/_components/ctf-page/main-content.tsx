import React from "react";
import CategoryCard, { CategoryCardProps } from "./category-card";
import FAQItem, { FAQItemProps } from "./faq-item";
import SponsorCard, { SponsorCardProps } from "./sponsor-card";
import DonatorCard, { DonatorCardProps } from "./donator-card";
import CrateScript from "./crate-template";
import Countdown from "./countdown";
import Section from "./section";
import ExternalLink from "../external-link";

interface MainContentProps {
    title: string;
    date: Date;
    subtitle: string;
    description: string;
    callForSponsorshipText: string;
    discordInviteLink: string;
    categories: CategoryCardProps[];
    faqs: FAQItemProps[];
    sponsors: SponsorCardProps[];
    donators: DonatorCardProps[];
    discord: {
        server: string;
        channel: string;
    };
}

const MainContent: React.FC<MainContentProps> = ({
    title,
    date,
    subtitle,
    description,
    callForSponsorshipText,
    discordInviteLink,
    categories,
    faqs,
    sponsors,
    donators,
    discord,
}) => {
    return (
        <main className="flex-1 pt-52 px-4 sm:px-6 lg:px-8 relative z-10">
            <CrateScript server={discord.server} channel={discord.channel} />
            <div className="flex flex-col">
                <div className="lg:w-8/12 md:w-10/12 self-center text-center mx-4">
                    <div className="items-center">
                        <h1 className="text-6xl text-white mb-16">{title}</h1>
                        {/* <div className="mb-12">
                            <Countdown endDate={date.getTime()} />
                        </div> */}
                        <p className="text-gray-300 mb-8">{subtitle}</p>
                        <div className="divider mb-8"></div>
                        <p className="text-justify text-gray-400">{description}</p>
                    </div>
                    <Section title="Categories">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                            {categories.map((category, index) => (
                                <CategoryCard 
                                    key={index}
                                    iconClass={category.iconClass}
                                    text={category.text}
                                    description={category.description}
                                />
                            ))}
                        </div>
                    </Section>
                    <Section title="FAQ">
                        <div className="grid gap-4">
                            {faqs.map((faq, index) => (
                                <FAQItem 
                                    key={index}
                                    text={faq.text}
                                    description={faq.description}
                                />
                            ))}
                        </div>
                    </Section>
                    <Section title="Call for Sponsorships">
                        <p className="text-gray-300">
                            {callForSponsorshipText} <a className="text-red-400 hover:text-red-300 transition-colors duration-300" href="mailto:tcp1pindo@gmail.com">tcp1pindo@gmail.com</a>.
                        </p>
                    </Section>
                    <Section title="Discord">
                        <p className="text-gray-300">
                            Join our Discord server for more information. Here is the link: <ExternalLink mode="red" href={discordInviteLink}>Discord</ExternalLink>.
                        </p>
                    </Section>
                    {/* <Section title="Sponsors">
                        <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                            {sponsors.map((sponsor, index) => (
                                <SponsorCard
                                    key={index}
                                    name={sponsor.name}
                                    text={sponsor.text}
                                    image={sponsor.image}
                                    url={sponsor.url}
                                    contribution={sponsor.contribution}
                                />
                            ))}
                        </div>
                    </Section>
                    <Section title="Donators">
                        <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                            {donators.map((donator, index) => (
                                <DonatorCard 
                                    key={index}
                                    name={donator.name}
                                    text={donator.text}
                                    image={donator.image}
                                    url={donator.url}
                                    donate={donator.donate}
                                />
                            ))}
                        </div>
                    </Section> */}
                </div>
            </div>
        </main>
    );
};

export default MainContent;
