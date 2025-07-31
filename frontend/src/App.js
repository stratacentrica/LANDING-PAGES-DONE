import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CleanWaitingList1 from "./components/CleanWaitingList1";
import CleanWaitingList2 from "./components/CleanWaitingList2";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CleanWaitingList1 />} />
          <Route path="/clean1" element={<CleanWaitingList1 />} />
          <Route path="/clean2" element={<CleanWaitingList2 />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;