import categories from "./categories";
import faq from "./faq";
import MainContent from "../_components/ctf-page/main-content";

const Page: React.FC = () => {
    const ctfDate = new Date("2025-10-11");
    const title = "INDONESIA CTF 2025";
    const subtitle = "Bhinneka Tunggal Ika";
    const description = "INDONESIA CTF 2025: a jeopardy-style competition organized by the Indonesian CTF community. The third edition of TCP1P's international CTF event and the first under the INDONESIA CTF name, featuring challenges across a range of categories and difficulty levels.";
    const callForSponsorshipText = "For event inquiries, contact us at";
    const discordInviteLink = "https://discord.gg/KX3KnXQ5f5";


    return (
        <MainContent
            title={title}
            date={ctfDate}
            subtitle={subtitle}
            description={description}
            callForSponsorshipText={callForSponsorshipText}
            discordInviteLink={discordInviteLink}
            categories={categories}
            faqs={faq}
        />
    );
};

export default Page;
