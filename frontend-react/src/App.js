import React, { useState } from "react";

function App() {
  const [set1, setSet1] = useState("");
  const [set2, setSet2] = useState("");
  const [result, setResult] = useState("");

  async function handleCompare(e) {
    e.preventDefault();

    // koristi tačan Render URL
    let response = await fetch("https://srv-d8qjm8beo5us73co4f50.onrender.com/compare", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        set1: set1.split(","),
        set2: set2.split(",")
      })
    });

    let data = await response.json();
    setResult("Razlike: " + data.differences.join(", "));
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Uporedi podatke</h1>
      <form onSubmit={handleCompare}>
        <input
          value={set1}
          onChange={(e) => setSet1(e.target.value)}
          placeholder="Prvi set (npr. 1,2,3)"
        />
        <br /><br />
        <input
          value={set2}
          onChange={(e) => setSet2(e.target.value)}
          placeholder="Drugi set (npr. 2,3,4)"
        />
        <br /><br />
        <button type="submit">Uporedi</button>
      </form>
      <h2>{result}</h2>
    </div>
  );
}

export default App;
