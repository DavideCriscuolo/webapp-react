import { Link, NavLink, Outlet } from "react-router";
export default function defaultLayout() {
  return (
    <>
      <header>
        <nav className="navbar ">
          <div className="container">
            <NavLink className="navbar-brand" to={"/"}>
              <h1>CineFlix</h1>
            </NavLink>
          </div>
        </nav>
      </header>

      <Outlet></Outlet>
      <footer></footer>
    </>
  );
}
