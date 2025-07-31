import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WaitingList1 from "./components/WaitingList1";
import WaitingList2 from "./components/WaitingList2";
import WaitingList3 from "./components/WaitingList3";
import WaitingList4 from "./components/WaitingList4";
import WaitingList5 from "./components/WaitingList5";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WaitingList1 />} />
          <Route path="/list1" element={<WaitingList1 />} />
          <Route path="/list2" element={<WaitingList2 />} />
          <Route path="/list3" element={<WaitingList3 />} />
          <Route path="/list4" element={<WaitingList4 />} />
          <Route path="/list5" element={<WaitingList5 />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;