import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Details, Home, Profile } from "./pages";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
