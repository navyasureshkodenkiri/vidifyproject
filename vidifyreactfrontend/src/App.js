import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./pages/MainScreen";

function App() {
  const loggedIn = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
