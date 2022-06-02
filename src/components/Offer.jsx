import React from "react";

function Offer({offer}) {

  const [timer, setTimer] = React.useState();
  const [time, setTime] = React.useState(offer.expires);

  React.useEffect(() => {
    setTimer(setInterval(() => {
      setTime((prev) => {
        console.log()
        if(prev.seconds > 0){
          return ({...prev, seconds: prev.seconds - 1});
        }
        if(prev.minutes > 0){
          return ({...prev, minutes: prev.minutes - 1, seconds: 59});
        }
        if(prev.hours > 0){
          return ({...prev, hours: prev.hours - 1, minutes: 59, seconds: 59});
        }
        if(prev.days > 0){
          return ({...prev, days: prev.days - 1,hours: 23, minutes: 59, seconds: 59});
        }
        clearInterval(timer);
      });
    }, 1000));
  },[])

  return (
    <div className="offer">
      <h1>{offer.body}</h1>
      <p className="timer">{`${time.days > 9 ? time.days : "0" + time.days }:${time.hours > 9 ? time.hours : "0" + time.hours }:${time.minutes > 9 ? time.minutes : "0" + time.minutes }:${time.seconds > 9 ? time.seconds : "0" + time.seconds }`}</p>
    </div>
  );
}

export default React.memo(Offer);
