import categories from "./categories";
import faq from "./faq";
import MainContent from "../_components/ctf-page/main-content";

const Page: React.FC = () => {
    const ctfDate = new Date("2025-10-11");
    const title = "MOBILE CTF 2025";
    const subtitle = "First Edition of Mobile CTF";
    const description = "MOBILE CTF 2025: the first edition of TCP1P's mobile security Capture The Flag event, featuring jeopardy-style challenges across a range of difficulty levels.";
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
