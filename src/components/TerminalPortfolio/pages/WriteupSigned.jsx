const IMG_BASE = 'https://ej-edwards.github.io/Portfolio-Website/pages/screenshotsproof/SignedMessage';

export default function WriteupSigned() {
  return (
    <div className="page-content writeup">
      <h1>THM: Signed Messages</h1>
      <div className="writeup-meta">
        <span className="tag">TryHackMe</span>
        <span className="tag">Cryptography</span>
        <span className="tag">Digital Signatures</span>
        <span className="tag">Message Authentication</span>
      </div>

      <h2>Overview</h2>
      <p>
        Signed Messages is a TryHackMe room focused on understanding digital signatures
        and message authentication. The challenge explores how cryptographic signing
        works, how to verify the integrity and authenticity of messages, and the
        consequences of improper signature validation. It reinforces core concepts in applied
        cryptography that are essential for both offensive and defensive security
        practitioners.
      </p>

      <h2>Walkthrough</h2>

      <h3>Step 1 — Directory Enumeration</h3>
      <p>
        Used gobuster to enumerate directories and files on the target server.
      </p>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/signed1.png`}
        alt="Gobuster directory enumeration results"
        loading="lazy"
      />

      <h3>Step 2 — Debug Endpoint Discovery</h3>
      <p>
        Went to the debug endpoint of the website where sensitive information was found
        that could be exploited.
      </p>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/signed2.png`}
        alt="Debug endpoint with sensitive information"
        loading="lazy"
      />

      <h3>Step 3 — Admin Access</h3>
      <p>
        Was able to login as Admin due to there being no password set.
      </p>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/signed3.png`}
        alt="Admin login with no password"
        loading="lazy"
      />

      <h3>Step 4 — New User Account</h3>
      <p>
        Logged out of Admin and created a new user account to start exploiting
        the system from a different perspective.
      </p>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/signed4.png`}
        alt="New user account creation"
        loading="lazy"
      />

      <h3>Step 5 — RSA Key Exploitation</h3>
      <p>
        Developed a script to exploit a deterministic RSA key generation flaw,
        allowing reconstruction of private keys from usernames and forging valid signed messages.
      </p>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/signed5.png`}
        alt="RSA key exploitation script output"
        loading="lazy"
      />

      <h3>Step 6 — Forging the Signed Message</h3>
      <p>
        Modified a custom solver script to forge signed messages as the admin.
      </p>
      <p>
        <a
          href="https://ej-edwards.github.io/Portfolio-Website/pages/screenshotsproof/SignedMessage/customsolver.py.txt"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View the full script (customsolver.py) ↗
        </a>
      </p>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/signed6-2.png`}
        alt="Forging signed message as admin"
        loading="lazy"
      />

      <h3>Step 7 — Successful Forgery</h3>
      <p>
        Successfully forged a signed message as the admin, demonstrating
        the vulnerability in the deterministic RSA key generation.
      </p>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/signed7.png`}
        alt="Successfully forged signed message"
        loading="lazy"
      />

      <h3>Step 8 — Flag</h3>
      <p className="flag">Flag: <code>THM&#123;PR3D1CT4BL3_S33D5_BR34K_H34RT5&#125;</code></p>

      <h2>Summary</h2>
      <p>
        This challenge highlighted the importance of secure key generation and the risks
        associated with deterministic cryptographic operations. By exploiting a flaw in
        the RSA key generation process, I was able to forge valid signed messages,
        demonstrating the potential impact of such vulnerabilities.
      </p>
      <p>
        This challenge also shows that websites should have passwords set for all
        user accounts to prevent unauthorized access.
      </p>

      <h2>Tools Used</h2>
      <div className="quote-block">
        <p>Python — scripting cryptographic operations</p>
        <p>Gobuster — directory and file enumeration</p>
      </div>
    </div>
  );
}
