import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import CreateRoom from "./components/CreateRoom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="px-4 h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createRoom" element={<CreateRoom />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
