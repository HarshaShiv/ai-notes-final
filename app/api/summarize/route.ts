import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    summary: "• Default summary from notes file",
  });
}

export async function POST(req: Request) {
  try {
    const body: { text?: string } = await req.json();
    const text: string = body.text?.trim() || "";

    if (!text) {
      return NextResponse.json({
        summary: "• Please enter some text to summarize",
      });
    }

    // Split text into sentences
    const sentences: string[] = text
      .split(/[.!?]+/)
      .map((s: string) => s.trim())
      .filter((s: string) => s.length > 20); // ignore very short sentences

    // If not enough sentences, fallback
    if (sentences.length === 0) {
      return NextResponse.json({
        summary: "• Not enough meaningful content to summarize",
      });
    }

    // Take first 3 meaningful sentences
    const selected: string[] = sentences.slice(0, 3);

    // Convert to bullet points
    const summary: string = selected
      .map((s: string) => `• ${s}`)
      .join("\n");

    return NextResponse.json({ summary });

  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      { error: "Something went wrong while processing text" },
      { status: 500 }
    );
  }
}