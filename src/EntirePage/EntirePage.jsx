import { Outlet, useLocation } from "react-router-dom";
import { SideBar } from "../sidebar/SideBar";

export function EntirePage() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <SideBar />
        <div>
        {isHomePage &&<h1>Welcome to the Entire Page, click on pages to view my designs. And sorry in advance,my sidebar doesn't look attractive yet</h1>}

        <Outlet />
      </div>
    
    </>
  );
}
