# 🛡️ FraudWatch Infographic

---

## 🛑 The $2 Trillion Problem
Every year, up to **$2 trillion** of illegal money moves quietly through the global financial system. That’s almost **5% of the world’s economy** lost to money muling.

**Our Mission:** RIFT 2026 Money Muling Detection Challenge (Problem Statement 3).

---

## 💡 The Solution: FraudWatch by Team abc
Inspired by the tokenization security of Apple Pay, FraudWatch tracks suspicious networks in **UPI transactions** using **graph-based analysis** and **machine learning**.

---

### Step 1: The Input (Data Ingestion) 📁
- **Action:** User uploads a CSV of UPI transactions.
- **Why UPI?:** High-frequency, real-time data rich with details: Sender, Receiver, Amount, and Timestamp.

### Step 2: The Brain (Machine Learning) 🧠
- **Core Technology:** Supervised Learning using a **Random Forest Classifier**.
- **Goal:** Assign a precise **Risk Score** to every account.

### Step 3: The Detectives (Analysis Engines) 🕵️
- 🔄 **Circular Transactions:** Catches loops (e.g., A → B → C → A).
- 💸 **Smurfing:** Detects rapid fan-in/fan-out transfers.
- 🐚 **Shell Layering:** Follows money moving through low-activity accounts.
- ⚡ **Velocity Tracking:** Flags unusual speeds or massive transaction volumes.

### Step 4: The Interface (Interactive Graph) 🕸️
- 🟢 **Nodes = Accounts:** Hover for ID, Suspicion Score, and Transaction Count.
- ➖ **Edges = Money Transfers.**
- 🎨 **Color Coded Threat Levels:**
  - 🔴 **Red:** High Risk
  - 🟠 **Orange:** Medium Risk
  - 🟡 **Yellow:** Low Risk
  - 🔵 **Blue:** Normal Activity
- ***Insight:*** Many connections = potential mule ring!

### Step 5: The Output (Actionable Intelligence) 📊
- 📋 **Dashboard Table:** View Ring ID, Pattern Type, Member Count, and Risk Score. Sort and filter seamlessly.
- 📑 **JSON Export:** 100% audit-ready report. Includes total accounts, flagged cases, detected rings, and processing times.

---

**Bottom Line:** From CSV to pure transparency, FraudWatch follows the money to uncover financial crime networks in real-time.
