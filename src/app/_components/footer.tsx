import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-shell footer-top">
        <div>
          <p className="eyebrow">Connect / TCP1P</p>
          <h2>See you at<br /><span>the next flag.</span></h2>
        </div>
        <nav className="footer-links" aria-label="TCP1P links">
          <a href="https://discord.gg/KX3KnXQ5f5" target="_blank" rel="noopener noreferrer">Discord <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/TCP1P" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href="https://ctftime.org/team/187248" target="_blank" rel="noopener noreferrer">CTFtime <span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/company/tcp1p/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">&#8599;</span></a>
          <a href="https://tcp.1pc.tf/" target="_blank" rel="noopener noreferrer">Playground <span aria-hidden="true">&#8599;</span></a>
          <a href="mailto:tcp1pindo@gmail.com">Email <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
      <div className="content-shell footer-bottom">
        <span>© {new Date().getFullYear()} TCP1P</span>
        <div><Link href="/">Home</Link><Link href="/ctfs">CTFs</Link><Link href="/repositories">Repositories</Link></div>
        <span>Capture the flag. Share the knowledge.</span>
      </div>
    </footer>
  );
}
