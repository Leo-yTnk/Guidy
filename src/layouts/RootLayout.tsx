import { Outlet, NavLink } from "react-router-dom";
export default function RootLayout() {
  return (
    <>
        <div className="app">
            <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/subjects">Subjects</NavLink>
                <NavLink to="/settings">Settings</NavLink>
            </nav>

            <main>
            <Outlet />
            </main>
        </div>
    </>
  );
}
