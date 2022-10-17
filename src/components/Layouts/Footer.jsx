import React from 'react'
import { FaMediumM } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";


const Footer = () => {
  return (
    <>
      <footer className='footer'>
          <div className="container d-flex justify-content-between ">
            <div className='footer_left d-flex '>
              <img src="assets/images/logo.png" className='img-fluid' alt="" />
              <p className='text-white '>Decentralized Spot and Futures Trading on Binance Smart Chain</p>
              
            </div>
            <div className='footer_right'>
            
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
          <hr className='text-white container' />
              <div className='text-white text-center' style={{padding: '8px 0 24px', fontSize:'18px',fontWeight: '600'}}>
                © 2022 Povo Production Limited
              </div>
      </footer>
    </>
  )
}

export default Footer