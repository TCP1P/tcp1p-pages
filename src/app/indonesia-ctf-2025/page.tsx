import categories from "./categories";
import faq from "./faq";
import sponsors from "./sponsors";
import donators from "./donations";
import MainContent from "../_components/ctf-page/main-content";

const Page: React.FC = () => {
    const ctfDate = new Date("2025-10-11");
    const title = "INDONESIA CTF 2025";
    const subtitle = "Bhinneka Tunggal Ika";
    const description = "INDONESIA CTF 2025 is an annual Capture The Flag (CTF) event organized by the CTF community from Indonesia. This marks the third edition of the TCP1P international CTF event, but it is the first time we have merged together to create the INDONESIA CTF event. This thrilling competition follows a jeopardy-style format and includes a variety of challenges, ranging from easy to medium-high in difficulty. Participants will have the opportunity to test their skills and knowledge across various categories, ensuring a diverse and engaging experience.";
    const callForSponsorshipText = "The call for sponsorship for INDONESIA CTF 2025 is open! For more details contact us at";
    const discordInviteLink = "https://discord.gg/Gj6h9TjN3D";

    const discord = {
        server: '1127235720629723176', // TCP1P-CTF
        channel: '1127238284075081808' // #announcement
    }

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
            sponsors={sponsors}
            donators={donators} discord={discord}
        />
    );
};

export default Page;
