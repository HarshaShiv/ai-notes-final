const fs = require("fs");
const path = require("path");

// Read raw file
const rawPath = path.join(__dirname, "../data/raw/notes.txt");
const rawData = fs.readFileSync(rawPath, "utf-8");

// Clean data (ETL step)
const cleaned = rawData.replace(/\n/g, " ").trim();

// Create output
const output = {
  content: cleaned,
};

// Write processed file
const outputPath = path.join(__dirname, "../data/processed/notes.json");

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log("✅ ETL DONE");