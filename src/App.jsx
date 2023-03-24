import { Layout } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Create } from "./pages";

function App() {
  return (
    <main className="bg-[#f0f3e3] min-h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
