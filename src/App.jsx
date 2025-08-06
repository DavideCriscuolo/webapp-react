import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import defaultLayout from "./Layouts/defaultLayout";
import SingleMovie from "./pages/SingleMovie";
import { LoaderProvider } from "./context/contextLoader";
function App() {
  return (
    <>
      <LoaderProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={defaultLayout}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/movie/:id" element={<SingleMovie />}></Route>
              <Route path="/movies/*" element={<h1>404</h1>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </LoaderProvider>
    </>
  );
}

export default App;
