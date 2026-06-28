export const trendingDetails = {
  1: {
    title: 'AI-POWERED ATTACKS',
    whatItIs: 'Attackers use Artificial Intelligence and Machine Learning to automate, enhance, and scale cyberattacks — making them faster, smarter, and harder to detect than traditional attacks.',
    types: [
      'AI Phishing: Auto-generates highly personalized phishing emails using LLMs',
      'Adversarial ML: Manipulates AI models by feeding corrupted input data',
      'AI Fuzzing: Uses AI to automatically find software vulnerabilities',
      'Deepfake Social Engineering: AI-generated voice/video to impersonate executives',
      'AI-Powered Malware: Malware that adapts its behavior to evade detection',
      'Automated Vulnerability Scanning: AI scans thousands of systems for weaknesses in seconds',
      'Botnet Optimization: AI improves botnet coordination and attack timing'
    ],
    history: [
      '2018 — Researchers demonstrated AI-generated malware evading antivirus',
      '2019 — First AI voice clone used in CEO fraud ($243,000 stolen)',
      '2021 — OpenAI warned GPT-3 could be misused for phishing content',
      '2022 — WormGPT and FraudGPT dark web tools emerged for criminal use',
      '2023 — AI-crafted phishing emails showed 60% higher click-through rates',
      '2024 — AI agents used to autonomously conduct multi-step cyberattacks'
    ],
    impact: [
      'Phishing attacks become highly personalized and very convincing',
      'Malware adapts in real-time to bypass antivirus detection',
      'Attacks scale to millions of targets simultaneously',
      'Reduces attacker skill requirement (democratizes hacking)',
      'Defenders struggle to keep up with AI attack speed'
    ],
    prevention: [
      'Deploy AI-powered defense tools (AI vs AI)',
      'Behavioral analytics to detect anomalous patterns',
      'Zero-trust architecture implementation',
      'Continuous employee awareness training',
      'Threat intelligence sharing across organizations'
    ],
    programming: [
      'WormGPT, FraudGPT — dark web LLMs for cybercrime',
      'ChatGPT jailbreaks used to write malware',
      'TensorFlow, PyTorch — for adversarial ML attacks',
      'GANs (Generative Adversarial Networks) for deepfakes',
      'AutoML frameworks for automated vulnerability discovery'
    ]
  },
  2: {
    title: 'DEEPFAKE ATTACKS',
    whatItIs: 'Deepfakes use AI to create hyper-realistic fake videos, audio, or images of real people — used in cybercrime for fraud, impersonation, and manipulation.',
    types: [
      'Audio Deepfake: Clones a person\'s voice to issue fake commands',
      'Video Deepfake: Creates realistic fake video of a person',
      'Real-Time Deepfake: Live video manipulation during calls',
      'Face Swap: Replaces one person\'s face with another in video',
      'Text-to-Video Deepfake: Generates fake video from text prompts',
      'Document Deepfake: Forges IDs, passports, signatures with AI'
    ],
    history: [
      '2017 — Term "deepfake" coined on Reddit; fake celebrity videos emerged',
      '2019 — CEO voice deepfake: $243,000 transferred via fake audio call',
      '2020 — Deepfake video of WHO director used to spread COVID misinformation',
      '2021 — Tom Cruise deepfake TikToks fooled millions',
      '2023 — Hong Kong firm lost $25 million in deepfake video conference scam',
      '2024 — Real-time deepfake tools became commercially available'
    ],
    impact: [
      'Financial fraud via impersonating executives',
      'Political misinformation and election manipulation',
      'Reputation destruction of individuals',
      'Bypasses facial recognition security systems',
      'Erodes public trust in authentic media'
    ],
    prevention: [
      'Use deepfake detection tools (Microsoft Video Authenticator)',
      'Establish verbal code words for sensitive transactions',
      'Multi-factor verification for financial approvals',
      'Train staff to verify unusual video/audio requests',
      'Watermarking and digital signing of authentic content'
    ],
    programming: [
      'DeepFaceLab, FaceSwap — open-source deepfake creation',
      'ElevenLabs, Resemble AI — voice cloning platforms',
      'GANs (Generative Adversarial Networks) — core AI model',
      'Wav2Lip — lip-sync generation tool',
      'Stable Diffusion — image/video generation'
    ]
  },
  3: {
    title: 'RANSOMWARE',
    whatItIs: 'Malware that encrypts a victim\'s files or entire system, then demands a ransom payment (usually in cryptocurrency) to restore access.',
    types: [
      'Crypto Ransomware: Encrypts files, demands payment for decryption key',
      'Locker Ransomware: Locks the entire device, blocks all access',
      'Double Extortion: Encrypts AND threatens to leak stolen data',
      'Triple Extortion: Adds DDoS attack on top of encryption + leak threat',
      'RaaS (Ransomware-as-a-Service): Ransomware sold/rented to other criminals',
      'Wiper Ransomware: Destroys data even if ransom is paid',
      'Mobile Ransomware: Targets Android/iOS devices'
    ],
    history: [
      '1989 — AIDS Trojan: first ransomware, distributed via floppy disk',
      '2013 — CryptoLocker: first modern crypto-ransomware, $3M collected',
      '2017 — WannaCry: hit NHS, Boeing, FedEx; $4B damage',
      '2019 — Ryuk ransomware targeted hospitals and governments',
      '2021 — Colonial Pipeline attack: fuel supply disrupted across US East Coast',
      '2023 — MOVEit ransomware attack hit 1,000+ organizations globally'
    ],
    impact: [
      'Complete loss of access to files and systems',
      'Average ransom demand: $1.5M+ for enterprises',
      'Business downtime averaging 21 days',
      'Reputational damage and legal liability',
      'Critical infrastructure disruption (hospitals, pipelines)'
    ],
    prevention: [
      'Regular offline and cloud backups (3-2-1 backup rule)',
      'Patch systems and software immediately',
      'Use EDR (Endpoint Detection & Response) tools',
      'Disable RDP if not needed; use VPN',
      'Employee phishing awareness training'
    ],
    programming: [
      'AES-256 + RSA-2048 encryption algorithms',
      'TOR network for anonymous C2 communication',
      'Cobalt Strike for initial access and lateral movement',
      'Mimikatz for credential harvesting pre-encryption',
      'Payment via Monero/Bitcoin cryptocurrency',
      'RaaS platforms: LockBit, BlackCat, REvil'
    ]
  },
  4: {
    title: 'BUSINESS EMAIL COMPROMISE (BEC)',
    whatItIs: 'A sophisticated scam where attackers impersonate executives, vendors, or partners via email to trick employees into transferring money or sensitive data.',
    types: [
      'CEO Fraud: Impersonates CEO to request urgent wire transfer',
      'Vendor Impersonation: Fakes a supplier email to change payment details',
      'Attorney Impersonation: Poses as lawyer demanding confidential action',
      'Data Theft BEC: Requests employee W-2s or HR records',
      'Account Compromise: Uses hacked real email account to send requests',
      'Invoice Fraud: Sends fake invoices from lookalike domains'
    ],
    history: [
      '2013 — BEC first identified by FBI as emerging threat',
      '2015 — Ubiquiti Networks lost $46.7M to BEC attack',
      '2016 — FACC (Austrian aerospace) lost $61M via CEO fraud',
      '2019 — Toyota Boshoku lost $37M in BEC vendor fraud',
      '2021 — FBI reported $2.4 billion lost to BEC in the US alone',
      '2023 — BEC remains the #1 costliest cybercrime globally'
    ],
    impact: [
      'Average loss per incident: $125,000+',
      'Funds transferred to overseas accounts, rarely recovered',
      'Damages business relationships and partner trust',
      'Legal and regulatory consequences for companies',
      'Total global losses exceed $50 billion since 2013'
    ],
    prevention: [
      'Verify all payment requests via phone call (not email)',
      'Implement DMARC, DKIM, SPF email authentication',
      'Require dual approval for all wire transfers',
      'Train finance teams to recognize BEC red flags',
      'Use email security gateways with AI detection'
    ],
    programming: [
      'Email spoofing via SMTP manipulation',
      'Lookalike domains (e.g., paypa1.com vs paypal.com)',
      'Email thread hijacking using compromised accounts',
      'Open-source OSINT tools for executive research',
      'Phishing kits for credential harvesting first'
    ]
  },
  5: {
    title: 'CLOUD ATTACKS',
    whatItIs: 'Cyberattacks that specifically target cloud infrastructure, services, storage, and misconfigurations to steal data, disrupt services, or take over accounts.',
    types: [
      'Cloud Misconfiguration: Exploits poorly configured S3 buckets, databases',
      'Account Hijacking: Steals cloud account credentials to access resources',
      'Insecure APIs: Attacks exposed or poorly secured cloud APIs',
      'Data Breach via Cloud: Exfiltrates data from cloud storage',
      'Cryptojacking in Cloud: Uses hijacked cloud resources to mine crypto',
      'Insider Threat: Malicious or negligent cloud admin abuse',
      'VM Escape: Escapes virtual machine to access host system'
    ],
    history: [
      '2012 — Instagram/Dropbox: cloud storage breaches exposed millions of accounts',
      '2017 — Uber: AWS S3 bucket breach exposed 57M user records',
      '2019 — Capital One: AWS misconfiguration leaked 100M customer records',
      '2020 — SolarWinds used Azure/cloud pivoting for lateral movement',
      '2022 — Microsoft Azure SSRF vulnerability exposed customer data',
      '2023 — Microsoft cloud breach: Chinese hackers accessed US govt emails'
    ],
    impact: [
      'Massive data exposure from misconfigured storage',
      'Complete account takeover of cloud environments',
      'Unexpected cloud bills from cryptojacking',
      'Business disruption from deleted cloud resources',
      'Regulatory fines (GDPR, HIPAA) for data exposure'
    ],
    prevention: [
      'Regular cloud security posture audits (CSPM tools)',
      'Enable MFA on all cloud accounts',
      'Apply least-privilege IAM policies',
      'Encrypt all data at rest and in transit',
      'Use Cloud Access Security Broker (CASB)'
    ],
    programming: [
      'Pacu — AWS exploitation framework',
      'ScoutSuite — multi-cloud security auditing',
      'Shodan — finds exposed cloud services',
      'Terraform misconfiguration scanners',
      'CloudGoat — vulnerable-by-design AWS environment for testing'
    ]
  },
  6: {
    title: 'SUPPLY CHAIN ATTACKS',
    whatItIs: 'Instead of attacking the target directly, attackers compromise a trusted third-party vendor, software provider, or hardware supplier to reach the real target.',
    types: [
      'Software Supply Chain: Injects malicious code into software updates',
      'Hardware Supply Chain: Implants malicious chips during manufacturing',
      'Open Source Poisoning: Adds backdoors to popular open-source packages',
      'Dependency Confusion: Uploads malicious package with same name as internal one',
      'CI/CD Pipeline Attack: Compromises build/deployment systems',
      'Third-Party Vendor Attack: Breaches a vendor with access to the target'
    ],
    history: [
      '2013 — Target breach: attackers entered via HVAC vendor',
      '2017 — NotPetya: spread via Ukrainian accounting software update',
      '2020 — SolarWinds: 18,000 organizations infected via Orion software update',
      '2021 — Kaseya VSA: 1,500+ businesses hit via MSP software',
      '2022 — PyPI malicious packages downloaded 30,000+ times',
      '2023 — 3CX supply chain attack compromised VoIP software globally'
    ],
    impact: [
      'One attack can compromise thousands of organizations',
      'Trusted software becomes a weapon',
      'Extremely difficult to detect (signed, legitimate software)',
      'National security implications (government targets)',
      'Long dwell time before discovery (avg. 200+ days)'
    ],
    prevention: [
      'Verify software integrity via checksums and signatures',
      'Software Bill of Materials (SBOM) for all dependencies',
      'Zero-trust even for trusted vendors',
      'Monitor third-party access continuously',
      'Use isolated environments for vendor software'
    ],
    programming: [
      'Code signing bypass techniques',
      'Typosquatting on npm, PyPI, RubyGems',
      'SUNBURST malware (SolarWinds backdoor)',
      'CI/CD poisoning via GitHub Actions manipulation',
      'Dependency confusion attacks via package managers'
    ]
  },
  7: {
    title: 'MOBILE MALWARE',
    whatItIs: 'Malicious software specifically designed to attack smartphones and tablets — targeting Android and iOS devices to steal data, spy on users, or commit fraud.',
    types: [
      'Mobile Ransomware: Locks phone, demands ransom',
      'Spyware: Secretly monitors calls, messages, location',
      'Banking Trojans: Steals mobile banking credentials and OTPs',
      'Adware: Floods device with unwanted ads, drains battery',
      'SMS Stealer: Intercepts OTP/2FA codes via SMS',
      'Stalkerware: Hidden monitoring app used for surveillance',
      'Fake Apps: Malicious apps disguised as legitimate ones',
      'Rooting Malware: Gains root access to fully control the device'
    ],
    history: [
      '2004 — Cabir: first mobile worm for Symbian OS',
      '2010 — DroidDream malware infected 50+ Android apps on Play Store',
      '2016 — Pegasus spyware discovered targeting iOS zero-days',
      '2019 — Agent Smith malware infected 25 million Android devices',
      '2021 — FluBot banking trojan spread via SMS across Europe',
      '2023 — SpyLoan apps on Play Store scammed millions in developing countries'
    ],
    impact: [
      'Real-time surveillance of calls, texts, location',
      'Banking fraud via OTP interception',
      'Identity theft from contact/photo access',
      'Corporate data leak via employee mobile devices',
      'Physical safety risk from stalkerware'
    ],
    prevention: [
      'Download apps only from official stores',
      'Review app permissions carefully before installing',
      'Keep mobile OS updated always',
      'Use mobile security/antivirus apps',
      'Avoid sideloading APKs from unknown sources',
      'Enable Google Play Protect'
    ],
    programming: [
      'APKTool, JADX — Android reverse engineering',
      'Metasploit — mobile payload generation',
      'Frida — dynamic instrumentation for mobile apps',
      'ADB (Android Debug Bridge) — for exploitation',
      'Pegasus used zero-click iOS exploits',
      'Languages: Java, Kotlin, Swift, C'
    ]
  },
  8: {
    title: 'API ATTACKS',
    whatItIs: 'APIs (Application Programming Interfaces) connect apps and services. Attackers exploit poorly secured APIs to steal data, bypass authentication, or take control of backend systems.',
    types: [
      'Broken Object Level Auth: Accesses other users\' data by changing IDs in requests',
      'Broken Auth: Bypasses login via weak token or session management',
      'Excessive Data Exposure: API returns more data than the app needs/shows',
      'Rate Limit Abuse: Sends unlimited requests to brute-force or scrape data',
      'Injection via API: SQLi/XSS delivered through API parameters',
      'BFLA (Broken Function Auth): Accesses admin functions via regular user API calls',
      'Mass Assignment: Sends extra fields in API request to modify restricted data',
      'API Key Theft: Steals hardcoded or exposed API keys'
    ],
    history: [
      '2019 — Facebook API bug exposed 540M user records via third-party apps',
      '2019 — Venmo: public API leaked all transactions (millions of records)',
      '2020 — Experian API exposed credit scores with just name+address',
      '2021 — LinkedIn scraping via API: 700M records exposed',
      '2022 — Twitter API flaw: 5.4M user accounts scraped and sold',
      '2023 — T-Mobile API breach: 37 million customer accounts exposed'
    ],
    impact: [
      'Massive data scraping of user information',
      'Authentication bypass granting unauthorized access',
      'Financial loss through manipulation of transactions',
      'PII exposure leading to identity theft',
      'Business logic abuse (fake discounts, price manipulation)'
    ],
    prevention: [
      'Implement proper authentication (OAuth 2.0, JWT)',
      'Rate limiting and throttling on all endpoints',
      'Never expose sensitive data unnecessarily in responses',
      'Use API gateways with security policies',
      'Regular API security testing (OWASP API Top 10)',
      'Rotate and protect all API keys'
    ],
    programming: [
      'Postman, Insomnia — API testing and fuzzing',
      'Burp Suite — intercept and manipulate API calls',
      'OWASP ZAP — automated API vulnerability scanning',
      'GraphQL introspection exploitation',
      'JWT attacks — algorithm confusion, none algorithm',
      'Languages: Python, JavaScript for exploit scripting'
    ]
  },
  9: {
    title: 'CRYPTOJACKING',
    whatItIs: 'Attackers secretly use a victim\'s computing resources (CPU/GPU) to mine cryptocurrency without their knowledge — slowing down devices while generating profit for the attacker.',
    types: [
      'Browser-Based: JavaScript runs in browser tab and mines crypto',
      'File-Based: Malware installed on device mines in background',
      'Cloud Cryptojacking: Hijacks cloud servers for massive mining power',
      'Container Cryptojacking: Infects Docker/Kubernetes environments',
      'Mobile Cryptojacking: Mining malware on Android devices',
      'Router/IoT Cryptojacking: Infects routers and IoT devices to mine'
    ],
    history: [
      '2011 — First bitcoin mining malware appeared',
      '2017 — Coinhive launched browser-based XMR mining script',
      '2018 — 4,000 UK government websites infected with cryptojacking script',
      '2018 — Tesla\'s AWS cloud hijacked for Monero mining',
      '2019 — Coinhive shut down; attacks shifted to file-based malware',
      '2023 — Cloud cryptojacking attacks increased 600% year-over-year'
    ],
    impact: [
      'Devices run slow, overheat, and battery drains fast',
      'Increased electricity bills for victims',
      'Massive unexpected cloud computing bills',
      'Shortened hardware lifespan from overuse',
      'Can go undetected for months or years'
    ],
    prevention: [
      'Use ad blockers with anti-cryptomining filters (uBlock Origin)',
      'Deploy endpoint detection tools',
      'Monitor CPU usage for unexpected spikes',
      'Use browser extensions: NoCoin, MinerBlock',
      'Audit cloud resource usage regularly',
      'Keep all software and browsers updated'
    ],
    programming: [
      'Coinhive, JSEcoin — browser-based mining scripts (defunct but cloned)',
      'Mines primarily Monero (XMR) — untraceable cryptocurrency',
      'XMRig — open-source miner used in attacks',
      'Delivered via drive-by downloads, malvertising, phishing',
      'Cloud attacks via exposed Docker APIs, Kubernetes misconfigs',
      'Languages: JavaScript (browser), C++ (native miners)'
    ]
  },
  10: {
    title: 'ZERO-DAY EXPLOITS',
    whatItIs: 'A zero-day is a previously unknown software vulnerability that the vendor has had zero days to fix. Attackers exploit it before any patch exists — making it extremely dangerous.',
    types: [
      'Zero-Day Vulnerability: Unknown flaw in software/hardware',
      'Zero-Day Exploit: Code that takes advantage of the flaw',
      'Zero-Click Exploit: Exploits device without any user interaction',
      'Browser Zero-Day: Targets Chrome, Firefox, Safari vulnerabilities',
      'OS Zero-Day: Targets Windows, Linux, macOS kernel flaws',
      'Firmware Zero-Day: Targets BIOS/UEFI or router firmware',
      'Zero-Day in Libraries: Exploits flaws in widely used code libraries (Log4Shell)'
    ],
    history: [
      '2010 — Stuxnet: used 4 Windows zero-days to destroy Iran\'s nuclear centrifuges',
      '2014 — Heartbleed: OpenSSL zero-day exposed millions of servers',
      '2017 — EternalBlue: NSA zero-day leaked and used in WannaCry',
      '2021 — Log4Shell: Log4j zero-day affected 3 billion+ devices',
      '2021 — Chrome zero-days: 12 actively exploited in a single year',
      '2023 — MOVEit zero-day affected 2,000+ organizations worldwide'
    ],
    impact: [
      'No patch available at time of attack — highly effective',
      'Used in nation-state espionage and cyber warfare',
      'Can affect millions before vendor is even aware',
      'Extremely high financial and strategic damage',
      'Very difficult to defend against proactively'
    ],
    prevention: [
      'Use virtual patching via WAF/IPS as temporary shield',
      'Implement zero-trust network architecture',
      'Behavioral detection tools (not just signature-based)',
      'Bug bounty programs to find flaws before attackers',
      'Threat intelligence feeds for early warning',
      'Minimize attack surface — disable unused features/services'
    ],
    programming: [
      'Discovered via fuzzing, reverse engineering, code auditing',
      'Metasploit, Cobalt Strike for exploit delivery',
      'Sold on dark web zero-day markets for $500K–$2.5M+',
      'NSO Group Pegasus built entirely on iOS zero-days',
      'CVE system tracks known vulnerabilities',
      'Languages: C, C++, Python, Assembly for exploit development',
      'Exploit brokers: Zerodium, Crowdfense'
    ]
  }
};
