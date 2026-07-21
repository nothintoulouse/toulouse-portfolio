import Image from "next/image";

const appStoreUrl = "https://apps.apple.com/app/id6783075252";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Brayden Toulouse, home">
          <span className="wordmark-mark">BT</span>
          <span>Brayden Toulouse</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#method">Method</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="mailto:brayden@toulousemail.com">
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Applied AI · Operations · Project delivery</p>
            <h1>I turn operational problems into working systems.</h1>
            <p className="hero-lede">
              I lead hospitality operations and build tools around workflows I know
              firsthand—from live event execution to voice inventory and personal
              agents. My strength is defining the problem, directing AI-assisted
              implementation, and verifying that the result works in practice.
            </p>
            <div className="hero-actions" aria-label="Portfolio actions">
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

          <aside className="hero-proof" aria-label="Selected evidence">
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
        </section>

        <section className="section flagship" id="work">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Flagship case study · deployed operations software</p>
              <h2>The operating layer Delphi didn&apos;t provide.</h2>
            </div>
            <p>
              BEO Dashboard turns a scheduled enterprise report into a fast,
              mobile operational view for the people setting rooms, reading event
              orders, and responding to changes in real time.
            </p>
          </div>

          <div className="case-layout">
            <div className="case-narrative">
              <div className="case-block">
                <p className="case-label">The problem</p>
                <p>
                  Amadeus Delphi contained the source data, but its exported event
                  detail was too slow and fragmented for banquet leaders moving
                  through a 30,000-square-foot operation.
                </p>
              </div>
              <div className="case-block">
                <p className="case-label">The system</p>
                <ol className="flow" aria-label="BEO Dashboard data flow">
                  <li>Scheduled browser export</li>
                  <li>Deterministic validation</li>
                  <li>Operational data layer</li>
                  <li>Mobile team interface</li>
                </ol>
              </div>
              <div className="case-block case-results">
                <p className="case-label">What changed</p>
                <ul>
                  <li>Event details became available from any browser.</li>
                  <li>Rooms, assignments, diagrams, and status moved into one view.</li>
                  <li>Approximately 15 colleagues now use it each day.</li>
                </ul>
              </div>
            </div>

            <div className="product-window" aria-label="Synthetic BEO Dashboard preview">
              <div className="window-bar">
                <span className="window-brand">
                  <Image
                    src="/beo-dashboard-icon.png"
                    alt=""
                    width={512}
                    height={512}
                  />{" "}
                  BEO Dashboard
                </span>
                <span className="demo-label">Synthetic demonstration</span>
              </div>
              <div className="window-body">
                <div className="demo-date">
                  <span>Tuesday</span>
                  <strong>July 21</strong>
                  <small>5 events · 3 spaces</small>
                </div>
                <div className="demo-events">
                  <article className="demo-event demo-event-green">
                    <div>
                      <span className="demo-time">7:30–9:00 AM</span>
                      <h3>Leadership Breakfast Buffet</h3>
                      <p>Bluebonnet Ballroom 1 &amp; 2 · Rounds of 8</p>
                    </div>
                    <span className="demo-count">160 G</span>
                  </article>
                  <article className="demo-event demo-event-blue">
                    <div>
                      <span className="demo-time">9:15 AM–12:30 PM</span>
                      <h3>Leadership Breakouts</h3>
                      <p>Mockingbird B, C &amp; D · Classroom</p>
                    </div>
                    <span className="demo-chip">Diagram</span>
                  </article>
                  <article className="demo-event demo-event-gold">
                    <div>
                      <span className="demo-time">6:00–10:00 PM</span>
                      <h3>Awards Dinner &amp; Program</h3>
                      <p>Bluebonnet Ballroom 3–7 · Rounds of 10</p>
                    </div>
                    <span className="demo-chip">Dietary</span>
                  </article>
                </div>
                <div className="demo-footer">
                  <span>All displayed event and client information is fictional.</span>
                  <span>Last import 8:32 AM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="case-evidence" aria-label="BEO Dashboard evidence">
            <div>
              <span>Stack</span>
              <strong>Next.js · TypeScript · Postgres · Playwright</strong>
            </div>
            <div>
              <span>Reliability</span>
              <strong>Role controls · logs · 500+ automated tests</strong>
            </div>
            <div>
              <span>Deployment</span>
              <strong>Production use · scheduled ingestion · Vercel</strong>
            </div>
          </div>

          <details className="ownership">
            <summary>What I personally owned—and where AI assisted</summary>
            <div className="ownership-grid">
              <div>
                <h3>I owned</h3>
                <p>
                  Workflow discovery, requirements, system behavior, data rules,
                  acceptance criteria, task decomposition, review, deployment
                  decisions, and iteration with real users.
                </p>
              </div>
              <div>
                <h3>AI assisted</h3>
                <p>
                  Implementation, test generation, debugging, documentation, and
                  code review under a supervisor-and-subagent workflow.
                </p>
              </div>
              <div>
                <h3>I verified</h3>
                <p>
                  Deterministic parsing, role behavior, failure handling, UI
                  workflows, and regression coverage against operational needs.
                </p>
              </div>
            </div>
          </details>
        </section>

        <section className="section more-work" aria-labelledby="more-work-heading">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Selected product and enablement work</p>
              <h2 id="more-work-heading">Range, with a consistent method.</h2>
            </div>
            <p>
              Different interfaces, same discipline: start with the workflow,
              keep deterministic work deterministic, and make uncertainty visible.
            </p>
          </div>

          <article className="project project-see-also">
            <div className="project-copy">
              <p className="project-number">01 · Native product</p>
              <Image
                className="see-also-wordmark"
                src="/see-also-wordmark.png"
                alt="See Also"
                width={1200}
                height={383}
              />
              <h3>A calmer way to follow a Wikipedia rabbit hole.</h3>
              <p>
                A paid native iOS reader with nearby discovery, offline bookmarks,
                accessibility support, and five reading styles. I managed product
                definition, iterative review, App Store submission, and release
                operations through an AI-assisted SwiftUI workflow.
              </p>
              <ul className="inline-list" aria-label="See Also technologies">
                <li>SwiftUI</li>
                <li>SwiftData</li>
                <li>MapKit</li>
                <li>CoreLocation</li>
              </ul>
              <a className="text-link" href={appStoreUrl} target="_blank" rel="noreferrer">
                View on the App Store <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="reader-preview" aria-label="Abstract See Also reading interface preview">
              <div className="reader-phone">
                <div className="reader-status">9:41</div>
                <div className="reader-cover">
                  <span>Nearby discovery</span>
                  <strong>The stories around you.</strong>
                </div>
                <div className="reader-article">
                  <small>FEATURED ARTICLE</small>
                  <h4>Brazos Valley</h4>
                  <p>
                    Follow the people, places, and ideas that connect one article
                    to the next.
                  </p>
                  <span className="reader-action">Begin reading →</span>
                </div>
              </div>
            </div>
          </article>

          <div className="project-pair">
            <article className="project project-voice">
              <p className="project-number">02 · Applied AI prototype</p>
              <div className="voice-visual" aria-hidden="true">
                {[18, 36, 62, 28, 76, 48, 88, 40, 68, 32, 54, 22].map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
              <h3>Voice Inventory Assistant</h3>
              <p>
                Converts spoken bar counts into an existing inventory workbook
                using speech recognition, deterministic count grammar, fuzzy
                matching, confidence scoring, and a human review queue.
              </p>
              <div className="project-metrics">
                <span><strong>87.5%</strong> first synthetic auto-fill</span>
                <span><strong>88</strong> automated tests</span>
              </div>
            </article>

            <article className="project project-agent">
              <p className="project-number">03 · Agent systems</p>
              <div className="agent-flow" aria-label="LAUTREC flow">
                <span>iMessage</span><b>→</b><span>Queue</span><b>→</b><span>Agent</span><b>→</b><span>Tools</span>
              </div>
              <h3>LAUTREC &amp; Multi-Model CLI</h3>
              <p>
                A queue-aware personal-agent harness that reconstructs long-running
                context, suppresses superseded drafts, and routes authorized requests
                into calendar, email, task, media, and development workflows.
              </p>
              <ul className="inline-list" aria-label="Agent system technologies">
                <li>Claude Code</li>
                <li>Codex</li>
                <li>Gemini</li>
                <li>BlueBubbles</li>
              </ul>
            </article>
          </div>

          <article className="training-project">
            <div className="training-image-wrap">
              <Image
                src="/training-pour-standards.png"
                alt="Training slide explaining a 1.25 ounce banquet pour standard"
                width={1600}
                height={900}
              />
            </div>
            <div>
              <p className="project-number">04 · Training &amp; enablement</p>
              <h3>Operational knowledge, made teachable.</h3>
              <p>
                I designed a 31-slide bartender learning program combining explicit
                objectives, instruction, demonstration, case studies, an assessment,
                and job aids. It turns unwritten expectations into a repeatable training
                experience focused on consistency, safety, and professional service.
              </p>
              <dl className="training-facts">
                <div><dt>31</dt><dd>slides</dd></div>
                <div><dt>7</dt><dd>learning sections</dd></div>
                <div><dt>3</dt><dd>delivery modes: lecture, lab, practicum</dd></div>
              </dl>
            </div>
          </article>
        </section>

        <section className="section method" id="method">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">How I work</p>
              <h2>AI-assisted does not mean unowned.</h2>
            </div>
            <p>
              The tools accelerate implementation. Responsibility for the workflow,
              decisions, verification, and consequences stays with me.
            </p>
          </div>
          <ol className="method-steps">
            <li>
              <span>01</span>
              <h3>Discover</h3>
              <p>Observe the real workflow, its users, exceptions, and cost of failure.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Specify</h3>
              <p>Define behavior, trust boundaries, acceptance criteria, and what stays deterministic.</p>
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
        </section>

        <section className="section about" id="about">
          <div className="about-statement">
            <p className="eyebrow">About</p>
            <h2>I came to technology from the floor, not the classroom.</h2>
          </div>
          <div className="about-copy">
            <p>
              I regularly lead or coordinate 20–40 people in live hospitality
              operations, where plans meet guests, deadlines, room turns, and
              imperfect information. That background shapes how I build: the system
              has to be legible, recoverable, and useful under pressure.
            </p>
            <p>
              I&apos;m completing a B.S. in Hospitality Management at Texas A&amp;M
              University and targeting applied AI, implementation, enablement, and
              operations-technology roles in Austin or remotely. Extensive travel is
              welcome.
            </p>
            <div className="about-links">
              <a href="https://github.com/nothintoulouse" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/brayden-toulouse/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://resume.toulouse.cloud" target="_blank" rel="noreferrer">Résumé ↗</a>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">Open to the right next step</p>
          <h2>Have a messy workflow worth fixing?</h2>
          <p>
            I&apos;m interested in teams that value operational judgment, responsible
            AI adoption, and people who can translate between users and engineers.
          </p>
          <a className="button button-light" href="mailto:brayden@toulousemail.com">
            brayden@toulousemail.com <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer>
        <span>Brayden Toulouse · College Station, Texas</span>
        <span>Built to show the work, including how AI assisted it.</span>
      </footer>
    </>
  );
}
