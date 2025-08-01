import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import defaultLayout from "./Layouts/defaultLayout";
import SingleMovie from "./pages/SingleMovie";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={defaultLayout}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:id" element={<SingleMovie />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
