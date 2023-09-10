import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Lobby from "./pages/Lobby";
import { SocketProvider } from "./context/SocketProvider";
import Room from "./pages/Room";

function App() {
  const [count, setCount] = useState(0);

  return (
    <SocketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/room/:id" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </SocketProvider>
  );
}

export default App;
