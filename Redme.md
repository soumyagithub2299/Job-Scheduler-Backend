Absolutely! Below is a **complete `README.md` file** for your **Job Scheduler Backend** using Node.js, Express, PostgreSQL, and `node-cron`.

---

### 📄 `README.md` (Copy & Paste)

````markdown
# ⏰ Job Scheduler Backend

A Node.js + Express.js backend system that allows scheduling jobs/tasks (like printing "Hello World") at specific times or intervals. Jobs can be scheduled to run:

- Hourly (e.g., at minute 15 of every hour)
- Daily (e.g., at 9:30 AM every day)
- Weekly (e.g., at 9:00 AM every Monday)

All job configurations are stored in PostgreSQL and automatically reloaded on server restart.

---

## 🧑‍💻 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- node-cron
- dotenv

---

## 📦 Installation

### 1. Clone the project
```bash
git clone https://github.com/your-username/job-scheduler-backend.git
cd job-scheduler-backend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```
PORT=3000
DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=job-scheduler-backend
DB_PASSWORD=123456789
DB_PORT=5432

```

### 4. Set up the database

Create the database and table in PostgreSQL:

```sql
CREATE DATABASE job-scheduler-backend;

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    type VARCHAR(20),           -- 'hourly', 'daily', 'weekly'
    minute INTEGER,             -- for hourly/daily/weekly
    hour INTEGER,               -- for daily/weekly
    day_of_week INTEGER,        -- 0 = Sunday, 6 = Saturday (only for weekly)
    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🚀 Run the Server

```bash
# For production
npm start

# For development (with auto-restart)
npm run dev
```

---

## 🧪 API Usage

### ✅ POST `/api/jobs` – Create a Job

Create a new job with type: `hourly`, `daily`, or `weekly`.

#### 📌 Request Body Format

#### 📘 1. Hourly Job

```json
{
  "name": "Hourly Hello Job",
  "type": "hourly",
  "minute": 15
}
```

Runs at minute 15 of every hour (e.g., 1:15, 2:15, 3:15...).

---

#### 📘 2. Daily Job

```json
{
  "name": "Daily Hello Job",
  "type": "daily",
  "hour": 9,
  "minute": 30
}
```

Runs every day at 9:30 AM.

---

#### 📘 3. Weekly Job

```json
{
  "name": "Weekly Hello Job",
  "type": "weekly",
  "day_of_week": 1,
  "hour": 10,
  "minute": 0
}
```

Runs every **Monday at 10:00 AM** (0 = Sunday, 1 = Monday, ..., 6 = Saturday).

---

### ✅ Response

```json
{
  "message": "Job scheduled successfully",
  "job": {
    "id": 1,
    "name": "Daily Hello Job",
    "type": "daily",
    "minute": 30,
    "hour": 9,
    "day_of_week": null,
    "created_at": "2024-07-16T13:35:00.000Z"
  }
}
```

---

## 📤 Example with curl

```bash
curl -X POST http://localhost:3000/api/jobs \
-H "Content-Type: application/json" \
-d '{"name":"Daily Job", "type":"daily", "hour":9, "minute":30}'
```

---

## 📂 Folder Structure

```
job-scheduler/
├── server.js               # App entry point
├── .env                   # Env variables
├── package.json
├── src/
│   ├── db.js              # PostgreSQL connection
│   ├── jobs.js            # Load jobs on server start
│   ├── scheduler.js       # Cron job logic
│   └── routes/
│       └── jobs.js        # API routes
```

---

## 🔄 Future Improvements

* Support for deleting/editing jobs
* Persistent job logs (to DB or file)
* Web dashboard for job management
* One-time jobs

---

## 👤 Author

**Soumya Tiwari**

---

## 📃 License

This project is licensed under the MIT License.

```

---

Let me know if you'd also like:
- 🧪 A Postman collection
- 📊 Logging jobs to a file
- 🔧 Job deletion or editing support

I'm happy to help build on this!
```
