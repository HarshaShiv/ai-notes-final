"use client";

import { useState } from "react";

export default function Home() {
  const [summary, setSummary] = useState("");
  const [inputText, setInputText] = useState("");

  const handleClick = async () => {
    const res = await fetch("/api/summarize", {
      method: "POST",
      body: JSON.stringify({ text: inputText }),
    });

    const data = await res.json();
    setSummary(data.content);
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
      {/* 🤖 ROBOT BEHIND */}
      <div
        style={{
          position: "absolute",
          right: "300px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <img
          src="/robo.png"
          alt="AI Bot"
          style={{
            width: "310px",
          }}
        />
      </div>

      {/* ✋ ROBOT HANDS OVER CARD */}
      <div
        style={{
          position: "absolute",
          right: "220px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          pointerEvents: "none",
          clipPath: "inset(0 0 0 390px)", // ONLY show hands
          
        }}
      >
        <img
          src="/robo.png"
          alt="AI Hands"
          style={{
            width: "197px", // ✅ SAME SIZE (important)
          }}
        />
      </div>

      {/* 🧾 MAIN CARD */}
      <div
        style={{
          background: "#eee",
          padding: 30,
          borderRadius: 20,
          width: "600px",
          textAlign: "center",
          zIndex: 2,
          position: "relative",
        }}
      >
        <h1 style={{ color: "#7c3aed" }}>AI Notes Summarizer 🚀</h1>

        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          
          {/* INPUT BOX */}
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
                background: "#ffffff",              // ✅ WHITE BOX
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
                  color: "#424346",
                  backgroundColor: "#ffffff",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {/* OUTPUT BOX */}
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
                background: "#ffffff",
                borderRadius: 10,
                padding: 12,
                marginTop: 10,
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                minHeight: "80px",
                color: "#111827",
                fontSize: "14px",
                lineHeight: "1.5",
                whiteSpace: "pre-line",
              }}
            >
              {summary || "Summary will appear here..."}
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleClick}
          style={{
            marginTop: 20,
            padding: "10px 20px",
            borderRadius: 20,
            border: "none",
            background: "linear-gradient(90deg, #6366f1, #ec4899)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          ✨ Get Summary
        </button>
      </div>

      {/* Placeholder + animation */}
      <style jsx>{`
        textarea::placeholder {
          color: #6b7280;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}