import { NavLink, Outlet } from "react-router";
export default function defaultLayout() {
  return (
    <>
      <header>
        <nav className="navbar bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                alt="Bootstrap"
              />
            </a>
          </div>
        </nav>
      </header>

      <Outlet></Outlet>
      <footer></footer>
    </>
  );
}
