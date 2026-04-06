export default function OpensourcePage({ navigate }) {
  const contributions = [
    {
      name: 'TJ Java',
      category: 'DISCORD BOT',
      desc: 'Added a Java-themed trivia game to a community Discord bot, giving members a fun way to test their knowledge.',
      tags: ['Java', 'Discord'],
      page: 'oss-tjjava',
    },
    {
      name: 'FlixelGDX',
      category: 'GAME LIBRARY',
      desc: 'Implemented new features and fixed bugs in a Java game development library.',
      tags: ['Java', 'Game Dev'],
      page: 'oss-flixelgdx',
    },
  ];

  return (
    <div className="page-content">
      <h1>Open-Source Contributions</h1>
      <p className="page-subtitle">
        Pull requests to fix bugs, add features, and improve community projects.
      </p>

      <div className="project-list">
        {contributions.map((c) => (
          <div key={c.name} className="project-card">
            <span className="card-category">{c.category}</span>
            <div className="project-header">
              <h3>{c.name}</h3>
              <button className="project-link" onClick={() => navigate(c.page)}>
                View details →
              </button>
            </div>
            <p className="project-desc">{c.desc}</p>
            <div className="project-tags">
              {c.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
