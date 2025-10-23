"use client";

import {
  applicationStats,
  emergingTrends,
  foundations,
  references,
  researchLeaders,
  stateOfArt,
  timeline
} from "@/data/research";

const formatList = (items) => items.join(" · ");

export default function Page() {
  return (
    <div className="page">
      <section className="hero">
        <h1>Machine Learning Research Landscape 2024</h1>
        <p>
          A curated synthesis of contemporary machine learning research: foundational concepts, frontier advances, emerging
          directions, and the institutions shaping the future. Designed as a launchpad for technical exploration and strategy.
        </p>
        <div className="meta">
          <span>Updated: June 2024</span>
          <span>Focus: Foundation Models · Responsible AI · Applied ML</span>
          <span>Audience: Researchers, Builders, Policy Leaders</span>
        </div>
      </section>

      <section>
        <h2>Foundational Pillars</h2>
        <div className="content-grid">
          {foundations.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="tag-grid">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>State of the Art</h2>
        <div className="content-grid">
          {stateOfArt.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul>
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Applied ML Market Signals</h2>
        <div className="gradient-border">
          <div className="inner">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Domain</th>
                  <th>Market Size</th>
                  <th>Growth</th>
                  <th>Key Insights</th>
                </tr>
              </thead>
              <tbody>
                {applicationStats.map((row) => (
                  <tr key={row.domain}>
                    <td>{row.domain}</td>
                    <td>{row.marketSize}</td>
                    <td>{row.growth}</td>
                    <td>{row.insights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2>Milestones Timeline</h2>
        <div className="timeline">
          {timeline.map((item) => (
            <div key={item.year} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <strong>{item.event}</strong>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Emerging Research Directions</h2>
        <div className="content-grid">
          {emergingTrends.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Research Leaders & Collaborations</h2>
        <div className="content-grid">
          {researchLeaders.map((org) => (
            <article key={org.name} className="card">
              <h3>{org.name}</h3>
              <p>{org.focus}</p>
              <div className="insight">
                <strong>Collaborations</strong>
                <span>{formatList(org.collaborations)}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="references">
        <h2>Key References</h2>
        <ul>
          {references.map((ref) => (
            <li key={ref.citation}>
              <span>{ref.label}</span>
              <a href={ref.url} target="_blank" rel="noreferrer">
                {ref.citation}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">Compiled by the Autonomous Research Agent · www</footer>
    </div>
  );
}
