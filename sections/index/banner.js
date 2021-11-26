import * as React from 'react';
import Header from '../../components/header';
import CountDown from '../../components/countDown';
import HeartEffect from '../../components/heartEffect';
import Overlay from '../../components/overlay';
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
    var parallax = document.querySelector('.banner');
    // You can adjust the 0.4 to change the speed
    var coords = scrolled * 0.4 + 'px';
    parallax.style.backgroundPositionY = coords;
  }

  React.useEffect(() => {
    window.addEventListener('scroll', throttle(parallax, 14));
  }, []);

  return (
    <>
      <Header />
      <div
        className="banner spyble-section text-center text-white d-flex justify-content-center align-items-center"
        id="banner"
      >
        <Overlay opacity={0.5} />
        <HeartEffect />
        <div className="position-relative">
          <h1 className="cursive mb-0">Harshad & Priyanka</h1>
          <p className="mt-3">We Are Getting Married</p>
          <CountDown date={new Date(2021, 11, 30)} />
          <button className="theme-btn primary-text bg-white">
            save the date
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
