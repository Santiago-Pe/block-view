import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Details, Home, Profile } from "./pages";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
