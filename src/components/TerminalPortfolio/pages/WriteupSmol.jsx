export default function WriteupSmol() {
  return (
    <div className="page-content writeup">
      <h1>THM: Smol</h1>
      <div className="writeup-meta">
        <span className="tag">TryHackMe</span>
        <span className="tag">WordPress</span>
        <span className="tag">Plugin Exploitation</span>
        <span className="tag">Privilege Escalation</span>
      </div>

      <h2>Overview</h2>
      <p>
        At the heart of Smol is a WordPress website, a common target due to its
        extensive plugin ecosystem. The machine showcases a publicly known vulnerable plugin,
        highlighting the risks of neglecting software updates and security patches.
        Enhancing the learning experience, Smol introduces a backdoored plugin, emphasizing
        the significance of meticulous code inspection before integrating third-party
        components.
      </p>

      <h2>Walkthrough</h2>
      <p>
        This writeup covers WordPress exploitation through vulnerable and backdoored
        plugins, leading to initial access and eventual privilege escalation on the
        target machine. Steps include:
      </p>
      <div className="quote-block">
        <p>Step 1 — Initial enumeration and service discovery</p>
        <p>Step 2 — WordPress enumeration using WPScan</p>
        <p>Step 3 — Vulnerable plugin identification</p>
        <p>Step 4 — Exploitation of the known vulnerability</p>
        <p>Step 5 — Backdoored plugin analysis</p>
        <p>Step 6 — Gaining initial shell access</p>
        <p>Step 7 — Post-exploitation enumeration</p>
        <p>Step 8 — Privilege escalation to root</p>
      </div>

      <h2>Tools Used</h2>
      <div className="quote-block">
        <p>Nmap — port scanning and service detection</p>
        <p>WPScan — WordPress enumeration</p>
        <p>Searchsploit — exploit database lookup</p>
        <p>cURL / Burp Suite — HTTP request crafting</p>
        <p>Netcat — reverse shell listener</p>
        <p>LinPEAS / manual enumeration — privilege escalation</p>
      </div>
    </div>
  );
}
