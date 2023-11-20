import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CandidateList } from "./pages/CandidateList/CandidateList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/candidate-list" />}></Route>
        <Route path="/candidate-list" element={<CandidateList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
