import React from "react";
import PlanList from "../../../components/PlanList";
import OfferList from "../../../components/OfferList";

function Main() {

  const [selected, setSelected] = React.useState(Number(localStorage.getItem("selected_plan")));

  const updateSelection = (value) => {
    setSelected(value);
    localStorage.setItem("selected_plan", value)
  }

  return (
    <div className="main">
      <div className="header"></div>
      <div className="content">
        <PlanList selected={selected} setSelected={updateSelection}/>
        <OfferList selected={selected}/>
      </div>
    </div>
  );
}

export default React.memo(Main);
