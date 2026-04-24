import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    summary: "• Default summary from notes file",
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const text = body.text || "";

    // Split text into sentences
    const sentences = text
      .split(/[.!?]/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    // Take first 3 sentences
    const selected = sentences.slice(0, 3);

    // Convert to bullet points
    const summary = selected.map((s) => "• " + s).join("\n");

    return NextResponse.json({
      summary: summary || "• No meaningful content provided",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}