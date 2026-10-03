import Link from "next/link";
import CategoryCard, { CategoryCardProps } from "./category-card";
import FAQItem, { FAQItemProps } from "./faq-item";
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
}

export default function MainContent({
  title, date, subtitle, description, callForSponsorshipText,
  discordInviteLink, categories, faqs,
}: MainContentProps) {
  return (
    <main id="main-content" tabIndex={-1} className="site-main content-shell interior-page event-page">
      <div className="page-heading">
        <p className="eyebrow">TCP1P / Event archive</p>
        <h1>{title}<span className="heading-period">.</span></h1>
        <p className="event-subtitle">{subtitle}</p>
        <p className="event-held"><time dateTime={date.toISOString().slice(0, 10)}>{date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</time></p>
      </div>
      <div className="event-overview">
        <p>{description}</p>
        <Link className="text-link" href="/ctfs">Browse CTF archive <span aria-hidden="true">→</span></Link>
      </div>
      <Section title="Categories">
        <div className="event-category-grid">
          {categories.map((category) => <CategoryCard key={category.text} {...category} />)}
        </div>
      </Section>
      <Section title="FAQ">
        <div className="event-faq-list">
          {faqs.map((faq) => <FAQItem key={faq.text} {...faq} />)}
        </div>
      </Section>
      <Section title="Connect">
        <p>{callForSponsorshipText} <a href="mailto:tcp1pindo@gmail.com">tcp1pindo@gmail.com</a>.</p>
        <p>Find community updates on <ExternalLink mode="red" href={discordInviteLink}>Discord</ExternalLink>.</p>
      </Section>
    </main>
  );
}
