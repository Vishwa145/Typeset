import React from "react";

function Plan({plan, selected, setSelected}) {
  return (
    <div className={`plan ${selected === plan.id && "selected"}`} onClick={() => setSelected(plan.id)}>
      <h1>{plan.title}</h1>
      <p>{plan.price}</p>
    </div>
  );
}

export default React.memo(Plan);
