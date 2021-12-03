import React from "react";
import Banner from "../sections/index/banner";
import Invitation from "../sections/index/invitation";
import Events from "../sections/index/events";
// import "../assets/styles/index.scss";
import GotoTopBtn from "../components/goToTopBtn";
import Welcome from "../components/welcome";
import Head from "next/head";
import { Story, ThankYou } from "../sections";
import CountDown from "../sections/index/countDown";

const IndexPage = () => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
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
      <Banner />
      <Invitation />
      <CountDown />

      <Events />
      <Story />
      <GotoTopBtn />
      <ThankYou />
    </>
  );
};

export default IndexPage;
