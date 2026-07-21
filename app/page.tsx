import Image from "next/image";

const appStoreUrl = "https://apps.apple.com/app/id6783075252";

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
          <a href="#beo">Work</a>
          <a href="#method">Method</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="nav-cta" href="mailto:brayden@toulousemail.com">
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <nav className="rail" aria-label="Panels">
        <a href="#hero" aria-label="Panel 1, introduction">01</a>
        <a href="#beo" aria-label="Panel 2, BEO Dashboard">02</a>
        <a href="#see-also" aria-label="Panel 3, See Also">03</a>
        <a href="#tools" aria-label="Panel 4, voice inventory and agent tooling">04</a>
        <a href="#training" aria-label="Panel 5, training and enablement">05</a>
        <a href="#method" aria-label="Panel 6, method">06</a>
        <a href="#about" aria-label="Panel 7, about and contact">07</a>
      </nav>

      <main className="gallery">
        {/* ---------------------------------------------------------- 01 */}
        <section className="panel g-paper" id="hero">
          <div className="inner hero-grid">
            <div>
              <p className="eyebrow">Applied AI · Operations · Project delivery</p>
              <h1>I turn operational problems into working systems.</h1>
              <p className="lede hero-lede">
                I lead hospitality operations and build tools around workflows I know
                firsthand—from live event execution to voice inventory and personal
                agents. My strength is defining the problem, directing AI-assisted
                implementation, and verifying that the result works in practice.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#beo">
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

        <p className="deck-hint" aria-hidden="true">
          <b>Swipe</b> through four projects <b>→</b>
        </p>

        <div className="deck">
          {/* -------------------------------------------------------- 02 */}
          <section className="panel g-forest" id="beo" aria-labelledby="beo-h">
            <div className="inner">
              <div className="project-grid">
                <div>
                  <p className="eyebrow">01 — Flagship · deployed operations software</p>
                  <h2 id="beo-h">The operating layer Delphi didn&apos;t provide.</h2>

                  <div className="case-blocks">
                    <div>
                      <p className="case-label">The problem</p>
                      <p>
                        Amadeus Delphi contained the source data, but its exported event
                        detail was too slow and fragmented for banquet leaders moving
                        through a 30,000-square-foot operation.
                      </p>
                    </div>
                    <div>
                      <p className="case-label">The system</p>
                      <ol className="flow" aria-label="BEO Dashboard data flow">
                        <li>Scheduled export</li>
                        <li>Deterministic validation</li>
                        <li>Operational data layer</li>
                        <li>Mobile team interface</li>
                      </ol>
                    </div>
                    <div className="case-results">
                      <p className="case-label">What changed</p>
                      <ul>
                        <li>Event details became available from any browser.</li>
                        <li>Rooms, assignments, diagrams, and status moved into one view.</li>
                        <li>Approximately 15 colleagues now use it each day.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="shot shot-bleed">
                    <Image
                      src="/beo/02-spaces.png"
                      alt="Function Spaces timeline: a week of events laid across rooms, with setup chips, guest counts, a seating-diagram thumbnail, and a cancelled event marked in red."
                      width={2000}
                      height={1250}
                      priority
                    />
                    <div className="shot-cap">
                      <span>Function Spaces · one week across the floor</span>
                      <strong>Synthetic data</strong>
                    </div>
                  </div>
                  <div className="shot-row">
                    <div className="shot">
                      <Image
                        src="/beo/01-day-events.png"
                        alt="Day view: events grouped by room, one struck through and chipped as cancelled rather than hidden."
                        width={2000}
                        height={1250}
                      />
                    </div>
                    <div className="shot">
                      <Image
                        src="/beo/03-event-detail.png"
                        alt="Full BEO for a single event: setup, food, beverage, and audiovisual sections with dietary callouts."
                        width={2000}
                        height={1250}
                      />
                    </div>
                    <div className="shot">
                      <Image
                        src="/beo/04-pending-diagrams.png"
                        alt="Pending diagrams queue: unassociated floorplan pages being matched to events."
                        width={2000}
                        height={1250}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="evidence" aria-label="BEO Dashboard evidence">
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
                    <h4>I owned</h4>
                    <p>
                      Workflow discovery, requirements, system behavior, data rules,
                      acceptance criteria, task decomposition, review, deployment
                      decisions, and iteration with real users.
                    </p>
                  </div>
                  <div>
                    <h4>AI assisted</h4>
                    <p>
                      Implementation, test generation, debugging, documentation, and
                      code review under a supervisor-and-subagent workflow.
                    </p>
                  </div>
                  <div>
                    <h4>I verified</h4>
                    <p>
                      Deterministic parsing, role behavior, failure handling, UI
                      workflows, and regression coverage against operational needs.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          {/* -------------------------------------------------------- 03 */}
          <section className="panel g-terracotta" id="see-also" aria-labelledby="sa-h">
            <div className="inner">
              <div className="project-grid flip">
                <div>
                  <p className="eyebrow">02 — Native product · shipped</p>
                  <Image
                    src="/see-also-wordmark.png"
                    alt="See Also"
                    width={1200}
                    height={383}
                    style={{ width: "min(280px,60%)", height: "auto", marginBottom: "1.2rem" }}
                  />
                  <h2 id="sa-h">A calmer way to follow a Wikipedia rabbit hole.</h2>
                  <p className="lede" style={{ marginTop: "1.2rem" }}>
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

                <div className="phones">
                  <figure>
                    <Image
                      src="/seealso/reading.png"
                      alt="See Also on iPhone: an article cover for Bioluminescence, with a full-bleed photograph above the title set in Cormorant."
                      width={640}
                      height={1306}
                      priority
                    />
                    <figcaption>The reader</figcaption>
                  </figure>
                  <figure>
                    <Image
                      src="/seealso/nearby.png"
                      alt="See Also on iPhone: the Nearby map, pinned with geo-tagged articles around Toulouse and preview cards along the bottom."
                      width={640}
                      height={1306}
                    />
                    <figcaption>Nearby discovery</figcaption>
                  </figure>
                  <figure>
                    <Image
                      src="/seealso/styles.png"
                      alt="See Also on iPhone: the reading-style picker offering Classic, Almanac, Field Guide, Broadsheet, and Nocturne."
                      width={640}
                      height={1306}
                    />
                    <figcaption>Five reading styles</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------- 04 */}
          <section className="panel g-leather" id="tools" aria-labelledby="tools-h">
            <div className="inner">
              <p className="eyebrow">03 — Applied AI prototypes</p>
              <h2 id="tools-h">Range, with a consistent method.</h2>
              <p className="lede" style={{ marginTop: "1.1rem" }}>
                Different interfaces, same discipline: start with the workflow, keep
                deterministic work deterministic, and make uncertainty visible.
              </p>

              <div className="pair">
                <article>
                  <p className="project-number">Voice Inventory Assistant</p>
                  <div className="voice-visual" aria-hidden="true">
                    {[18, 36, 62, 28, 76, 48, 88, 40, 68, 32, 54, 22].map((height, index) => (
                      <i key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <h3>Spoken bar counts into a real workbook.</h3>
                  <p style={{ color: "var(--fg-soft)", marginTop: ".7rem", fontSize: ".95rem" }}>
                    Speech recognition, a deterministic count grammar, fuzzy matching,
                    confidence scoring, and a human review queue.
                  </p>
                  <div className="metrics">
                    <span>
                      <strong>87.5%</strong> first synthetic auto-fill
                    </span>
                    <span>
                      <strong>88</strong> automated tests
                    </span>
                  </div>
                </article>

                <article>
                  <p className="project-number">LAUTREC &amp; Multi-Model CLI</p>
                  <div className="agent-flow" aria-label="LAUTREC flow">
                    <span>iMessage</span>
                    <b>→</b>
                    <span>Queue</span>
                    <b>→</b>
                    <span>Agent</span>
                    <b>→</b>
                    <span>Tools</span>
                  </div>
                  <h3>A queue-aware personal-agent harness.</h3>
                  <p style={{ color: "var(--fg-soft)", marginTop: ".7rem", fontSize: ".95rem" }}>
                    Reconstructs long-running context, suppresses superseded drafts, and
                    routes authorized requests into calendar, email, task, media, and
                    development workflows.
                  </p>
                  <ul className="inline-list" aria-label="Agent system technologies">
                    <li>Claude Code</li>
                    <li>Codex</li>
                    <li>Gemini</li>
                    <li>BlueBubbles</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------- 05 */}
          <section className="panel g-paper" id="training" aria-labelledby="tr-h">
            <div className="inner">
              <div className="project-grid">
                <div>
                  <p className="eyebrow">04 — Training &amp; enablement</p>
                  <h2 id="tr-h">Operational knowledge, made teachable.</h2>
                  <p className="lede" style={{ marginTop: "1.2rem" }}>
                    I designed a 31-slide bartender learning program combining explicit
                    objectives, instruction, demonstration, case studies, an assessment,
                    and job aids. It turns unwritten expectations into a repeatable
                    training experience focused on consistency, safety, and professional
                    service.
                  </p>
                  <div className="evidence" style={{ marginTop: "2rem" }}>
                    <div>
                      <span>Slides</span>
                      <strong>31</strong>
                    </div>
                    <div>
                      <span>Sections</span>
                      <strong>7 learning sections</strong>
                    </div>
                    <div>
                      <span>Delivery</span>
                      <strong>Lecture · lab · practicum</strong>
                    </div>
                  </div>
                </div>

                <div className="shot shot-bleed">
                  <Image
                    src="/training-pour-standards.png"
                    alt="Training slide explaining a 1.25 ounce banquet pour standard"
                    width={1600}
                    height={900}
                  />
                  <div className="shot-cap">
                    <span>Pour standards · from the 31-slide deck</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ---------------------------------------------------------- 06 */}
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
          </div>
        </section>

        {/* ---------------------------------------------------------- 07 */}
        <section className="panel g-leather" id="about" aria-labelledby="a-h">
          <div className="inner">
            <div className="about-grid">
              <div>
                <p className="eyebrow">About</p>
                <h2 id="a-h">I came to technology from the floor, not the classroom.</h2>
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
                  University, graduating December 2026, and targeting applied AI,
                  implementation, enablement, and operations-technology roles in Austin
                  or remotely. Extensive travel is welcome.
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
                I&apos;m interested in teams that value operational judgment, responsible
                AI adoption, and people who can translate between users and engineers.
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
