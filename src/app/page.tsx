import Link from "next/link";
import { timelineData } from "./ctfs/timeline";

const latestEvents = timelineData
  .flatMap((year) => year.months.flatMap((month) => month.events))
  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  .slice(0, 3);

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="site-main home-main">
      <section className="home-hero content-shell" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="signal-dot" /> Indonesian CTF community</p>
          <h1 id="home-title">Built to <em>break.</em><br />Here to learn.</h1>
          <p className="hero-description">
            TCP1P brings people together through Capture The Flag challenges, events, and shared resources.
          </p>
          <div className="hero-actions">
            <a className="action-link action-link-primary" href="https://tcp.1pc.tf/" target="_blank" rel="noopener noreferrer">
              Enter the playground <span aria-hidden="true">↗</span>
            </a>
            <a className="action-link action-link-secondary" href="https://discord.gg/KX3KnXQ5f5" target="_blank" rel="noopener noreferrer">
              Join the community <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true"><span>TCP</span><strong>1P</strong><small>CAPTURE THE FLAG / INDONESIA</small></div>
        <a className="scroll-cue" href="#explore">Scroll to explore <span aria-hidden="true">↓</span></a>
      </section>

      <section id="explore" className="content-shell home-section" aria-labelledby="explore-title">
        <div className="section-intro">
          <p className="eyebrow">01 / Find your way in</p>
          <h2 id="explore-title">Start somewhere.</h2>
          <p>Pick up a challenge, browse past events, or build with what the community shares.</p>
        </div>
        <div className="link-list">
          <a href="https://tcp.1pc.tf/" target="_blank" rel="noopener noreferrer" className="feature-link">
            <span className="feature-number">01</span><span className="feature-body"><strong>Playground</strong><span>Practice on TCP1P challenges.</span></span><span className="feature-arrow" aria-hidden="true">↗</span>
          </a>
          <Link href="/ctfs" className="feature-link">
            <span className="feature-number">02</span><span className="feature-body"><strong>CTF archive</strong><span>Explore events and challenge repositories.</span></span><span className="feature-arrow" aria-hidden="true">→</span>
          </Link>
          <Link href="/repositories" className="feature-link">
            <span className="feature-number">03</span><span className="feature-body"><strong>Open source</strong><span>See tools and projects from TCP1P.</span></span><span className="feature-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="content-shell home-section archive-preview" aria-labelledby="recent-title">
        <div className="section-intro">
          <p className="eyebrow">02 / From the archive</p>
          <h2 id="recent-title">Recent challenges.</h2>
          <Link className="text-link" href="/ctfs">View the full archive <span aria-hidden="true">→</span></Link>
        </div>
        <div className="preview-list">
          {latestEvents.map((event) => (
            <a key={event.repoUrl} href={event.repoUrl} target="_blank" rel="noopener noreferrer" className="preview-row">
              <time dateTime={new Date(`${event.date} UTC`).toISOString().slice(0, 10)}>{event.date}</time>
              <strong>{event.title}</strong>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
