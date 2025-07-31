import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CleanWaitingList1 from "./components/CleanWaitingList1";
import CleanWaitingList2 from "./components/CleanWaitingList2";
import CleanWaitingList3 from "./components/CleanWaitingList3";
import CleanWaitingList4 from "./components/CleanWaitingList4";
import CleanWaitingList5 from "./components/CleanWaitingList5";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CleanWaitingList1 />} />
          <Route path="/clean1" element={<CleanWaitingList1 />} />
          <Route path="/clean2" element={<CleanWaitingList2 />} />
          <Route path="/clean3" element={<CleanWaitingList3 />} />
          <Route path="/clean4" element={<CleanWaitingList4 />} />
          <Route path="/clean5" element={<CleanWaitingList5 />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;