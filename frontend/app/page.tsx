"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Connecting to PesaTrack...");
  const [status, setStatus] = useState("Loading");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setStatus(data.status);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setMessage("Could not connect to Django.");
        setStatus("Connection failed");
      });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">PesaTrack</h1>

      <p>{message}</p>

      <p className="text-green-600">{status}</p>
    </main>
  );
}