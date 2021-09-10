import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import GetRoutes from "./routes/GetRoutes";

function App() {
  const [count, setCount] = useState(0);

  return <GetRoutes />;
}

export default App;
