import { Link, NavLink, Outlet } from "react-router";
import JumboC from "../components/JumboC";
export default function defaultLayout() {
  return (
    <>
      <header className="bg-img-jumbo">
        <nav className="navbar  ">
          <div className="container">
            <NavLink className="navbar-brand" to={"/"}>
              <h1>CineFlix</h1>
            </NavLink>
          </div>
        </nav>
        <JumboC></JumboC>
      </header>

      <Outlet></Outlet>
      <footer>
        <div className="container">
          <p className="text-center text-white py-3">
            Copyright &copy; 2025 CineFlix{" "}
          </p>
        </div>
      </footer>
    </>
  );
}
