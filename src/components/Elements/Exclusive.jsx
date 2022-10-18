import React from "react";
// import MultiCarousel from './carousel/MultiCarousel'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Exclusive = () => {
  return (
    <>
      <div className="exclusive_bg">
        <div className="container">
          <h1 className="text-center">
            Povo <span>Exclusive NFT's</span>
          </h1>
          <div className="row">
          <div className="col-md-12 col-12 mt-5">
            <Carousel
              responsive={responsive}
              arrows
              autoPlay
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={true}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
            >
              <div className="">
                <img
                  src="assets/images/car1.png"
                  className="img-fluid w-100"
                  alt=""
                />
                <div className="mt-5 text-center carousel_btn">
                  <button>Buy</button>
                </div>
              </div>
              <div>
                <img
                  src="assets/images/car3.png "
                  className="img-fluid w-100"
                  alt=""
                />
                <div className="mt-5 text-center carousel_btn">
                  <button>Buy</button>
                </div>
              </div>
              <div>
                <img
                  src="assets/images/car4.png"
                  className="img-fluid w-100"
                  alt=""
                />
                <div className="mt-5 text-center carousel_btn">
                  <button>Buy</button>
                </div>
              </div>
              <div>
                <img
                  src="assets/images/car1.png"
                  className="img-fluid w-100"
                  alt=""
                />
                <div className="mt-5 text-center carousel_btn">
                  <button>Buy</button>
                </div>
              </div>
              <div>
                <img
                  src="assets/images/car2.png"
                  className="img-fluid w-100"
                  alt=""
                />
                <div className="mt-5 text-center carousel_btn">
                  <button>Buy</button>
                </div>
              </div>
            </Carousel>
          </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Exclusive;
