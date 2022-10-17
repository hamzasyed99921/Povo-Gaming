import React from 'react'

const Platform = () => {
  return (
    <>
        <section className='platform_bg'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img src="assets/images/paltfomlp.png" className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='platform_right text-center'>
                            <h1 className=''>Povo <span>Staking Platform</span></h1>
                            <button className='btn '>Launched, Povo Staking</button>
                        </div>
                        <div className='platform_list'>
                            <p>Key features</p>
                            <ul>
                                <li>You can stake your POVO at any time you choose. You can stake any amount of POVO you wish.</li>
                                <li>You can stake your POVO at any time you choose. You can stake any amount of POVO you wish.</li>
                                <li>You can withdraw any amount of staked POVO tokens without any locking period</li>
                                <li>You are free to stake additional amounts at any time</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Platform