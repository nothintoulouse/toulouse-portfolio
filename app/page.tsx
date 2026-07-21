import Carousel from "./Carousel";
import { projects } from "./work";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#hero">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#hero" aria-label="Brayden Toulouse, top of page">
          <span>Brayden</span>
          <span>Toulouse</span>
        </a>
        <nav aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#method">Method</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="mailto:brayden@toulousemail.com">
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <main>
        {/* ---------------------------------------------------------- Hero */}
        <section className="panel g-paper" id="hero">
          <div className="inner hero-grid">
            <div>
              <p className="eyebrow">Applied AI · Operations · Project delivery</p>
              <h1>I turn operational problems into working systems.</h1>
              <p className="lede hero-lede">
                I lead hospitality operations and build tools around workflows I know
                firsthand. My strength is defining the problem, directing AI-assisted
                implementation, and verifying that the result works in practice.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  See the work <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="button button-secondary"
                  href="https://resume.toulouse.cloud"
                  target="_blank"
                  rel="noreferrer"
                >
                  View résumé <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <aside className="proof" aria-label="Selected evidence">
              <p className="proof-kicker">Evidence, not adjectives</p>
              <dl>
                <div>
                  <dt>20–40</dt>
                  <dd>employees regularly led or coordinated</dd>
                </div>
                <div>
                  <dt>≈15</dt>
                  <dd>daily users of a deployed operations platform</dd>
                </div>
                <div>
                  <dt>500+</dt>
                  <dd>automated tests in the flagship product</dd>
                </div>
                <div>
                  <dt>1</dt>
                  <dd>native iOS product shipped to the App Store</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        {/* ------------------------------------------------------ Carousel */}
        <Carousel projects={projects} />

        {/* -------------------------------------------------------- Method */}
        <section className="panel g-forest" id="method" aria-labelledby="m-h">
          <div className="inner">
            <p className="eyebrow">How I work</p>
            <h2 id="m-h">AI-assisted does not mean unowned.</h2>
            <p className="lede" style={{ marginTop: "1.1rem" }}>
              The tools accelerate implementation. Responsibility for the workflow,
              decisions, verification, and consequences stays with me.
            </p>
            <ol className="method-steps">
              <li>
                <span>01</span>
                <h3>Discover</h3>
                <p>Observe the real workflow, its users, exceptions, and cost of failure.</p>
              </li>
              <li>
                <span>02</span>
                <h3>Specify</h3>
                <p>
                  Define behavior, trust boundaries, acceptance criteria, and what stays
                  deterministic.
                </p>
              </li>
              <li>
                <span>03</span>
                <h3>Build</h3>
                <p>Direct agents, isolate work, review changes, and iterate against actual usage.</p>
              </li>
              <li>
                <span>04</span>
                <h3>Verify</h3>
                <p>Use tests, logs, synthetic cases, human approval, and post-action checks.</p>
              </li>
            </ol>

            <details className="ownership">
              <summary>What I personally own—and where AI assists</summary>
              <div className="ownership-grid">
                <div>
                  <h4>I own</h4>
                  <p>
                    Workflow discovery, requirements, system behavior, data rules, acceptance
                    criteria, task decomposition, review, deployment decisions, and iteration
                    with real users.
                  </p>
                </div>
                <div>
                  <h4>AI assists</h4>
                  <p>
                    Implementation, test generation, debugging, documentation, and code review
                    under a supervisor-and-subagent workflow.
                  </p>
                </div>
                <div>
                  <h4>I verify</h4>
                  <p>
                    Deterministic parsing, role behavior, failure handling, UI workflows, and
                    regression coverage against operational needs.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </section>

        {/* --------------------------------------------------------- About */}
        <section className="panel g-leather" id="about" aria-labelledby="a-h">
          <div className="inner">
            <div className="about-grid">
              <div>
                <p className="eyebrow">About</p>
                <h2 id="a-h">I came to technology from the floor, not the classroom.</h2>
              </div>
              <div className="about-copy">
                <p>
                  I regularly lead or coordinate 20–40 people in live hospitality operations,
                  where plans meet guests, deadlines, room turns, and imperfect information.
                  That background shapes how I build: the system has to be legible,
                  recoverable, and useful under pressure.
                </p>
                <p>
                  I&apos;m completing a B.S. in Hospitality Management at Texas A&amp;M
                  University, graduating December 2026, and targeting applied AI,
                  implementation, enablement, and operations-technology roles in Austin or
                  remotely. Extensive travel is welcome.
                </p>
                <div className="about-links">
                  <a href="https://github.com/nothintoulouse" target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/brayden-toulouse/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                  <a href="https://resume.toulouse.cloud" target="_blank" rel="noreferrer">
                    Résumé ↗
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-block" id="contact">
              <p className="eyebrow">Open to the right next step</p>
              <h2>Have a messy workflow worth fixing?</h2>
              <p className="lede" style={{ marginTop: "1rem" }}>
                I&apos;m interested in teams that value operational judgment, responsible AI
                adoption, and people who can translate between users and engineers.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href="mailto:brayden@toulousemail.com">
                  brayden@toulousemail.com <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Brayden Toulouse · College Station, Texas</span>
        <span>Built to show the work, including how AI assisted it.</span>
      </footer>
    </>
  );
}
