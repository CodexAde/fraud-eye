# FraudWatch

**FraudWatch** is an advanced detection tool designed for the **RIFT 2026 Money Muling Detection Challenge** (Problem Statement 3). Built by Team **abc**, this project tackles the global crisis of illegal money movement—a $2 trillion problem representing nearly 5% of the world's economy.

Inspired by architectural marvels of security like Apple Pay's tokenization, FraudWatch leverages **graph-based analysis** and **machine learning** to uncover suspicious networks in high-frequency, real-time UPI transactions.

## Key Features

1. **Supervised Learning Engine**
   Utilizes a Random Forest classifier to analyze transaction patterns and assign risk scores to individual accounts.

2. **Advanced Detection Mechanisms**
   - **Circular Transaction Detection:** Identifies cycles (e.g., A → B → C → A).
   - **Smurfing Detection:** Flags rapid fan-in/fan-out transfer behaviors.
   - **Shell Account Layering:** Tracks suspicious money flows through low-activity accounts.
   - **Transparency & Velocity Analysis:** Pinpoints accounts exhibiting unusual transaction speeds or massive volumes.

3. **Interactive Relational Graph**
   - **Nodes:** Represent individual accounts. Hover to see exact Account ID, Suspicion Score, and Transaction Count.
   - **Edges:** Represent money transfers.
   - **Risk Color Coding:**
     - **Red:** High Risk
     - **Orange:** Medium Risk
     - **Yellow:** Low Risk
     - **Blue:** Normal / Safe
   - Visualizes dense connections to dynamically expose potential mule rings.

4. **Actionable Insights & Reporting**
   - **Summary Data Table:** Displays Ring ID, Pattern Type, Member Count, and Risk Score. Highly responsive, allowing quick sorting and filtering.
   - **JSON Report Export:** Generates an automated, audit-ready format containing suspicious accounts, exact scores, fraud ring members, and overall summary stats (total accounts analyzed, total flagged, rings detected, processing time).

## How It Works

Users begin the process by uploading a dataset of UPI transactions in **CSV format** containing crucial fields like sender, receiver, amount, and timestamp. The system instantly processes this input, builds the relational graph, applies the Random Forest scoring model, and outputs actionable, real-time visual and tabular intelligence.

## Why UPI?

UPI transactions are high-frequency, real-time, and contain detailed hop-to-hop data metrics. This makes it the perfect sandbox for tracking down multi-hop mule rings, smurfing activities, and shell accounts efficiently and safely.

## License

This project is licensed under the MIT License - see the LICENSE file for details. Copyright (c) 2026 abc.
