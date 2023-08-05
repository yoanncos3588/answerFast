import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import CreateRoom from "./components/CreateRoom";
import WaitingRoom from "./components/WaitingRoom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/waiting-room" element={<WaitingRoom />} />
      </Routes>
    </>
  );
}

export default App;
