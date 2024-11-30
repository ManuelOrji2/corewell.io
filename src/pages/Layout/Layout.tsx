import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

function Layout() {
  return (
    <main className="flex flex-col items-center">
      <Nav />
      <Outlet />
    </main>
  );
}

export default Layout;
