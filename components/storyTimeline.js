import { storyTimeline } from "../shared/dataset";

export default function StorybookTimeline() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <ul className="position-relative storytimeline mx-auto clearfix d-flex flex-wrap">
            {storyTimeline.map((el) => {
              return (
                <li className="list-inline storytimeline-list">
                  {el.date}
                  <br />
                  {el.title}
                  <br />
                  {el.description}
                  <br />
                  {el.image}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
