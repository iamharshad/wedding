import * as React from "react";
import Overlay from "../../components/overlay";
import Slider from "react-slick";
import ScrollDown from "../../components/scrollDown";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    fade: true,
  };

  return (
    <>
      <div
        className="banner spyble-section text-center text-white overflow-hidden  justify-content-center align-items-center"
        id="banner"
      >
        <ScrollDown />
        <Overlay opacity={0.9} />
        <Slider {...settings}>
          <div>
            <picture>
              <source
                media="(max-width: 767px)"
                srcset="/media/images/banner-bg-1-small.jpg"
              />
              <img src="/media/images/banner-bg-1.jpg" className="img-fluid" />
            </picture>
          </div>
          <div>
            <picture>
              <source
                media="(max-width: 767px)"
                srcset="/media/images/banner-bg-2-small.jpg"
              />
              <img src="/media/images/banner-bg-2.jpg" className="img-fluid" />
            </picture>{" "}
          </div>
          <div>
            <picture>
              <source
                media="(max-width: 767px)"
                srcset="/media/images/banner-bg-3-small.jpg"
              />
              <img src="/media/images/banner-bg-3.jpg" className="img-fluid" />
            </picture>{" "}
          </div>
          <div>
            <picture>
              <source
                media="(max-width: 767px)"
                srcset="/media/images/banner-bg-4-small.jpg"
              />
              <img src="/media/images/banner-bg-4.jpg" className="img-fluid" />
            </picture>{" "}
          </div>
        </Slider>

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
    </>
  );
};

export default Banner;
