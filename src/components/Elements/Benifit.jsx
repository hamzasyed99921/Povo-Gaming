import React from 'react'

const Benifit = () => {
  return (
    <>
        <div className="benifit_bg">
            <div className="container">
                <h1 className='text-center'>Benefit of <span>Povo</span></h1>
                <div className='row'>
                    <div className="col-md-6 col-12">
                        <div className='benifit_txt'>
                            <p>Anyone Who Owns Gaming Assets</p>
                            <ul>
                                <li>Transfer items to another account</li>
                                <li>Renders the items to mount reserve values</li>
                                <li>Ease of using the items accross other supported games</li>
                            </ul>
                            <h5>Game tournament and receive winnings in your wallet</h5>
                            <h5>Artificial Intelligence improve players expericne</h5>
                            <h5>Withdraw funds using PayPal</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <img src="assets/images/benefit.png" className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Benifit