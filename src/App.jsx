// src/App.jsx
import React from "react";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <CurrencyConverter />
    </div>
  );
}

export default App;