"use client";

import { useState } from "react";

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
          "Content-Type": "application/json", // 🔥 important fix
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSummary(data.summary); // ✅ FIXED (was data.content ❌)
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
      {/* 🤖 ROBOT */}
      <div
        style={{
          position: "absolute",
          right: "300px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <img src="/robo.png" alt="AI Bot" style={{ width: "310px" }} />
      </div>

      {/* ✋ HANDS */}
      <div
        style={{
          position: "absolute",
          right: "220px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          pointerEvents: "none",
          clipPath: "inset(0 0 0 390px)",
        }}
      >
        <img src="/robo.png" alt="AI Hands" style={{ width: "197px" }} />
      </div>

      {/* 🧾 CARD */}
      <div
        style={{
          background: "#eee",
          padding: 30,
          borderRadius: 20,
          width: "600px",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <h1 style={{ color: "#7c3aed" }}>AI Notes Summarizer 🚀</h1>

        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          {/* INPUT */}
          <div
            style={{
              flex: 1,
              background: "#ddd",
              padding: 15,
              borderRadius: 12,
            }}
          >
            <h3 style={{ color: "#4338ca" }}>Your Notes</h3>

            <div
              style={{
                background: "#fff",
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <textarea
                placeholder="Enter your notes here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                style={{
                  width: "100%",
                  height: 80,
                  borderRadius: 8,
                  padding: 8,
                  border: "1px solid #e5e7eb",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {/* OUTPUT */}
          <div
            style={{
              flex: 1,
              background: "#ddd",
              padding: 15,
              borderRadius: 12,
            }}
          >
            <h3 style={{ color: "#4338ca" }}>Output</h3>

            <div
              style={{
                background: "#fff",
                borderRadius: 10,
                padding: 12,
                marginTop: 10,
                minHeight: "80px",
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
            padding: "10px 20px",
            borderRadius: 20,
            border: "none",
            background: "linear-gradient(90deg, #6366f1, #ec4899)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Processing..." : "✨ Get Summary"}
        </button>
      </div>
    </div>
  );
}