"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [summary, setSummary] = useState("");
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!inputText.trim()) {
      alert("Please enter some notes!");
      return;
    }

    try {
      setLoading(true);
      setSummary("");

      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSummary(data.summary);
    } catch (error: any) {
      setSummary("❌ Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6366f1, #ec4899)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        position: "relative",
      }}
    >
      {/* 🤖 ROBOT (clean placement) */}
      <div
        style={{
          position: "absolute",
          right: "80px",
          bottom: "40px",
          zIndex: 1,
        }}
      >
        <Image src="/robo.png" alt="AI Bot" width={220} height={220} />
      </div>

      {/* 🧾 CARD */}
      <div
        style={{
          background: "#f3f4f6",
          padding: 30,
          borderRadius: 20,
          width: "650px",
          textAlign: "center",
          zIndex: 2,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ color: "#7c3aed", fontSize: "28px" }}>
          AI Notes Summarizer 🚀
        </h1>
        <p style={{ color: "#6b7280" }}>
          Get instant summaries using AI ✨
        </p>

        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          {/* INPUT */}
          <div
            style={{
              flex: 1,
              background: "#e5e7eb",
              padding: 15,
              borderRadius: 12,
            }}
          >
            <h3 style={{ color: "#4338ca" }}>Your Notes</h3>

            <textarea
              placeholder="Type or paste your notes here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{
                width: "100%",
                height: 120,
                marginTop: 10,
                borderRadius: 10,
                padding: 10,
                border: "1px solid #d1d5db",
                outline: "none",
                resize: "none",
              }}
            />
          </div>

          {/* OUTPUT */}
          <div
            style={{
              flex: 1,
              background: "#d1fae5",
              padding: 15,
              borderRadius: 12,
            }}
          >
            <h3 style={{ color: "#065f46" }}>Output</h3>

            <div
              style={{
                background: "#fff",
                borderRadius: 10,
                padding: 12,
                marginTop: 10,
                minHeight: "120px",
                whiteSpace: "pre-line",
              }}
            >
              {loading
                ? "⏳ Generating summary..."
                : summary || "Summary will appear here..."}
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleClick}
          disabled={loading}
          style={{
            marginTop: 20,
            padding: "12px 24px",
            borderRadius: 25,
            border: "none",
            background: "linear-gradient(90deg, #6366f1, #ec4899)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Processing..." : "✨ Get Summary"}
        </button>
      </div>
    </div>
  );
}