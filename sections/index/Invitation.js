import * as React from "react";

import Section from "../../components/section";
// import Groom from '../../assets/images/groom.jpg';
// import Bride from '../../assets/images/bride.jpg';
import CircleIcon from "../../components/circleIcon";
const Invitation = () => {
  return (
    <>
      <Section className="invitation" id="invitation">
        <div className="container">
          <h1 className="heading-1 cursive primary-text mb-3 text-center">
            Hello!
          </h1>
          <h2 className="heading-2 mb-4 text-center">
            December 30th 2021, Surat, Gujarat, India
          </h2>
          <p className="section-description secondary-text text-center">
            We invited you to celebrate our wedding
          </p>
          <div className="row position-relative justify-content-center">
            <div className="couple d-flex col-12 col-md-6 text-center text-sm-right mb-4">
              <div className="mr-3">
                <h3 className="primary-text cursive">Harshad Kachariya</h3>
                <p className="secondary-text">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove
                </p>
              </div>
              <img
                src={`/media/images/groom.jpg`}
                alt="groom"
                className="couple-img circle mx-auto mx-md-0 mb-2"
              />
            </div>
            <div className="couple d-flex col-12 col-md-6 text-center text-sm-left">
              <img
                src={`/media/images/bride.jpg`}
                alt="bride"
                className="couple-img circle mx-auto mx-md-0 mb-2"
              />
              <div className="ml-0 ml-sm-3  w-100">
                <h3 className="primary-text cursive">Priyanka Kachariya</h3>
                <p className="secondary-text">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove
                </p>
              </div>
            </div>
            <div className="heart-container d-none d-md-flex">
              <CircleIcon className="pulse">
                <i className="fas fa-heart"></i>
              </CircleIcon>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Invitation;
