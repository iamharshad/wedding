import * as React from "react";
import Header from "../../components/header";
import HeartEffect from "../../components/heartEffect";
import Overlay from "../../components/overlay";
import { Parallax } from "react-parallax";
const Banner = () => {
  function throttle(fn, wait) {
    var time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }

  function parallax() {
    var scrolled = window.pageYOffset;
    var parallax = document.querySelector(".banner");
    // You can adjust the 0.4 to change the speed
    var coords = scrolled * 0.8 + "px";
    parallax.style.backgroundPositionY = coords;
  }

  React.useEffect(() => {
    // window.addEventListener("scroll", throttle(parallax, 14));
  }, []);

  return (
    <>
      {/* <Header /> */}

      <Parallax
        bgImage="/media/images/banner-bg-2.jpg"
        strength={200}
        // renderLayer={(percentage) => {
        //   console.log(percentage - 1);
        //   return <Overlay opacity={percentage - 0.5} />;
        // }}
      >
        <div
          className="banner spyble-section text-center text-white d-flex justify-content-center align-items-center"
          id="banner"
        >
          <Overlay opacity={0.4} />

          <HeartEffect />
          <div className="position-relative">
            <h1 className="banner-title cursive  skew-text mb-0">
              Save <br /> The Date
            </h1>
            <h2 className="banner-date cursive skew-text mt-4">
              - 30<span className="primary-text">.</span>12
              <span className="primary-text">.</span>2021 -{" "}
            </h2>
            <p className="mt-5">*** We Are Getting Married ***</p>

            {/* <button className="theme-btn primary-text bg-white">
              save the date
            </button> */}
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Banner;
