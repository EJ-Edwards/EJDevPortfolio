export default function RedTeamPage({ navigate }) {
  const writeups = [
    {
      name: 'Net Sec Challenge',
      category: 'NETWORK SECURITY',
      desc: 'Nmap scanning, service enumeration, FTP credential brute-forcing, and covert scanning techniques.',
      tags: ['Nmap', 'Telnet', 'Hydra', 'FTP'],
      page: 'writeup-netsec',
    },
    {
      name: 'Signed Messages',
      category: 'CRYPTOGRAPHY',
      desc: 'Exploiting deterministic RSA key generation to forge signed messages and demonstrate cryptographic vulnerabilities.',
      tags: ['Python', 'Gobuster'],
      page: 'writeup-signed',
    },
    {
      name: 'Smol',
      category: 'WEB EXPLOITATION',
      desc: 'WordPress exploitation, vulnerable plugin abuse, backdoored plugin analysis, and privilege escalation.',
      tags: ['WordPress', 'PHP', 'WPScan'],
      page: 'writeup-smol',
    },
  ];

  return (
    <div className="page-content">
      <h1>Security Research &amp; Writeups</h1>
      <p className="page-subtitle">
        Hands-on walkthroughs of CTF challenges, penetration tests, and offensive
        security exercises.
      </p>

      <h2>TryHackMe Writeups</h2>
      <div className="project-list">
        {writeups.map((w) => (
          <div key={w.name} className="project-card">
            <span className="card-category">{w.category}</span>
            <div className="project-header">
              <h3>{w.name}</h3>
              <button className="project-link" onClick={() => navigate(w.page)}>
                Read writeup →
              </button>
            </div>
            <p className="project-desc">{w.desc}</p>
            <div className="project-tags">
              {w.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
