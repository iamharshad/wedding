import { Parallax } from "react-parallax";
import Overlay from "../../components/overlay";

export default function ThankYou(params) {
  return (
    <div className="thank-you  align-items-center justify-content-center flex-column">
      <Parallax
        bgImage="/media/images/banner-bg-2.jpg"
        strength={500}
        bgImageStyle={
          {
            // height: "100%",
            // maxWidth: "100%",
            // objectFit: "cover",
            // width: "100%",
          }
        }
        renderLayer={(percentage) => {
          // console.log(percentage);
          return (
            <>
              <h2
                style={{
                  position: "absolute",
                  transform: `translate(-50%,-50%) rotate(${
                    (-370 * percentage) / 0.75
                  }deg) scale(${(-0.5 + percentage / 0.7) / 0.5})`,
                  opacity: percentage / 0.8,
                  left: "50%",
                  top: "50%",
                }}
                className="thank-you-message text-white cursive heading-1 text-center z-index-200"
              >
                Thank
                <br />
                you
              </h2>
              <Overlay opacity={1 - percentage} />
            </>
          );
        }}
      >
        <div style={{ height: "500px" }}></div>
      </Parallax>
    </div>
  );
}
