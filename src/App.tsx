import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreateRoom from "./components/CreateRoom";
import Room from "./components/Room";
import JoinRoom from "./components/JoinRoom";

function App() {
  return (
    <>
      <div id="modal-root"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/join-room" element={<JoinRoom />} />
        <Route path="/room/:id" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
