# SETUP — FraudWatch

Step-by-step guide to run the FraudWatch project locally.

---

## Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- A MongoDB Atlas account (or a local MongoDB instance)

---

## 1. Clone the Repository

```bash
git clone <your-repo-url>
cd React\ CI
```

---

## 2. Install All Dependencies

From the **root** folder, install dependencies for both frontend and backend in one go:

```bash
npm install
cd frontend && npm install
cd ../backend && npm install
cd ..
```

---

## 3. Configure Environment Variables

### Backend — `backend/.env`

```env
PORT=5001
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.kqusni.mongodb.net/lastone
FRONTEND_URL=http://localhost:5173
ACCESS_TOKEN_SECRET=rift_secret_key_123
ACCESS_TOKEN_EXPIRY=1d
```

> Replace `<username>` and `<password>` with your MongoDB credentials.

### Frontend — `frontend/.env`

```env
VITE_BACKEND_URL=http://localhost:5001
```

---

## 4. Run the Application

From the **root** folder, start both frontend and backend concurrently:

```bash
npm run dev
```

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5001

---

## 5. Seeded Admin Account

On first startup, the backend automatically creates an admin user in the database. Use these credentials to log in:

| Field    | Value           |
|----------|-----------------|
| Email    | admin@admin.com |
| Password | admin@rift      |
| Role     | Admin           |

---

## 6. Using the App

1. **Login** at http://localhost:5173 using the admin credentials above.
2. Navigate to the **Analyze** page.
3. **Upload** a CSV file containing UPI transaction data with columns: `transaction_id`, `sender_id`, `receiver_id`, `amount`, `timestamp`.
4. Click **Analyze** and let FraudWatch process the data.
5. Explore the **interactive graph** — hover over nodes to see suspicion scores and transaction counts.
6. Review flagged accounts in the **summary table** (filter by risk or member count).
7. **Export** the final JSON report for audit or further analysis.

---

## 7. CSV Format (Sample)

```csv
transaction_id,sender_id,receiver_id,amount,timestamp
TXN001,ACC_A,ACC_B,5000,2024-01-15T10:30:00Z
TXN002,ACC_B,ACC_C,4800,2024-01-15T10:32:00Z
TXN003,ACC_C,ACC_A,4600,2024-01-15T10:35:00Z
```

---

## 8. Troubleshooting

| Issue                        | Fix                                                              |
|------------------------------|------------------------------------------------------------------|
| MongoDB connection error     | Double-check your `MONGODB_URI` in `backend/.env`               |
| Port already in use          | Change `PORT` in `backend/.env` or kill the conflicting process  |
| Admin credentials not working| If DB already has data, seed was skipped — reset your MongoDB collection |
| Frontend can't reach backend | Ensure `VITE_BACKEND_URL` in `frontend/.env` matches backend port |
