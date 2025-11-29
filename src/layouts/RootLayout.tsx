import { Outlet, NavLink } from "react-router-dom";
export default function RootLayout() {
  return (
    <>
        <div className="app">
            <nav>
                <NavLink to="/" end>
                    <span>Home</span>
                </NavLink>
            </nav>

            <main>
            <Outlet />
            </main>
        </div>
    </>
  );
}
