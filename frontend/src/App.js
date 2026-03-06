import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProposalPage } from "./pages/ProposalPage";
import { ErrorPage } from "./pages/ErrorPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Redirect root to wine demo by default */}
          <Route path="/" element={<Navigate to="/wine" replace />} />
          
          {/* Dynamic client routes */}
          <Route path="/:clientId" element={<ProposalPage />} />
          
          {/* 404 Error page */}
          <Route path="/404" element={<ErrorPage />} />
          
          {/* Catch all other routes */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
