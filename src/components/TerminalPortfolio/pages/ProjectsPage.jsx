export default function ProjectsPage() {
  const projects = [
    {
      name: 'RedSec AI',
      desc: 'AI-assisted red teaming cybersecurity SaaS',
      tags: ['Next.js', 'Python', 'Dart'],
      link: 'https://redsec-ai.vercel.app/',
      linkLabel: 'Launch project',
    },
    {
      name: 'Port Intel',
      desc: 'Cloud-first recon platform with tactical dashboards for security teams',
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      link: 'https://portintel.tech/',
      linkLabel: 'Launch project',
    },
    {
      name: 'Royal Score',
      desc: 'Multiplayer card game with socket-powered turns and room-based matchmaking',
      tags: ['Node.js', 'Vanilla JS', 'WebSockets'],
      link: 'https://github.com/EJ-Edwards/Royal-Score',
      linkLabel: 'View repo',
    },
    {
      name: 'Remote Admin Tool',
      desc: 'Secure Python remote admin with telemetry, commands, and RBAC dashboard',
      tags: ['Python', 'Flask', 'WebSockets', 'SQLite'],
      link: 'https://github.com/EJ-Edwards/Remote-Admin-Tool',
      linkLabel: 'View repo',
    },
    {
      name: 'Cyber-Battle',
      desc: 'CLI-based cybersecurity simulation game',
      tags: ['Golang'],
      link: 'https://github.com/EJ-Edwards/Cyber-Battle',
      linkLabel: 'View repo',
    },
    {
      name: 'APToolkit',
      desc: 'APT-style toolkit for cybersecurity operations',
      tags: ['Python', 'Golang'],
      link: 'https://github.com/EJ-Edwards/APToolkit',
      linkLabel: 'View repo',
    },
    {
      name: 'Crust Browser',
      desc: 'CLI web browser built with Rust and Node.js',
      tags: ['Rust', 'Node.js'],
      link: 'https://github.com/EJ-Edwards/CrustBrowser',
      linkLabel: 'View repo',
    },
    {
      name: 'Dev-Tool-Box CLI',
      desc: 'Command-line developer utilities and games',
      tags: ['Node.js', 'Python', 'C#'],
      link: 'https://github.com/EJ-Edwards/Dev-Tool-Box-CLI',
      linkLabel: 'View repo',
    },
    {
      name: 'EJ Student System',
      desc: 'Java API for managing student information and academic records',
      tags: ['Java'],
      link: 'https://github.com/EJ-Edwards/EJ-Student-System',
      linkLabel: 'View repo',
    },
    {
      name: 'Star Explorer',
      desc: 'CLI-based space exploration game',
      tags: ['Node.js', 'Golang'],
      link: 'https://github.com/EJ-Edwards/Star-Explorer',
      linkLabel: 'View repo',
    },
  ];

  return (
    <div className="page-content">
      <h1>Projects</h1>
      <p className="page-subtitle">Hands-on builds for security, automation, and full-stack development.</p>
      <div className="project-list">
        {projects.map((p) => (
          <div key={p.name} className="project-card">
            <div className="project-header">
              <h3>{p.name}</h3>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {p.linkLabel} ↗
              </a>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
