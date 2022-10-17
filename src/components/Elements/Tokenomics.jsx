import React from 'react'

const Tokenomics = () => {
  return (
    <>
        <div className="tokenomic_bg">
            <div className="container">
                <h2 className='text-center'>Povo <span>Tokenomics</span></h2>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <p>TOTAL SUPPLY: 10,000,000</p>
                        <h3>Token <span>Distribution</span> (Gamenomics)</h3>

                        <ul className=''>
                            <li><span>Presale</span>30%</li>
                            <li><span>Presale</span>30%</li>
                            <li><span>Presale</span>30%</li>
                            <li><span>Presale</span>30%</li>
                            <li><span>Presale</span>30%</li>
                            <li><span>Presale</span>30%</li>
                            <li><span>Presale</span>30%</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-12">
                        <img src="assets/images/chart.png" className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tokenomics