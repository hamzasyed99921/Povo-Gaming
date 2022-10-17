import React from "react";

const Tokenomics = () => {
  return (
    <>
      <div className="tokenomic_bg">
        <div className="container">
          <h2 className="text-center">
            Povo <span>Tokenomics</span>
          </h2>
          <div className="row">
            <div className="col-md-6 col-12">
              <p>TOTAL SUPPLY: 10,000,000</p>
              <h3>
                Token <span>Distribution</span> (Gamenomics)
              </h3>

              <ul className="text-white mb-5">
                <li className="mb-3">
                  <span 
                    style={{
                      backgroundColor: "#176ca5",
                      paddingRight: "10rem",
                      paddingLeft: '1rem',
                      color: 'white'
                    }}
                    
                  >
                    Presale
                  </span>
                  <span className="text-white px-1">30%</span>
                </li>
                <li className="mb-3">
                  <span
                    style={{
                      backgroundColor: "#ffc107",
                      paddingRight: "6rem",
                      paddingLeft: '1rem',
                      color: 'white'
                    }}
                    
                  >
                    Stacking Pool
                  </span>
                  <span className="text-white px-1">23%</span>
                </li>
                <li className="mb-3">
                  <span
                    style={{
                      backgroundColor: "#5b3f90",
                      paddingRight: "5rem",
                      paddingLeft: '1rem',
                      color: 'white'
                    }}
                    
                  >
                    liquidity Pool
                  </span>
                  <span className="text-white px-1">20%</span>
                </li>
                <li className="mb-3">
                  <span
                    style={{
                      backgroundColor: "#c81e50",
                      paddingRight: "4rem",
                      paddingLeft: '1rem',
                      color: 'white'
                    }}
                    
                  >
                    Advisors
                  </span>
                  <span className="text-white px-1">10%</span>
                </li>
                <li className="mb-3">
                  <span
                    style={{
                      backgroundColor: "#eb3874",
                      paddingRight: "3rem",
                      paddingLeft: '1rem',
                      color: 'white'
                    }}
                    
                  >
                    Airdop
                  </span>
                  <span className="text-white px-1">7%</span>
                </li>
                <li className="mb-3">
                  <span
                    style={{
                      backgroundColor: "#f58c8b",
                      paddingRight: "1rem",
                      paddingLeft: '1rem',
                      color: 'white'
                    }}
                    
                  >
                    Team
                  </span>
                  <span className="text-white px-1">3%</span>
                </li>
                
              </ul>
            </div>
            <div className="col-md-6 col-12">
              <img src="assets/images/chart.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
