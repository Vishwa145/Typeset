import React from "react";

function SideBar() {
  return (
    <div className="sideBar">
      <nav className="navBar">
          <div>Plans & Pricing</div>
          <div>Password</div>
      </nav>
    </div>
  );
}

export default React.memo(SideBar);
