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
          <h2 className="heading-3 mb-4 text-center">
            December 30th 2021, Surat, Gujarat, India
          </h2>
          <p className="section-description secondary-text text-center">
            We invited you to celebrate our wedding
          </p>
          <div className="row position-relative justify-content-center">
            <div className="couple d-flex col-12 col-md-6 text-center text-sm-right mb-4">
              <div className="mr-3 text-start">
                <h3 className="primary-text cursive">Harshad Kachariya</h3>
                <p className="secondary-text text-start pe-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove
                </p>
              </div>
              <div className="rounded-image-container ">
                <img
                  src={`/media/images/groom.jpg`}
                  alt="groom"
                  className=" circle mx-auto mx-md-0 mb-2"
                />
              </div>
            </div>
            <div className="couple d-flex col-12 col-md-6 text-center text-sm-left">
              <div className="rounded-image-container ms-auto ms-md-0">
                <img
                  src={`/media/images/bride.jpg`}
                  alt="bride"
                  className="circle mx-auto mx-md-0 mb-2"
                />
              </div>
              <div className="ml-0 ml-sm-3 text-end w-100">
                <h3 className="primary-text cursive">Priyanka Zanzmera</h3>
                <p className="secondary-text ps-3">
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
