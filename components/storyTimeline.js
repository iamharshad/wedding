import { storyTimeline } from "../shared/dataset";

export default function StorybookTimeline() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mx-auto">
          <ul className="position-relative storytimeline mx-auto clearfix d-flex flex-wrap ps-0">
            {storyTimeline.map((el) => {
              return (
                <li className="list-inline storytimeline-list w-100 ">
                  <div className="w-lg-50 storytimeline-list-box d-flex flex-column flex-lg-row align-items-center ">
                    <span className="w-100 storytimeline-list-content pb-lg-3 pt-3 pt-lg-0">
                      <span className="cursive secondary-text">{el.date}</span>
                      <br />
                      <p className="theme-text-one cursive mb-0 heading-2 theme-text-two">
                        {el.title}
                      </p>
                      <span className="secondary-text">{el.description}</span>
                      <br />
                    </span>
                    <div className="rounded-image-container time-line-image-container storytimeline-list-img-wrapper position-relative">
                      <img
                        src={el.image}
                        alt="groom"
                        className=" circle mx-auto mx-lg-0 mb-2 img-fluid"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
