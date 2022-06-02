import React from "react"
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import "./Home.scss";

function Home() {

  return (
    <div className="home">
      <SideBar/>
      <Main/>
    </div>
  );
}

export default React.memo(Home);
