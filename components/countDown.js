import * as React from 'react';
import { getTimeLeft } from '../shared/helpers';
const CountDown = ({ date }) => {
  const [timeLeft, setTimeLeft] = React.useState(getTimeLeft(date));
  React.useEffect(() => {
    setInterval(() => {
      setTimeLeft(getTimeLeft(date));
    }, 1000);
  }, []);
  return (
    <div className="count-down-container mx-auto mt-4">
      <div className="circle count-down-circle  pulse">
        <div className="count">{timeLeft.d} </div>
        <div className="unit">Days</div>
      </div>
      <div className="circle count-down-circle  pulse">
        <div className="count">{timeLeft.h}</div>
        <div className="unit">hours</div>
      </div>
      <div className="circle count-down-circle  pulse">
        <div className="count">{timeLeft.m} </div>
        <div className="unit">minutes</div>
      </div>
      <div className="circle count-down-circle pulse">
        <div className="count">{timeLeft.s} </div>
        <div className="unit">seconds</div>
      </div>
    </div>
  );
};

export default CountDown;
