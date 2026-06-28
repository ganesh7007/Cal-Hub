export const traditionalDetails = {
  1: {
    title: 'VIRUS',
    types: [
      'File Infector Virus — Attaches to executable files (.exe, .com)',
      'Boot Sector Virus — Infects the master boot record (MBR)',
      'Macro Virus — Hides inside Office documents (Word, Excel)',
      'Polymorphic Virus — Changes its own code to avoid detection',
      'Metamorphic Virus — Rewrites itself completely each time',
      'Resident Virus — Embeds into RAM and infects running programs',
      'Non-Resident Virus — Activates only when the infected file is opened',
      'Multipartite Virus — Attacks both boot sector and files simultaneously'
    ],
    history: [
      '1971 — Creeper (first self-replicating program, ARPANET)',
      '1986 — Brain virus (first PC virus, Pakistan)',
      '1999 — Melissa virus spread via email, crashed mail servers',
      '2000 — ILOVEYOU virus caused $10 billion damage',
      '2004 — MyDoom became the fastest-spreading email virus'
    ],
    impact: [
      'Corrupts or deletes files',
      'Slows down or crashes systems',
      'Spreads to other connected devices',
      'Steals sensitive data',
      'Can render the OS unbootable'
    ],
    prevention: [
      'Install and update antivirus software',
      'Avoid downloading from untrusted sources',
      "Don't open unknown email attachments",
      'Keep OS and software patched',
      'Use a firewall'
    ],
    programming: [
      'Written in Assembly, C, C++',
      'Uses code injection and self-replication techniques',
      'Polymorphic variants use encryption algorithms to mutate code',
      'Macro viruses use VBA (Visual Basic for Applications)'
    ]
  },
  2: {
    title: 'WORM',
    types: [
      'Email Worm — Spreads through email attachments/links',
      'Internet Worm — Exploits OS vulnerabilities over the internet',
      'File-Sharing Worm — Spreads via P2P networks',
      'IM Worm — Spreads through chat/messaging apps',
      'Network Worm — Travels across LAN/WAN connections'
    ],
    history: [
      '1988 — Morris Worm (first major internet worm, infected 6,000 machines)',
      '2001 — Code Red worm defaced websites and launched DDoS attacks',
      '2003 — SQL Slammer caused global internet slowdown in 10 minutes',
      '2004 — Sasser worm spread without user interaction via Windows flaw',
      '2017 — WannaCry worm combined with ransomware, hit 150+ countries'
    ],
    impact: [
      'Consumes network bandwidth',
      'Overloads servers',
      'Drops malware payloads (ransomware, spyware)',
      'Creates backdoors for attackers',
      'Can affect millions of systems within hours'
    ],
    prevention: [
      'Apply OS security patches immediately',
      'Use network firewalls and IDS/IPS',
      'Disable unnecessary network services',
      'Use email filtering',
      'Segment networks'
    ],
    programming: [
      'Written in C, Python, Perl',
      'Uses socket programming for network propagation',
      'Exploits buffer overflow, RPC vulnerabilities',
      'Uses SMTP protocols for email spreading'
    ]
  },
  3: {
    title: 'TROJAN HORSE',
    types: [
      'Remote Access Trojan (RAT) — Gives attacker full remote control',
      'Backdoor Trojan — Opens a hidden entry point into the system',
      'Downloader Trojan — Downloads more malware silently',
      'Banking Trojan — Steals banking credentials (e.g., Zeus)',
      'Rootkit Trojan — Hides deep in the OS, very hard to detect',
      "DDoS Trojan — Uses victim's machine to attack other servers",
      'Spy Trojan — Records keystrokes, screenshots, webcam footage'
    ],
    history: [
      '1975 — ANIMAL (first known Trojan disguised as a game)',
      '1998 — Back Orifice RAT released, targeted Windows systems',
      '2007 — Zeus banking Trojan emerged, stole millions in banking data',
      '2011 — SpyEye Trojan combined with Zeus, targeted financial institutions',
      '2020 — Emotet Trojan became most dangerous global malware'
    ],
    impact: [
      "Full remote control of victim's device",
      'Data theft (passwords, bank info, files)',
      'Spying via camera/microphone',
      'Used to launch attacks on other targets',
      'Can completely compromise system integrity'
    ],
    prevention: [
      'Download software only from official sources',
      'Use reputable antivirus with real-time protection',
      "Don't run programs from unknown emails",
      'Enable application whitelisting',
      'Monitor network traffic for unusual outbound connections'
    ],
    programming: [
      'Written in C++, Python, Delphi',
      'Uses social engineering to trick users into running them',
      'RATs use reverse shell techniques',
      'Rootkits use kernel-level programming'
    ]
  },
  4: {
    title: 'PHISHING',
    types: [
      'Email Phishing — Fake emails impersonating banks, companies',
      'Spear Phishing — Targeted attack on a specific individual',
      'Whaling — Targets high-level executives (CEO, CFO)',
      'Smishing — Phishing via SMS text messages',
      'Vishing — Phishing via voice calls',
      'Clone Phishing — Duplicates a legitimate email with malicious links',
      'Pharming — Redirects users to fake websites via DNS poisoning'
    ],
    history: [
      '1995 — Term "phishing" coined on AOL to steal passwords',
      '2003 — First phishing attacks targeting banks and PayPal',
      '2011 — RSA Security phished, compromised SecurID tokens',
      '2016 — John Podesta (Clinton campaign) spear-phished, emails leaked',
      '2020 — COVID-19 themed phishing surged 667% globally'
    ],
    impact: [
      'Stolen login credentials',
      'Financial fraud and identity theft',
      'Corporate data breaches',
      'Ransomware installation via phishing links',
      'Reputation damage to organizations'
    ],
    prevention: [
      'Verify sender email addresses carefully',
      "Don't click suspicious links — go directly to the website",
      'Use multi-factor authentication (MFA)',
      'Use anti-phishing browser extensions',
      'Train employees regularly with awareness programs'
    ],
    programming: [
      'Uses HTML/CSS to clone legitimate websites',
      'DNS spoofing and typosquatting for fake domains',
      'Email headers manipulated using SMTP protocols',
      'Tools: GoPhish, SET (Social Engineering Toolkit)'
    ]
  },
  5: {
    title: 'DoS / DDoS ATTACK',
    types: [
      'Volume-Based Attack — Floods bandwidth with traffic (UDP flood, ICMP flood)',
      'Protocol Attack — Exploits network protocol weaknesses (SYN flood, Ping of Death)',
      'Application Layer Attack — Targets web apps (HTTP flood, Slowloris)',
      'Distributed DoS (DDoS) — Uses a botnet of thousands of machines',
      'Amplification Attack — Exploits DNS/NTP to multiply traffic volume',
      "Smurf Attack — Sends ICMP packets using victim's IP as source"
    ],
    history: [
      '1988 — Morris Worm caused early DoS-like disruptions',
      '2000 — MafiaBoy DDoS took down Yahoo, Amazon, CNN',
      '2007 — Estonia hit by massive DDoS, disrupted government and banks',
      '2016 — Mirai botnet took down Twitter, Netflix, Reddit via DNS provider',
      '2020 — Amazon Web Services hit by 2.3 Tbps DDoS (largest recorded)'
    ],
    impact: [
      'Website/service goes completely offline',
      'Revenue loss for businesses',
      'Disrupts critical infrastructure',
      'Covers tracks for other simultaneous attacks',
      'Can last hours to weeks'
    ],
    prevention: [
      'Use DDoS protection services (Cloudflare, AWS Shield)',
      'Rate limiting and traffic filtering',
      'Anycast network diffusion',
      'Deploy Web Application Firewalls (WAF)',
      'Blackhole routing during attacks'
    ],
    programming: [
      'Uses Python, C for attack tools',
      'Botnets controlled via C2 (Command & Control) servers',
      'Tools: LOIC, HOIC, Hping3',
      'Exploits TCP/IP protocol weaknesses'
    ]
  },
  6: {
    title: 'SQL INJECTION',
    types: [
      'Classic/In-Band SQLi — Attacker uses same channel for attack and result',
      'Error-Based SQLi — Extracts data through database error messages',
      'Union-Based SQLi — Uses UNION SQL operator to retrieve data from other tables',
      'Blind SQLi — No visible output; attacker infers data from app behavior',
      'Boolean-Based Blind SQLi — Asks true/false questions to extract data',
      'Time-Based Blind SQLi — Uses time delays (SLEEP()) to infer data',
      'Out-of-Band SQLi — Uses DNS/HTTP requests to extract data externally',
      'Second-Order SQLi — Payload stored and executed later in a different context'
    ],
    history: [
      '1998 — Jeff Forristal published first SQLi research article',
      '2005 — MySpace, Samy worm used SQLi techniques',
      '2008 — Heartland Payment Systems breached, 130M cards stolen via SQLi',
      '2011 — HBGary Federal hacked using SQLi, exposing internal emails',
      '2012 — LinkedIn, 6.5 million passwords stolen through SQLi'
    ],
    impact: [
      'Full database dump (usernames, passwords, credit cards)',
      'Authentication bypass (login without password)',
      'Data manipulation or deletion',
      'Remote code execution in some cases',
      'Complete server takeover'
    ],
    prevention: [
      'Use Prepared Statements / Parameterized Queries',
      'Apply input validation and sanitization',
      'Use ORM frameworks (they handle SQL safely)',
      'Principle of least privilege on DB accounts',
      'Use WAF to detect/block SQLi patterns'
    ],
    programming: [
      'Exploits SQL language directly',
      'Tools: SQLMap (automated SQLi tool), Burp Suite',
      'Written exploits using Python, Bash',
      'Targets databases: MySQL, MSSQL, Oracle, PostgreSQL'
    ]
  },
  7: {
    title: 'XSS (Cross-Site Scripting)',
    types: [
      'Stored XSS (Persistent) — Malicious script saved in the database, runs for every user',
      'Reflected XSS (Non-Persistent) — Script reflected off the server via URL',
      'DOM-Based XSS — Payload executes in the browser DOM without server involvement',
      'Blind XSS — Payload executes in admin panels or backend systems',
      'Self-XSS — Tricks users into running malicious code in their own browser console'
    ],
    history: [
      '2000 — Microsoft and Netscape reported first XSS vulnerabilities',
      '2005 — Samy Worm (MySpace) — first XSS worm, infected 1 million profiles in 20 hours',
      '2011 — Facebook XSS vulnerability exploited to spread spam',
      '2014 — eBay XSS flaw allowed attackers to redirect users to phishing pages',
      '2018 — British Airways XSS + data theft: 500,000 customer records stolen'
    ],
    impact: [
      'Session hijacking (stealing cookies)',
      'Redirecting users to malicious sites',
      'Keylogging within the browser',
      'Defacing websites',
      'Spreading worms through social platforms'
    ],
    prevention: [
      'Encode output before rendering in HTML',
      'Use Content Security Policy (CSP) headers',
      'Validate and sanitize all user inputs',
      'Use HTTPOnly and Secure cookie flags',
      'Use modern frameworks that auto-escape (React, Angular)'
    ],
    programming: [
      'Exploits JavaScript running in the browser',
      'Tools: XSSer, BeEF (Browser Exploitation Framework)',
      'Payloads delivered via HTML, URL parameters, form fields',
      'Targets DOM manipulation and cookie theft'
    ]
  },
  8: {
    title: 'PASSWORD ATTACK',
    types: [
      'Brute Force Attack — Tries every possible combination systematically',
      'Dictionary Attack — Uses a wordlist of common passwords',
      'Credential Stuffing — Uses leaked username/password combos from past breaches',
      'Rainbow Table Attack — Uses precomputed hash-to-password lookup tables',
      'Keylogger Attack — Records keystrokes to capture passwords as typed',
      'Shoulder Surfing — Physically watches someone type their password',
      'Password Spraying — Tries one common password across many accounts',
      'Man-in-the-Middle (MitM) — Intercepts credentials during transmission'
    ],
    history: [
      '1988 — Morris Worm used password cracking to spread',
      '2009 — RockYou breach: 32 million plaintext passwords exposed',
      '2012 — LinkedIn: 6.5M SHA-1 hashed passwords cracked easily',
      '2013 — Adobe breach: 153 million passwords (poorly encrypted)',
      '2019 — Collection #1 breach: 773 million emails + passwords leaked'
    ],
    impact: [
      'Unauthorized account access',
      'Identity theft and financial fraud',
      'Corporate espionage',
      'Lateral movement within networks',
      'Full system/admin takeover'
    ],
    prevention: [
      'Use long, complex, unique passwords',
      'Enable Multi-Factor Authentication (MFA)',
      'Use a Password Manager',
      'Implement account lockout policies',
      'Monitor for credential stuffing with threat intelligence feeds'
    ],
    programming: [
      'Tools: Hashcat, John the Ripper, Hydra, Medusa',
      'Written in C, Python',
      'Uses GPU acceleration for faster hash cracking',
      'Exploits weak hashing algorithms: MD5, SHA-1',
      'Credential stuffing uses Sentry MBA, OpenBullet'
    ]
  }
};
