import { createGlobalStyle } from "styled-components";

import SideBar from "./Sidebar";
import Login from "./Login";
import Article from "./Article";

export default function Home() {
  return (
    <div>
      {/* <Login /> */}
      <SideBar />
    </div>
  );
}
