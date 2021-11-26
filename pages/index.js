import React from "react";
import Banner from "../sections/index/banner";
import Invitation from "../sections/index/invitation";
import Events from "../sections/index/events";
// import "../assets/styles/index.scss";
import GotoTopBtn from "../components/goToTopBtn";
import Welcome from "../components/welcome";
import Head from "next/head";
import { Story } from "../sections";

const IndexPage = () => {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.addEventListener('load', function() {
        document.querySelector('.loader').style.opacity="0"

        setTimeout(function(){
            document.querySelector('.loader').style.display="none"

        },1000)    
        }, false);
         
        
        `,
          }}
        ></script>
      </Head>
      <div className="loader">
        <div className="spinner">
          <div className="heart heart1"></div>
          <div className="heart heart2"></div>
          <div className="heart heart3"></div>
        </div>
      </div>
      <Welcome />
      {/* <Banner />
      <Invitation />
      <Events />
      <Story />
      <GotoTopBtn /> */}
    </>
  );
};

export default IndexPage;
