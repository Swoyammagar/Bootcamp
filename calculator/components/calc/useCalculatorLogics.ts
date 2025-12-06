"use client";

import { useState, useEffect } from "react";

export function useCalculatorLogic() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const isShowingHistory = historyIndex !== null;

  const pressButton = (value: string) => {
    setHistoryIndex(null);
    setInput((prev) => prev + value);
  };

  const clear = () => {
    setHistoryIndex(null);
    setInput("");
  };

  const calculate = () => {
    try {
      const result = eval(input.replace("×", "*").replace("÷", "/"));
      setHistory((prev) => [String(input + "=" + result), ...prev]);
      setHistoryIndex(null);
      setInput(String(result));
    } catch {
      setInput("Error");
    }
  };

  const historyUp = () => {
    if (history.length === 0) return;
    setHistoryIndex((idx) => {
      if (idx === null) return 0;
      if (idx < history.length - 1) return idx + 1;
      return idx;
    });
  };

  const historyDown = () => {
    if (history.length === 0) return;
    setHistoryIndex((idx) => {
      if (idx === null) return null;
      if (idx > 0) return idx - 1;
      return null;
    });
  };

  const currentDisplay =
    isShowingHistory ? history[historyIndex!] || "" : input || "0";

  const handleKeyDown = (e: KeyboardEvent) => {
    const key = e.key;

    if (!isNaN(Number(key)) || [".", "+", "-", "/", "*", "%"].includes(key)) {
      pressButton(key === "/" ? "÷" : key === "*" ? "×" : key);
    }

    if (key === "Enter" || key === "=") return calculate();

    if (key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
      return;
    }

    if (key === "C" || key === "c" || key === "Escape") return clear();
    if (key === "ArrowUp") return historyUp();
    if (key === "ArrowDown") return historyDown();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const [apiData, setApiData] = useState<any[]>([]);

  const fetchDummyApi = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
    const data = await res.json();
    setApiData(data);
  } catch (err) {
    console.error("API error:", err);
  }
};
  return {
    input,
    history,
    historyIndex,
    currentDisplay,
    pressButton,
    clear,
    calculate,
    historyUp,
    historyDown,
    apiData,
    fetchDummyApi,
  };
}
