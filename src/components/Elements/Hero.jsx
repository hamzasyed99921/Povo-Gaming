import React from "react";
import { FaMediumM } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import Particals from "./Particals";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Hero = () => {
  return (
    <>
      <section className="hero_section">
       
        <div className="container">
        {/* <div>
          <Particals />
        </div> */}
          <div className="row">
            <div className="col-md-6 ">
              <h1>
                play to win <br /> reward on holding
              </h1>
              <h3>
                Frictionless yield & liquidity generation protocol for game
                lover. Povo is deflationary in it's nature
              </h3>
              <button href="#" className="white_btn ">
                Trade on PancakeSwap
              </button>
              <button href="#" className="trans_btn">
                Whitepaper
              </button>
              <div className="row">
                <div className="col-md-12 " style={{ padding: "16px 0" }}>
                  <a href="#">
                    <FaMediumM className="my-3 mx-2" color="white" size={30} />
                  </a>
                  <a href="#">
                    <BsGithub className="my-3 mx-2" color="white" size={30} />
                  </a>
                  <a href="#">
                    <BsTelegram className="my-3 mx-2" color="white" size={30} />
                  </a>
                  <a href="#">
                    <BsTwitter className="my-3 mx-2" color="white" size={30} />
                  </a>
                  <a href="#">
                    <BsYoutube className="my-3 mx-2" color="white" size={30} />
                  </a>
                  <a href="#">
                    <BsReddit className="my-3 mx-2" color="white" size={30} />
                  </a>
                  <a href="#">
                    <BsFacebook className="my-3 mx-2" color="white" size={30} />
                  </a>
                </div>
              </div>
              <div className="row hero_list">
                <div className="col-md-6 ">
                  <p>Buying FEE is 5%</p>
                  <ul>
                    <li>3% to buy back funds</li>
                    <li>1% Marketing and Development</li>
                    <li>1% Reflection to holders</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p>Selling FEE is 7%</p>
                  <ul>
                    <li>4% to buy back funds</li>
                    <li>1% Marketing and Development</li>
                    <li>2% Reflection to holders</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero_right">
                <div className="carosole">
                  <Carousel
                    swipeable={false}
                    draggable={true}
                    // showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={false}
                    customTransition="all .9"
                    transitionDuration={2000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                  >
                    <div className="">
                      <img
                        src="assets/images/car1.png"
                        className="img-fluid w-100"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="assets/images/car3.png "
                        className="img-fluid w-100"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="assets/images/car4.png"
                        className="img-fluid w-100"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="assets/images/car1.png"
                        className="img-fluid w-100"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="assets/images/car2.png"
                        className="img-fluid w-100"
                        alt=""
                      />
                    </div>
                  </Carousel>
                </div>
                <div className="token_add mt-4 d-flex justify-content-center">
                  <span>token address</span>
                  <input
                    type="text"
                    disabled
                    className="form-control"
                    value="0x2a2d03a47ae6220312337d1f094badcd1ee948cd1f094badcd1ee948c"
                  />
                </div>
                <div className="row mt-4 ">
                  <div className="col-md-4">
                    <img
                      src="assets/images/certik.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-md-4">
                    <img
                      src="assets/images/pcs.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-md-4">
                    <img
                      src="assets/images/xt.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hero_bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hero_bottom_img d-flex justify-content-center">
                <img
                  src="assets/images/yahoo.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero_bottom_img d-flex justify-content-center">
                <img
                  src="assets/images/benzinga.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
