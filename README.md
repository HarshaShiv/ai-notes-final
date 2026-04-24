# AI Notes Summarizer

## Overview
This project is a small end-to-end AI-enabled application that summarizes notes.

It demonstrates a complete data pipeline from ingestion to UI using a simple and clear architecture.

---

## Features
- Ingest raw notes from a text file
- ETL processing (clean and transform data)
- Store processed data in JSON format
- API layer to serve data
- AI summarization (simulated)
- User interface to display results

---

## Architecture
Data flow:

Raw Notes (TXT) → ETL Script → Processed JSON → API → UI

User → UI → API → JSON storage → AI layer → Output

---

## ETL Process
The ETL script:
- Reads raw text from a file
- Cleans and formats the data
- Saves it as structured JSON

---

## Tech Stack
- Next.js (Frontend + API)
- Node.js
- Vercel (Deployment)
- GitHub (Version control)

---

## How to Run Locally
```bash
npm install
npm run dev
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
