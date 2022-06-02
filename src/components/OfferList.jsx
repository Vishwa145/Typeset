import React from "react";
import Offer from "./Offer";

function OfferList({selected}) {
  
  const [offers, setOffers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://my-json-server.typicode.com/TypesetIO/mock/offers").then((response) => {
      response.json().then((data) => setOffers(data));
    });
  },[]);
  
  return (
    <div className="offerList">
      {offers.filter((offer) => selected === offer.planId).map((offer) => <Offer key={offer.id} offer={offer}/>)}
    </div>
  );
}

export default React.memo(OfferList);
