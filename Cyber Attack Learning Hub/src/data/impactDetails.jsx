import React from 'react';

export const impactDetailsData = {
  financial: (
    <div className="impact-detail-content">
      <h2 className="text-neon glow-text mb-4">Financial Impact</h2>
      <p>When evaluating a major cyber incident like WannaCry, the actual ransom demanded by the attackers represents only a microscopic fraction of the overall damage. In cybersecurity, financial impact is measured across direct financial losses, widespread business interruption, and massive recovery/remediation costs.</p>

      <h3>1. Global Economic Losses vs. Actual Ransom Paid</h3>
      <p>The gap between what the attackers asked for and what the attack actually cost the world economy highlights the asymmetric nature of modern cyber warfare.</p>
      
      <div className="impact-highlight-box neon-box">
        <p className="text-center mb-0"><strong>[Ransoms Collected: ~$130,000]</strong> <br/>vs.<br/> <strong>[Total Global Damages: $4 Billion - $8 Billion]</strong></p>
      </div>

      <h4>The Ransom Deficit</h4>
      <p>WannaCry demanded a relatively modest ransom of $300 to $600 in Bitcoin per machine. Despite infecting more than 300,000 computers globally, the campaign was a commercial failure for its creators. Total payments tracked to the attackers' hardcoded Bitcoin wallets amounted to roughly $130,000.</p>
      <p><strong>Why so low?</strong> The malware's payment tracking system was severely flawed; it had no automated mechanism to link a specific victim's payment to their unique file decryption key. Security researchers quickly warned organizations not to pay, as there was no proof that doing so would actually recover the data.</p>

      <h4>Total Global Damage</h4>
      <p>In contrast to the meager payout, cybersecurity risk modeling firms and economic reports estimate the total global financial damage caused by WannaCry to range between $4 billion and $8 billion.</p>

      <h3>2. Micro-Analysis: The Financial Hit to the UK's NHS</h3>
      <p>The UK’s National Health Service (NHS) became the most visible casualty of the attack, demonstrating how digital downtime maps directly to massive operational and financial losses.</p>
      
      <table className="impact-table">
        <thead>
          <tr>
            <th>Financial Impact Vector</th>
            <th>Estimated Cost</th>
            <th>Operational Consequences</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Direct Lost Output</td>
            <td>~£20 Million</td>
            <td>Disruption to critical patient care, forcing the cancellation of over 19,000 appointments and non-emergency surgeries. Ambulance routes had to be diverted.</td>
          </tr>
          <tr>
            <td>IT Recovery & System Restoration</td>
            <td>~£72 Million</td>
            <td>Emergency IT support, data forensics, manual system rebuilds, and the rollout of emergency patches to thousands of legacy workstations.</td>
          </tr>
          <tr>
            <td><strong>Total Financial Cost</strong></td>
            <td><strong>~£92 Million (~$128M USD)</strong></td>
            <td>Absorbed entirely by the institutional network and UK taxpayers.</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Hidden Cost Drivers of a Ransomware Outbreak</h3>
      <p>When an infrastructure-disrupting worm hits an enterprise, the financial damage cascades through several distinct categories:</p>
      <ul>
        <li><strong>A. Business Interruption & Idle Labor:</strong> The cost of employees sitting at desks unable to work because their workstations are encrypted is massive. For example, the shipping giant FedEx disclosed that its European subsidiary, TNT Express, suffered deep operational delays and estimated hundreds of millions of dollars in losses due to lost revenue and system downtime.</li>
        <li><strong>B. Forensic and Incident Response Fees:</strong> Organizations must bring in specialized, high-tier external incident response teams to hunt for active threats, ensure the malware has been completely purged from network segments, and validate backups before bringing systems back online.</li>
        <li><strong>C. Downstream Supply Chain Liabilities:</strong> When production facilities or logistics networks halt, agreements (Service Level Agreements) are breached. Delayed shipments, spoiled goods, and unfulfilled contracts lead to heavy penalty fees and subsequent litigation.</li>
      </ul>

      <div className="impact-highlight-box neon-box" style={{borderColor: 'var(--color-warning)'}}>
        <h4 className="text-warning">The 2017 Twin Lesson</h4>
        <p>Just one month after WannaCry, the NotPetya attack hit using the exact same EternalBlue exploit. However, NotPetya had no kill switch and was built purely for destruction rather than extortion. It caused an estimated $10 billion in damages, cementing 2017 as the year organizations realized that basic patch management was no longer optional—it was a multi-billion dollar liability.</p>
      </div>
    </div>
  ),

  industries: (
    <div className="impact-detail-content">
      <h2 className="text-neon glow-text mb-4">Industries Affected</h2>
      <p>The unique nature of the WannaCry outbreak—combining file-locking ransomware with an aggressive network worm—meant it didn't choose victims based on their industry or net worth. Instead, it struck any organization with exposed, unpatched SMBv1 ports.</p>
      <p>Because of this "zero-click" lateral propagation model, the attack simultaneously paralyzed a diverse array of sectors across 150+ countries.</p>

      <h3>1. Healthcare & Public Health</h3>
      <p>The healthcare sector was arguably the hardest-hit, serving as a stark reminder of how digital vulnerabilities map to real-world physical danger.</p>
      <ul>
        <li><strong>The Primary Casualty:</strong> The UK’s National Health Service (NHS) saw over 60 of its internal regional organizations and hospital networks encrypted within minutes.</li>
        <li><strong>Operational Chaos:</strong> Doctors and nurses were locked entirely out of electronic health records, diagnostic imaging systems, and pharmacy logs.</li>
        <li><strong>The Consequences:</strong> Emergency rooms were forced to divert arriving ambulances to unaffected regions, and over 19,000 scheduled surgeries and appointments were abruptly canceled. Hospitals had to revert completely to paper-and-pen logs.</li>
      </ul>

      <h3>2. Logistics, Shipping, and Supply Chain</h3>
      <p>For global shipping syndicates, tracking and automated dispatch systems are the backbone of revenue. If the infrastructure goes down, the physical movement of cargo halts.</p>
      <ul>
        <li><strong>The Impact:</strong> Heavyweight shipping and delivery firms like FedEx (specifically its European subsidiary TNT Express) experienced severe system-wide operational failures.</li>
        <li><strong>The Consequences:</strong> Delivery sorting terminals, digital manifest logs, and port handling databases went dark. This caused cascading cargo backlogs and processing delays across international distribution centers that took weeks to clear.</li>
      </ul>

      <h3>3. Automotive & Heavy Manufacturing</h3>
      <p>Modern assembly lines rely heavily on Industrial Control Systems (ICS) and Operational Technology (OT) networks linked to local Windows computers that supervise the floor machinery.</p>
      <ul>
        <li><strong>The Impact:</strong> Industrial automotive conglomerates like Renault, Nissan, and Honda had their manufacturing networks actively targeted by the worm.</li>
        <li><strong>The Consequences:</strong> To prevent the virus from traveling laterally into deeper internal robotics arrays, these manufacturers had to aggressively pull the plug, temporarily shutting down operations across major assembly plants in England, France, Japan, and India.</li>
      </ul>

      <h3>4. Telecommunications & Infrastructure Providers</h3>
      <p>Telecom networks run on massive internal directories and automated provisioning databases. If an administrator workstation on these subnets is breached, the network threat plane expands exponentially.</p>
      <ul>
        <li><strong>The Impact:</strong> Major multi-national network carriers, most notably Telefónica in Spain and Megafon in Russia, discovered active infections moving across internal corporate operations.</li>
        <li><strong>The Consequences:</strong> Employees were instructed via emergency announcements to immediately turn off local terminals. While the external cell networks and customer data streams largely remained intact, the internal corporate business platforms, billing departments, and back-office networks faced deep operational lockouts.</li>
      </ul>

      <h3>5. Public Sector, Government, & Education</h3>
      <p>Many regional public offices operate on thin IT infrastructure budgets, making them prone to running legacy, out-of-date computer setups that are difficult to patch or upgrade.</p>
      <ul>
        <li><strong>The Impact:</strong> From municipal police networks and regional tax collection offices to university computer labs, the public sector was heavily disrupted. In India, local state government offices reported widespread workstation lockouts.</li>
        <li><strong>The Consequences:</strong> Civil service administration ground to a halt. Local operations could not process public requests, process administrative fees, or handle standard public database lookups while IT containment teams manually isolated infected machines.</li>
      </ul>

      <h3>6. Semiconductor & High-Tech Manufacturing (The Echo Wave)</h3>
      <p>The threat profile of the WannaCry architecture didn't end in 2017. Because variants of the worm continued to echo through public spaces, high-tech manufacturing pipelines remained highly vulnerable if their baseline patch hygiene slipped.</p>
      <ul>
        <li><strong>The 2018 Case Study:</strong> In August 2018, a variation of the ransomware hit Taiwan Semiconductor Manufacturing Company (TSMC)—the world's leading chip-fabrication supplier.</li>
        <li><strong>The Consequences:</strong> The worm swept through more than 10,000 automated machines inside TSMC's most advanced chip-fabrication foundries. This caused several days of absolute production downtime, delaying shipments of high-end consumer smartphone processors and costing the company millions.</li>
      </ul>

      <div className="impact-highlight-box neon-box mt-4">
        <h4>Conceptual Overview: Why Were These Particular Industries Ravaged?</h4>
        <p>The cross-industry destruction of WannaCry highlights a fundamental architectural weakness that tied all these distinct sectors together.</p>
        <p className="text-center font-mono text-neon"><strong>[Legacy OS Dependencies] ──&gt; [Deferred Patch Cycles] ──&gt; [Flat, Unsegmented Networks]</strong></p>
        
        <h5 className="mt-3">The Legacy Dependency Trap</h5>
        <p>Healthcare, manufacturing, and shipping rely on multi-million dollar physical machinery (like MRI scanners or robotic arms) that are bound to old, legacy Windows OS platforms. Upgrading these configurations is incredibly costly and complex.</p>
        
        <h5 className="mt-3">Deferred Patch Cycles</h5>
        <p>While Microsoft had released the MS17-010 security patch two months prior to the outbreak, these major sectors typically stagger or defer automatic updates out of fear that a new software patch might accidentally break a custom, mission-critical application.</p>
        
        <h5 className="mt-3">Lack of Network Segmentation</h5>
        <p>Once WannaCry bypassed the outer perimeter firewall of an organization, it encountered a flat network. Because these companies lacked strict internal sub-network segregation, the worm used its automated EternalBlue exploit to hop freely from a public-facing admin computer straight down onto critical production or clinical endpoints without encountering a single internal barrier.</p>
      </div>
    </div>
  ),

  globalMap: (
    <div className="impact-detail-content">
      <h2 className="text-neon glow-text mb-4">Global Impact Map</h2>
      <p>The Global Impact Map of the 2017 WannaCry outbreak provides a stark visualization of how highly interconnected and vulnerable the digital world is to self-propagating malware. Because WannaCry relied on a network worm engine rather than localized human interaction (like phishing clicks), the geographic spread was instantaneous, creating a distinct global heat map of infection.</p>

      <h3>1. Geographic Heat Map Profiles</h3>
      <p>When security agencies and threat intelligence firms mapped the real-time detections, the concentration of the infection fell heavily on specific global corridors.</p>
      <ul className="kpi-list">
        <li><strong className="text-danger">[Highest Heat Intensity]</strong> ──&gt; Russia, Ukraine, India, Taiwan, and China</li>
        <li><strong className="text-warning">[Moderate Heat Intensity]</strong> ──&gt; Western Europe (UK, Spain, France)</li>
        <li><strong className="text-neon">[Lower Heat Intensity]</strong> ──&gt; United States, Canada, Australia</li>
      </ul>

      <h4>The Russian and Eastern European Concentration</h4>
      <p>The initial global tracking telemetry showed an overwhelming concentration of infections in Russia and Ukraine.</p>
      <p><strong>The Reason:</strong> A significant percentage of enterprise and municipal infrastructure networks in these regions relied on unpatched or legacy Windows environments (including deeply outdated systems like Windows XP and Windows Server 2003). Because patch compliance was low, the EternalBlue exploit spread laterally across these subnets like wildfire.</p>

      <h4>The Asia-Pacific Surge</h4>
      <p>Countries like India, China, and Taiwan lit up rapidly on the global tracking index.</p>
      <ul>
        <li><strong>In India</strong>, state government offices and regional networks were locked down. The country's massive footprint of legacy IT infrastructure, combined with a high volume of unpatched operating systems, made it an ideal environment for the worm to multiply.</li>
        <li><strong>In Taiwan</strong>, the lateral movement eventually found its way into massive isolated networks, such as TSMC’s automated chip-fabrication foundries.</li>
      </ul>

      <h3>2. Why the United States Shared a Lower Heat Profile</h3>
      <p>While major US conglomerates (like FedEx) were severely hit, the United States overall had a lighter color density on the global infection map compared to Europe and Asia.</p>
      <ul>
        <li><strong>Rapid Patch Cycles:</strong> Enterprise IT setups in North America generally enforced more aggressive, automated patch-management policies. Since Microsoft had released the MS17-010 security patch two months prior to the outbreak, many American corporate firewalls and endpoints had already closed the vulnerable SMBv1 port 445.</li>
        <li><strong>Network Edge Protections:</strong> Standard US internet service providers (ISPs) and enterprise perimeters commonly block inbound traffic on port 445 at the carrier level, blunting the worm's ability to scan and jump directly into local networks from the public internet.</li>
      </ul>

      <h3>3. Key Map Takeaways: Defining Features of the Outbreak</h3>
      <p>The overall layout of the WannaCry impact map redefined how modern security engineers evaluate borderless digital risks:</p>
      <ul>
        <li><strong>Simultaneous Global Execution:</strong> The outbreak did not slowly travel along geographical trade paths. Because the malware scanned random public IP addresses globally, infections exploded in London, Madrid, Moscow, and Mumbai within the exact same hour window.</li>
        <li><strong>The Perimeter Moat Fallacy:</strong> The map proved that traditional perimeter defenses are insufficient. If a multi-national corporation had a single unpatched laptop in a satellite office in Asia, the worm would infect that machine, travel across the corporate internal VPN tunnel, and encrypt the primary servers located in a secure data center in Europe.</li>
        <li><strong>The Kill Switch Blind Spot:</strong> The global infection map ceased expanding outward almost instantly the moment the kill-switch domain was registered by Marcus Hutchins. The live heat maps shifted from an expanding wave to a static cleanup zone within minutes, demonstrating how a single line of defensive code can alter global geopolitics.</li>
      </ul>
    </div>
  ),

  dataBreach: (
    <div className="impact-detail-content">
      <h2 className="text-neon glow-text mb-4">Data Breach Impact</h2>
      <p>When analyzing a massive cyber incident like the WannaCry outbreak, it is crucial to separate it from traditional data breaches.</p>
      <p>In a standard data breach (like a SQL injection attack on a database), the attackers' primary goal is a breach of confidentiality—they want to silently steal, copy, and exfiltrate records (like passwords, credit cards, or personal data) to sell on the dark web.</p>
      <p>WannaCry, however, was fundamentally an attack on data availability and integrity. The attackers didn't care about reading the data; they cared about locking it up.</p>

      <h3>1. Confidentiality vs. Availability: The WannaCry Difference</h3>
      <p>Because WannaCry was a self-propagating worm built to encrypt systems as fast as possible, the "data breach" aspect didn't follow the usual playbook.</p>
      <ul>
        <li><strong>No Evidence of Mass Data Exfiltration:</strong> Forensic investigations by agencies like the FBI and the UK's National Cyber Security Centre (NCSC) found no evidence that the attackers behind WannaCry actually copied or downloaded victims' data before encrypting it.</li>
        <li><strong>The Structural Reason:</strong> The malware binary was incredibly compact. It was designed to scan port 445, exploit the system, encrypt the hard drive, and move on. It lacked the file-transfer protocols and command-and-control bandwidth required to silently siphon terabytes of data back to the attackers.</li>
      </ul>

      <h3>2. The Devastating Impact of Data Unavailability</h3>
      <p>Even though data wasn't stolen, the impact of losing access to that data was catastrophic. Data unavailability can be just as damaging as data theft—especially in high-stakes environments.</p>
      
      <h4>The Healthcare Cost: Weaponizing Data Access</h4>
      <p>In the UK's National Health Service (NHS), the data breach manifested as a complete blackout of patient information:</p>
      <ul>
        <li><strong>Locked Medical Records:</strong> Doctors could not access patient medical histories, allergy records, or current prescription lists.</li>
        <li><strong>Diagnostic Blindness:</strong> MRI machines, CT scanners, and blood-tracking systems could not save or transmit data because the local computers running them were encrypted.</li>
        <li><strong>The Human Risk:</strong> This lack of data access created an immediate safety crisis, forcing hospitals to turn away ambulances and cancel emergency procedures because treating patients without their medical data was too dangerous.</li>
      </ul>

      <h4>The Corporate Cost: Operational Amnesia</h4>
      <p>For logistics and manufacturing companies, the sudden loss of data access wiped out their operational memory:</p>
      <ul>
        <li>Shipping companies lost access to digital cargo manifests, meaning they literally did not know what was inside thousands of shipping containers sitting on their docks.</li>
        <li>Factories lost access to the proprietary software recipes and assembly-line code required to run automated robotics.</li>
      </ul>

      <h3>3. The 2017 Legacy: The Birth of the "Double Extortion" Breach</h3>
      <p>WannaCry's operational failure to steal data actually reshaped the entire future of the cybercrime industry.</p>
      <p>Because the WannaCry attackers made very little money (only about $130,000) and security researchers stopped the attack with a kill switch, the ransomware cartels learned a valuable lesson. They realized that just locking data wasn't enough, because companies with good backups could simply wipe their systems and restore their data for free.</p>
      
      <div className="impact-highlight-box neon-box">
        <p>As a direct result of the limitations seen in attacks like WannaCry, modern cybercriminals invented Double Extortion:</p>
        <p className="text-center font-mono text-danger"><strong>[Phase 1: Exfiltrate Data (Data Breach)] ──&gt; [Phase 2: Encrypt Systems (Ransomware)]</strong></p>
      </div>
      
      <p>Today, attackers execute a massive data breach first—stealing corporate intellectual property and customer records—before triggering the ransomware. If the victim uses backups to restore their systems, the attackers change tactics and threaten to leak the stolen data publicly unless a ransom is paid. WannaCry was the turning point that forced cybercrime to evolve from simple file-locking into the high-stakes data extortion economy we see today.</p>
    </div>
  ),

  business: (
    <div className="impact-detail-content">
      <h2 className="text-neon glow-text mb-4">Business Impact</h2>
      <p>When a self-propagating worm like WannaCry hits an enterprise, the financial cost of the ransom ($300 to $600) pale in comparison to the structural business impact. Modern cyber attacks do not just disrupt IT departments; they cause immediate, systemic operational failures that ripple across entire corporate ecosystems.</p>
      <p>For global enterprises, the business impact of the 2017 outbreak was defined by three core vectors: operational paralysis, supply chain dependencies, and lasting reputational fallout.</p>

      <h3>1. Operational Downtime and Revenue Paralysis</h3>
      <p>In a highly digitized corporate environment, if the local workstation or production server goes dark, business stops. WannaCry forced organizations into an immediate state of operational amnesia.</p>
      <ul>
        <li><strong>The Shipping Gridlock:</strong> Shipping giant FedEx experienced severe disruption through its European subsidiary, TNT Express. The encryption of internal port logs, dispatch schedules, and tracking databases meant cargo planes and delivery trucks could not be loaded or routed efficiently. FedEx later disclosed in its SEC filings that the attack cost the company an estimated $300 million in lost revenue and emergency remediation expenses.</li>
        <li><strong>Manufacturing Halts:</strong> Industrial operations rely heavily on Windows terminals running the human-machine interfaces (HMIs) for robotic assembly lines. Automakers like Renault (France), Nissan (UK), and Honda (Japan) had to proactively suspend production at major factories to prevent the worm from moving from back-office corporate PCs down into heavy industrial machinery.</li>
      </ul>

      <h3>2. The Supply Chain Domino Effect</h3>
      <p>WannaCry proved that no modern business operates in a vacuum. Even if a corporation’s primary headquarters had perfect patch hygiene, they could still be brought down by a vulnerable vendor or partner.</p>
      
      <div className="text-center my-3">
        <span className="font-mono text-neon"><strong>[Unpatched Vendor Laptop] ──&gt; [Infects Shared VPN Network] ──&gt; [Paralyzes Global Logistics Hub]</strong></span>
      </div>
      
      <p>Because many large organizations maintain persistent, trusted site-to-site VPN connections with external suppliers, logistics firms, and third-party contractors, the worm easily bypassed traditional perimeter firewalls. A single unpatched endpoint at a regional supplier acted as a beachhead, allowing the malware to travel up the supply chain and paralyze global distribution nodes, resulting in unfulfilled contracts and severe compliance penalties.</p>

      <h3>3. Executive Accountability and Reputation Management</h3>
      <p>The business impact of a high-profile cyber incident extends far beyond the immediate IT cleanup window. It fundamentally alters market value and corporate leadership structures.</p>

      <table className="impact-table">
        <thead>
          <tr>
            <th>Business Asset</th>
            <th>Pre-Attack State</th>
            <th>Post-Attack Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Market Valuation</strong></td>
            <td>Stable, predictable stock trajectory.</td>
            <td>Sudden volatility; historical data shows targeted firms experience immediate 3% to 5% stock dips post-incident.</td>
          </tr>
          <tr>
            <td><strong>Leadership Stability</strong></td>
            <td>High confidence in corporate governance.</td>
            <td>Forced executive turnover; C-level officers (specifically CISOs and CIOs) are routinely terminated for systemic patch-management failures.</td>
          </tr>
          <tr>
            <td><strong>Customer Retention</strong></td>
            <td>Relying on brand loyalty and legacy contracts.</td>
            <td>Rapid churn; B2B clients aggressively migrate away from vendors that cannot guarantee operational resilience or data availability.</td>
          </tr>
        </tbody>
      </table>

      <div className="impact-highlight-box neon-box mt-4">
        <h4>The Structural Shift</h4>
        <p>WannaCry was the ultimate wake-up call for corporate boards. It permanently shifted cybersecurity from being treated as a minor "IT problem" handled in a basement server room to a core enterprise risk management priority handled directly by the Board of Directors.</p>
      </div>
    </div>
  ),

  downtime: (
    <div className="impact-detail-content">
      <h2 className="text-neon glow-text mb-4">Downtime & Recovery</h2>
      <p>When a self-propagating worm like WannaCry encrypts an environment, the true operational nightmare begins. The period of downtime (the window where business operations are entirely halted) and the subsequent recovery phase represent the most resource-intensive, expensive, and stressful components of any major cyber incident.</p>
      <p>In a matter of minutes, a decade of digital transformation can be wiped out, forcing a multi-national corporation to rebuild its infrastructure from scratch.</p>

      <h3>1. The Anatomy of System Downtime</h3>
      <p>Downtime during a worm outbreak is rarely a controlled, orderly shutdown. It is an emergency triage situation characterized by immediate panic and systemic blindness.</p>
      
      <h4>Total Operational Blackout</h4>
      <p>For the majority of victims, the immediate consequence of the encryption wave was system unavailability. Employees logged in to find their screens locked by the bright red Wana Decrypt0r interface.</p>
      <ul>
        <li><strong>Communication Breakdown:</strong> Internal corporate email servers, Voice over IP (VoIP) phone networks, and active directory servers went dark. Teams were forced to use personal cellular devices and encrypted messaging apps just to coordinate their emergency responses.</li>
        <li><strong>The Manual Pivot:</strong> In sectors like healthcare (such as the UK's NHS), downtime forced clinical staff to pivot instantly to paper forms, physical whiteboards, and manual handovers to track patients, distribute medications, and manage emergency room admissions.</li>
      </ul>

      <h3>2. The Multi-Stage Recovery Lifecycle</h3>
      <p>Recovering from a widespread ransomware attack is not as simple as clicking "restore" on a backup drive. It requires a meticulous, structured process to ensure that the malware is completely eradicated before systems are brought back online.</p>

      <div className="recovery-steps">
        <div className="recovery-step neon-box">
          <div className="step-num text-neon">1</div>
          <div className="step-info">
            <h5>Containment & Isolation (Phase 1: Stop the Bleeding)</h5>
            <p>IT teams must aggressively isolate network segments. This involves pulling network cables, disconnecting site-to-site VPN tunnels, and blocking TCP Port 445 globally to stop the worm from moving laterally to uninfected subnets or backup repositories.</p>
          </div>
        </div>
        <div className="recovery-step neon-box">
          <div className="step-num text-neon">2</div>
          <div className="step-info">
            <h5>Forensic Triage & Eradication (Phase 2: Locate the Threat)</h5>
            <p>Before restoring data, incident response teams must scan the environment to find the "patient zero" device and purge all remaining binaries, hidden backdoors, and scheduled tasks left behind by the malware.</p>
          </div>
        </div>
        <div className="recovery-step neon-box">
          <div className="step-num text-neon">3</div>
          <div className="step-info">
            <h5>Backup Validation & Patching (Phase 3: Secure the Foundation)</h5>
            <p>Engineers must verify that their offline backups are clean and uncorrupted. Crucially, before any server or workstation is allowed back onto the production network, it must be manually patched with the necessary security updates to close the exploit window.</p>
          </div>
        </div>
        <div className="recovery-step neon-box">
          <div className="step-num text-neon">4</div>
          <div className="step-info">
            <h5>Phased System Restoration (Phase 4: Bring Infrastructure Online)</h5>
            <p>Systems are brought online in a strict, staggered order. Core network infrastructure (DNS, Active Directory) comes first, followed by high-value databases, and finally non-critical employee workstations.</p>
          </div>
        </div>
      </div>

      <h3>3. The Structural Recovery Bottlenecks</h3>
      <p>The gap between a company's theoretical "Recovery Time Objective" (RTO) and reality is often dictated by massive, unforeseen structural bottlenecks.</p>

      <table className="impact-table mt-3">
        <thead>
          <tr>
            <th>Recovery Bottleneck</th>
            <th>The Technical Challenge</th>
            <th>The Real-World Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Network Bandwidth Saturation</strong></td>
            <td>Pulling terabytes of backup data from cloud repositories simultaneously completely chokes corporate internet pipes.</td>
            <td>Restoration speeds drop dramatically, pushing recovery timelines from hours to weeks.</td>
          </tr>
          <tr>
            <td><strong>Lack of Offline Backups</strong></td>
            <td>If backup servers are left connected to the primary network, ransomware will actively encrypt them alongside production data.</td>
            <td>Organizations are forced to manually rebuild entire database schemas from scratch.</td>
          </tr>
          <tr>
            <td><strong>Legacy Hardware Constraints</strong></td>
            <td>Ancient server platforms or specialized medical/industrial devices cannot easily accept modern security patches.</td>
            <td>IT teams must spend days creating custom network isolation rules or firewalls just to shield unpatchable machines.</td>
          </tr>
        </tbody>
      </table>

      <div className="impact-highlight-box neon-box mt-4" style={{borderColor: 'var(--color-danger)'}}>
        <h4 className="text-danger">The Ransom Fallacy</h4>
        <p>Many organizations mistakenly believe that paying the ransom is the fastest route to recovery. In reality, the decryption tools provided by cybercriminals are notoriously slow, poorly written, and prone to crashing. During WannaCry, paying was completely useless because the attackers' flawed payment-matching system meant decryption keys were rarely delivered at all.</p>
      </div>
    </div>
  )
};
