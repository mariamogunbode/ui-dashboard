import { Outlet } from "react-router-dom";
import { SideBar } from "../sidebar/SideBar";

export function EntirePage() {
  console.log("EntirePage component rendered");
  return (
    <>
      <SideBar />
        <div>
        <h1>Welcome to the Entire Page, click on pages to view my designs</h1>
        <Outlet />
      </div>
    
    </>
  );
}
