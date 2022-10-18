import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { cardData } from "./data/CardData";

const Features = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="frature_bg">
        <div className="container">
          <h2 className="text-center">Povo Features</h2>
          <div className="row mt-5 ">
            {cardData.map((user, index) => {
              return (
                <div className="col-md-6 col-lg-4 col-12 mb-4">
                  <div
                    className="card py-5"
                    style={{
                      backgroundColor: index % 2 === 1 ? "#8b0000" : "white",
                      
                    }}
                  >
                    <div className="d-flex justify-content-center">
                      <img
                        src={user.image}
                        className="card-img-top  img-fluid w-25"
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title text-center  red_txt" style={{color: index % 2 === 1 ? "white" : ''}}>
                        {user.title}
                      </h5>
                      <p className="card-text white_card" style={{color: index % 2 === 1 ? "white" : ''}}>{user.body}</p>
                      <div className="read_more">
                        <Button
                          variant=""
                          onClick={() =>
                            handleShow(
                              setData({
                                title: user.title,
                                body: user.body,
                              })
                            )
                          }
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="col-md-4 mb-4">
              <div className="card py-5" style={{ border: "none" }}>
                <div className="d-flex justify-content-center">
                  <img
                    src="assets/images/hand.svg"
                    className="card-img-top  img-fluid w-25"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center  red_txt">
                    In-game items <br /> crafting
                  </h5>
                  <p className="card-text white_card">
                    In-game items crafting is a skill or set of skills option
                    specifically provides in massively multiplayer online games
                    or role playing games
                  </p>
                  <div className="read_more">
                    <Button
                      variant=""
                      onClick={() =>
                        handleShow(
                          setData({
                            'title': "In-game items crafting",
                            'body': "In-game items crafting is a skill or set of skills option specifically provides in massively multiplayer online games or role playing games",
                          })
                        )
                      }
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card  shadow py-5"
                style={{ border: "none", backgroundColor: "#8b0000" }}
              >
                <div className="d-flex justify-content-center">
                  <img
                    src="assets/images/h2.png"
                    className="card-img-top img-fluid w-25"
                    alt="..."
                  />
                </div>
                <div className="card-body ">
                  <h5 className="card-title white_txt text-center">
                    Cross chain interpretability & custom wallet
                  </h5>
                  <p className="card-text red_para">
                    DeFi has a motive to incorporate traditional financial
                    services in the cryptocurrency ecosystem. This can only be
                    possible if each blockchain in the
                  </p>
                  <div className="read_more">
                  <Button
                      variant=""
                      onClick={() =>
                        handleShow(
                          setData({
                            'title': "Cross chain interpretability & custom wallet",
                            'body': "DeFi has a motive to incorporate traditional financial services in the cryptocurrency ecosystem. This can only be possible if each blockchain in the",
                          })
                        )
                      }
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card  py-5" style={{ border: "none" }}>
                <div className="d-flex justify-content-center">
                  <img
                    src="assets/images/h3.png"
                    className="card-img-top img-fluid w-25"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center red_txt">
                    Multiverse <br /> gaming
                  </h5>
                  <p className="card-text white_card">
                    The concept of multiverse gaming can be described as a set
                    of parallel world, where theplayers can theoretically travel
                    from one
                  </p>
                  <div className="read_more">
                  <Button
                      variant=""
                      onClick={() =>
                        handleShow(
                          setData({
                            'title': "Multiverse  gaming",
                            'body': "The concept of multiverse gaming can be described as a set of parallel world, where theplayers can theoretically travel from one",
                          })
                        )
                      }
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card shadow py-5"
                style={{ border: "none", backgroundColor: "#8b0000" }}
              >
                <div className="d-flex justify-content-center">
                  <img
                    src="assets/images/h1.png"
                    className="card-img-top img-fluid w-25"
                    alt="..."
                  />
                </div>
                <div className="card-body ">
                  <h5 className="card-title white_txt text-center">
                    Tokenize character <br />
                    items
                  </h5>
                  <p className="card-text red_para">
                    Povo is one of those games that have tokenized their
                    characters. Meaning that, you can now advance your levels
                    within the game
                  </p>
                  <div className="read_more">
                  <Button
                      variant=""
                      onClick={() =>
                        handleShow(
                          setData({
                            'title': "Tokenize character items",
                            'body': "Povo is one of those games that have tokenized their characters. Meaning that, you can now advance your levels within the game",
                          })
                        )
                      }
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card  py-5" style={{ border: "none" }}>
                <div className="d-flex justify-content-center">
                  <img
                    src="assets/images/idea.svg"
                    className="card-img-top img-fluid w-25"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center red_txt">
                    Gamer/devs can introduce their own token
                  </h5>
                  <p className="card-text white_card">
                    Blockchain has revolutionized the world of gaming. It allows
                    the projection of value in intangible assets. It helps
                    gamers to securely
                  </p>
                  <div className="read_more">
                  <Button
                      variant=""
                      onClick={() =>
                        handleShow(
                          setData({
                            'title': "Gamer/devs can introduce their own token",
                            'body': "Blockchain has revolutionized the world of gaming. It allows the projection of value in intangible assets. It helps gamers to securely",
                          })
                        )
                      }
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card  shadow py-5"
                style={{ border: "none", backgroundColor: "#8b0000" }}
              >
                <div className="d-flex justify-content-center">
                  <img
                    src="assets/images/h4.png"
                    className="card-img-top img-fluid w-25"
                    alt="..."
                  />
                </div>
                <div className="card-body ">
                  <h5 className="card-title white_txt text-center">
                    Dapp Store and game studio integration
                  </h5>
                  <p className="card-text red_para">
                    Decentralized applications are a set of programs that
                    harness excess power from different nodes globally.
                  </p>
                  <div className="read_more">
                  <Button
                      variant=""
                      onClick={() =>
                        handleShow(
                          setData({
                            'title': "Dapp Store and game studio integration",
                            'body': "Decentralized applications are a set of programs that harness excess power from different nodes globally.",
                          })
                        )
                      }
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} style={{ padding: "40px 20px" }}>
        <Modal.Header
          closeButton
          style={{ fontSize: "20px", backgroundColor: "#000" }}
        >
          <Modal.Title
            style={{
              fontSize: "20px",
              color: "#8b0000",
              backgroundColor: "#000",
              padding: "8px 15px",
            }}
          >
            {data.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            fontSize: "18px",
            color: "white",
            backgroundColor: "#000",
            padding: "65px 15px",
          }}
        >
          {data.body}
        </Modal.Body>
        {/* <Modal.Footer style={{backgroundColor: '#000'}}></Modal.Footer> */}
      </Modal>
      <div className="vedio" style={{ backgroundColor: "black" }}>
        {/* <div className="container py-5">
      <video controls="" autoplay="autoplay" name="media" muted>
  <source
    src="https://povoneww.s3.ap-southeast-1.amazonaws.com/cs.mp4"
    type="video/mp4"
    width="1440"
    height="641"
  />
</video> */}
        {/* <iframe
          className=" mb-5 col-12"
          width="1340"
          height="641"
          src="https://povoneww.s3.ap-southeast-1.amazonaws.com/cs.mp4"
          title="PorkSwap is Decentralised spot and futures trading platform - Explainer Video"
          frameborder="0"
          allow="accelerometer; autoplay=1&mute=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Features;
