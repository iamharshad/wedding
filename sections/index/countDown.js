import * as React from "react";
import { Parallax } from "react-parallax";
import Overlay from "../../components/overlay";
import { getTimeLeft } from "../../shared/helpers";
const CountDown = () => {
  const eventDate = +new Date(2021, 11, 30);
  const [timeLeft, setTimeLeft] = React.useState(getTimeLeft(eventDate));
  const [timer, setTimer] = React.useState(0);
  React.useEffect(() => {
    setInterval(() => {
      setTimeLeft(getTimeLeft(eventDate));
      setTimer(+new Date());
    }, 1000);
  }, []);
  return (
    <Parallax
      bgImage={
        process.browser &&
        (window?.innerWidth > 767
          ? "/media/images/count-down.jpg"
          : "/media/images/count-down-small.jpg")
      }
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
          {eventDate < timer && timer < eventDate + 3600 * 24 * 1000 ? (
            <h2 className="heading-1 text-center cursive position-absolute">
              The Big day has came
            </h2>
          ) : timer > eventDate + 3600 * 24 * 1000 ? (
            <h2 className="heading-1 text-center cursive  position-absolute ">
              we are together
            </h2>
          ) : (
            <>
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
            </>
          )}
        </div>
      </>
      {/* <div style={{ height: "100px" }}></div> */}
    </Parallax>
  );
};

export default CountDown;
