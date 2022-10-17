import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="assets/images/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto text-center mb-2  mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Staking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Governance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tokenomics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Rugpul
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>
              <li className="nav-item last_link">
                <a className=" nav-link " href="#">
                  Connect Wallet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
