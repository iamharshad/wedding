import * as React from "react";
import { Parallax } from "react-parallax";
import Overlay from "../../components/overlay";
import { getTimeLeft } from "../../shared/helpers";
const CountDown = () => {
  const [timeLeft, setTimeLeft] = React.useState(
    getTimeLeft(new Date(2021, 11, 30))
  );
  React.useEffect(() => {
    setInterval(() => {
      setTimeLeft(getTimeLeft(new Date(2021, 11, 30)));
    }, 1000);
  }, []);

  return (
    <Parallax
      bgImage="/media/images/banner-bg-2.jpg"
      strength={100}
      renderLayer={(percentage) => {
        // console.log(percentage - 1);
        return <>{/* </div> */}</>;
      }}
    >
      {" "}
      <>
        <div className="count-down-container section  d-flex align-items-center justify-content-center flex-column position-relative">
          <Overlay opacity={0.9} />
          <h2 className="skew-text heading-1 text-center cursive mb-5">
            Counting <br />
            Down
          </h2>
          <div className="d-flex flex-wrap align-items-center justify-content-center">
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
        </div>
      </>
      {/* <div style={{ height: "100px" }}></div> */}
    </Parallax>
  );
};

export default CountDown;
