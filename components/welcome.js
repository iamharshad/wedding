import * as React from "react";
import { AudioPlayer } from "../shared/helpers";
import HeartEffect from "./heartEffect";
// import bgMusic from '../assets/audio/sample.mp3';

const Welcome = ({ id, className = "", children }) => {
  const [isWelcomeActive, setIsWelcomeActive] = React.useState(true);
  const backgroundMusic = new AudioPlayer();
  React.useEffect(() => {
    document.body.classList.add("overflow-hidden");

    backgroundMusic.init({ url: "/media/audio/sample.mp3", loop: true });
  }, []);
  if (!isWelcomeActive) return "";
  return (
    <div className="welcome-container ">
      <HeartEffect />
      <div className="welcome-content text-center">
        <h1 className=" cursive primary-text heading-xxl">
          Harshad & Priyanka
        </h1>
        {/* <h2 className="mt-5 cursive theme-text-one heading-1">
          Coming soon...!
        </h2> */}
        <button
          className="theme-btn primary-text bg-white mt-5 d-flex align-items-center mx-auto"
          onClick={() => {
            backgroundMusic.play();
            setTimeout(() => setIsWelcomeActive(false));
            document.body.classList.remove("overflow-hidden");
          }}
        >
          <i class="fas fa-mouse-pointer me-2"></i> Next{" "}
          <i class="fas fa-caret-right fa-lg ms-2"></i>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
