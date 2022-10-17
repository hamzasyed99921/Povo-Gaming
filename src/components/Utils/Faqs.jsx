import React from 'react'
import Faq from "react-faq-component";
const data = {
  rows: [
      {
          title: "HOW TRANSACTIONS CAN BE PERFORMED?",
          content: `Transactions in Povo can be made with a variety of digital funds. This include your crypto currencies, NFT tokens. You can purchase Povo tokens with fiat currency or swap with other crypto assets, as well..`,
      },
      {
          title: "HOW CROSS CHAIN FUNCTIONALITIES WORK?",
          content:
              "Transactions in Povo can be made with a variety of digital funds. This include your crypto currencies, NFT tokens. You can purchase Povo tokens with fiat currency or swap with other crypto assets, as well.",
      },
      {
          title: "WHAT IS MULTIVERSE USE CASE IN BLOCKCHAIN GAME?",
          content: `Multiverses can be used in gaming as an advanced feature to enter in parallel universes to explore new area and levels within the game. `,
      },
      {
          title: "IS THERE ANY LIMIT IN FUND WITHDRAWAL?",
          content: `Generally, there is not limit implied on withdrawal of your funds with Povo. You can withdrawal at any time and for any amount.`,
      },
      {
          title: "I HAVE RECEIVED POVO CARD, WHAT TO DO NEXT?",
          content: `Now that you have your Povo card, you can unlock NFT’s exclusive farms. You can mint NFTs or liquidate your Povo cards at any time or swap them with other crypto assets.`,
      },
      {
          title: "NFTs copyrights",
          content: `Now that you have your Povo card, you can unlock NFT’s exclusive farms. You can mint NFTs or liquidate your Povo cards at any time or swap them with other crypto assets.`,
      },

  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};
const Faqs = () => {
  return (
    <>
      <div className="faq_bg">
        <div className="container">
        <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
      </div>
    </>
  )
}

export default Faqs