# FraudWatch

**FraudWatch** is an advanced detection tool designed for the **RIFT 2026 Money Muling Detection Challenge** (Problem Statement 3). Built by Team **abc**, this project tackles the global crisis of illegal money movement — a $2 trillion problem representing nearly 5% of the world's economy.

Inspired by architectural marvels of security like Apple Pay's tokenization, FraudWatch leverages **graph-based analysis** and **machine learning** to uncover suspicious networks in high-frequency, real-time UPI transactions.

---

## 🔐 Default Credentials (Seeded Admin)

| Field    | Value           |
|----------|-----------------|
| Email    | admin@admin.com |
| Password | admin@rift      |
| Role     | Admin           |

> These credentials are automatically seeded into the database on first server startup.

---

## Features

1. **Supervised Learning Engine**
   Utilizes a Random Forest classifier to analyze transaction patterns and assign risk scores to individual accounts.

2. **Advanced Detection Mechanisms**
   - **Circular Transaction Detection:** Identifies cycles (e.g., A → B → C → A).
   - **Smurfing Detection:** Flags rapid fan-in/fan-out transfer behaviors.
   - **Shell Account Layering:** Tracks suspicious money flows through low-activity accounts.
   - **Transparency & Velocity Analysis:** Pinpoints accounts with unusual transaction speeds or massive volumes.

3. **Interactive Relational Graph**
   - **Nodes:** Represent individual accounts. Hover to see Account ID, Suspicion Score, and Transaction Count.
   - **Edges:** Represent money transfers.
   - **Risk Color Coding:**
     - **Red:** High Risk
     - **Orange:** Medium Risk
     - **Yellow:** Low Risk
     - **Blue:** Normal / Safe
   - Visualizes dense connections to dynamically expose potential mule rings.

4. **Actionable Insights & Reporting**
   - **Summary Data Table:** Displays Ring ID, Pattern Type, Member Count, and Risk Score. Sort and filter instantly.
   - **JSON Report Export:** Generates an audit-ready report containing suspicious accounts, fraud ring members, and overall summary stats.

---

## How It Works

Upload a CSV of UPI transactions → the system builds the relational graph, scores each account with the Random Forest model, and outputs real-time visual + tabular intelligence ready for audit or automated analysis.

---

## Tech Stack

| Layer    | Technology                              |
|----------|-----------------------------------------|
| Frontend | React, Vite, CSS                        |
| Backend  | Node.js, Express.js                     |
| Database | MongoDB (via Mongoose)                  |
| Auth     | JWT (JSON Web Tokens), bcryptjs         |
| ML       | Python – Random Forest (scikit-learn)   |

---

## Setup

See [SETUP.md](./SETUP.md) for full installation and run instructions.

---

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details. Copyright (c) 2026 abc.
