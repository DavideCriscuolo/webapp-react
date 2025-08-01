import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import defaultLayout from "./Layouts/defaultLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={defaultLayout}>
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
