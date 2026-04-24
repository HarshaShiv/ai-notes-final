import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "data/processed/notes.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  // Fake AI summary
  const summary = `
• AI is transforming industries  
• Machine learning automates decisions  
• Deep learning is a subset of ML  
`;

  return NextResponse.json({ content: summary });
}