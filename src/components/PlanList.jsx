import React from "react";
import Plan from "./Plan";

function PlanList({selected, setSelected}) {

  const [plans, setplans] = React.useState([]);

  React.useEffect(() => {
    fetch("https://my-json-server.typicode.com/TypesetIO/mock/plans").then((response) => {
      response.json().then((data) => setplans(data));
    });
  },[]);
  return (
    <div className="planList">
      {plans.map((plan) => <Plan plan={plan} selected={selected} setSelected={setSelected}/>)}
    </div>
  );
}

export default React.memo(PlanList);
