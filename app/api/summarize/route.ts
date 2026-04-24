import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    content: "• Default summary from notes file",
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  const text = body.text || "";

  // Split text into sentences (handles ., !, ?)
  const sentences = text
    .split(/[.!?]/)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  // Take first 3 meaningful sentences
  const selected = sentences.slice(0, 3);

  // Convert to bullet points
  const summary = selected.map(s => "• " + s).join("\n");

  return NextResponse.json({
    content: summary || "• No meaningful content provided",
  });
}