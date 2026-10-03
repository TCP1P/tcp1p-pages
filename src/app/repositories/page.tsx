import { repositories } from "./repositories";

export default function Repositories() {
  return (
    <main id="main-content" tabIndex={-1} className="site-main content-shell interior-page">
      <div className="page-heading">
        <p className="eyebrow">TCP1P / Open source</p>
        <h1>Repositories<span className="heading-period">.</span></h1>
        <p>Tools and projects shared by TCP1P. Explore their source on GitHub.</p>
      </div>
      <div className="repository-list">
        {repositories.map((repository, index) => (
          <article className="repository-row" key={repository.repoUrl}>
            <span className="repository-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="repository-content">
              <h2>{repository.title}</h2>
              <p>{repository.description}</p>
              {repository.note && <p className="repository-note">{repository.noteUrl ? <a href={repository.noteUrl} target="_blank" rel="noopener noreferrer">{repository.note}</a> : repository.note}</p>}
            </div>
            <a href={repository.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${repository.title} on GitHub`} className="repository-link">View repository <span aria-hidden="true">↗</span></a>
          </article>
        ))}
      </div>
    </main>
  );
}
