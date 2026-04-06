export default function AboutPage() {
  return (
    <div className="page-content">
      <h1>About Me</h1>

      <h2>Introduction</h2>
      <p>
        My name is Eric Edwards. I&rsquo;m an entry-level engineer working toward a
        software career. I&rsquo;ve built focused experiments — a remote admin tool
        prototype, a lightweight invoicing API, a browser-based multiplayer game — to
        understand how production apps come together.
      </p>
      <p>
        My process is straightforward: research the essentials, sketch a plan, deliver
        the MVP, then capture next-step improvements. Every project teaches me something
        new about structure, security, or design.
      </p>

      <h2>Focus</h2>
      <div className="quote-block">
        <p>Full-stack platforms, APIs, developer tooling</p>
        <p>Currently learning C and Rust</p>
        <p>Based in United States · Remote worldwide</p>
      </div>

      <h2>Skills</h2>
      <div className="quote-block">
        <p>React, Next.js, HTML/CSS, JavaScript, TypeScript</p>
        <p>Node.js, Express, Python, Flask</p>
        <p>Java, Golang, Rust</p>
        <p>PostgreSQL, SQLite, Firebase</p>
        <p>Git, Docker, Vercel</p>
        <p>Nmap, Hydra, WPScan, Burp Suite</p>
      </div>

      <h2>Certifications</h2>
      <div className="quote-block">
        <p>All Star Code Certificate — Awarded 08/2025</p>
        <p>Google Cybersecurity Certificate — Awarded 08/2025</p>
      </div>

      <h2>Open Source</h2>
      <div className="quote-block">
        <p>TJ Java — pull requests to enhance functionality</p>
        <p>FlixelGDX — bug fixes and enhancements</p>
        <p>Pretendo — contributions and fixes</p>
      </div>
    </div>
  );
}
