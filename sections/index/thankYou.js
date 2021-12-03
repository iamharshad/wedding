import { Parallax } from "react-parallax";
import Overlay from "../../components/overlay";

export default function ThankYou(params) {
  return (
    <div className="thank-you  align-items-center justify-content-center flex-column">
      <Parallax
        bgImage="/media/images/thank-you.jpg"
        strength={100}
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
                  transform: `translate(-50%,-50%) rotate(-10deg)`,
                  left: "50%",
                  top: "50%",
                }}
                className="thank-you-message text-white cursive heading-1 text-center z-index-200 skew-text"
              >
                Thank
                <br />
                you
              </h2>
              <Overlay opacity={0.9} />
            </>
          );
        }}
      >
        <div style={{ height: "500px" }}></div>
      </Parallax>
    </div>
  );
}
