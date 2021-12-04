import * as React from "react";
import Header from "../../components/header";
import HeartEffect from "../../components/heartEffect";
import Overlay from "../../components/overlay";
import { Parallax, Background } from "react-parallax";
import Slider from "react-slick";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    fade: true,
  };

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

      {/* <Parallax
        // bgImage="/media/images/banner-bg-2.jpg"
        strength={100}
        // renderLayer={(percentage) => {
        //   console.log(percentage - 1);
        //   return <Overlay opacity={percentage - 0.5} />;
        // }}
      >
        */}
      <div
        className="banner spyble-section text-center text-white overflow-hidden  justify-content-center align-items-center"
        id="banner"
      >
        <Overlay opacity={0.9} />
        <Slider {...settings}>
          <div>
            <picture>
              <source
                media="(max-width: 768px)"
                srcset="/media/images/banner-bg-1-small.jpg"
              />
              <img src="/media/images/banner-bg-1.jpg" className="img-fluid" />
            </picture>
          </div>
          <div>
            <picture>
              <source
                media="(max-width: 768px)"
                srcset="/media/images/banner-bg-2-small.jpg"
              />
              <img src="/media/images/banner-bg-2.jpg" className="img-fluid" />
            </picture>{" "}
          </div>
          <div>
            <picture>
              <source
                media="(max-width: 768px)"
                srcset="/media/images/banner-bg-3-small.jpg"
              />
              <img src="/media/images/banner-bg-3.jpg" className="img-fluid" />
            </picture>{" "}
          </div>
          <div>
            <img src="/media/images/banner-bg-4.jpg" className="img-fluid" />
          </div>
        </Slider>

        <HeartEffect />
        <div className="banner-text-content-container position-absolute d-flex align-items-center justify-content-center">
          <div className=" banner-text-content">
            <h1 className="banner-title cursive  skew-text mb-0">
              Save <br /> The Date
            </h1>
            <h2 className="banner-date cursive skew-text mt-4">
              - 30<span className="primary-text">.</span>12
              <span className="primary-text">.</span>2021 -{" "}
            </h2>
            <p className="mt-5">*** We Are Getting Married ***</p>
          </div>
        </div>
      </div>
      {/* </Parallax> */}
    </>
  );
};

export default Banner;
