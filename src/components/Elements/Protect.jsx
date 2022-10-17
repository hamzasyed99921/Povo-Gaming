import React from "react";

const Protect = () => {
  return (
    <>
      <div className="protect_bg">
        <div className="container">
          <h2 className="text-center">
            How <span>Povo</span> is Rugpul protected
          </h2>
          <div className="row">
            <div className="col-md-6 col-12">
              <ul>
                <li>
                  Povo Presale is going held on UniCrypt which prevents rug-pull
                  by offering auto liquidity lock functionality
                </li>
                <li>
                  60% of raised funds in presale is locked into liquidity by
                  UniCrypt for 266 years
                </li>
                <li>Transaction fee is never above 7% max.</li>
                <li>
                  Newly created LP tokens are locked in order to ensure
                  transparency.
                </li>
                <li>Smart Contract is audited by CertTik.</li>
              </ul>
            </div>
            <div className="col-md-6 col-12">
              <div style={{ maxWidth: "75%" }}>
                <img src="assets/images/why.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Protect;
