import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import ProjectDetail from "./pages/ProjectDetail";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="bottom-right" />
      </div>
    </ThemeProvider>
  );
}

export default App;
