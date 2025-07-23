import React from "react";

const Faq = () => {
  return (
    <section id="faq" className="faq pos-rel pt-140
    pb-105">
      <div className="container">
        <div className="sec-title text-center
        mb-35">
          <h5 className="sec-title__subtitle">FAQ</h5>
          <h2 className="sec-title__title">Frequently asked
            questions

          </h2>
        </div>
        <div className="faq__wrap">
          <ul className="accordion_box clearfix">
            <li className="accordion block active-block">
              <div className="acc-btn">
                <span>QA: 01</span>What is Coindox?
              </div>
              <div className="acc_body current">
                <div className="content">
                  <p>Coindox is a decentralized application (DApp) designed to facilitate the pre-sale of our native cryptocurrency, NAVYA. It provides a secure and transparent platform for early adopters to purchase NAVYA tokens before they are publicly listed on exchanges.
                  </p>
                </div>
              </div>
            </li>
            <li className="accordion block">
              <div className="acc-btn">
                <span>QA: 02</span>What is NAVYA?
              </div>
              <div className="acc_body">
                <div className="content">
                  <p>Coindox is a decentralized application (DApp) designed to facilitate the pre-sale of our native cryptocurrency, NAVYA. It provides a secure and transparent platform for early adopters to purchase NAVYA tokens before they are publicly listed on exchanges.
                  </p>
                </div>
              </div>
            </li>
            <li className="accordion block">
              <div className="acc-btn">
                <span>QA: 03</span>How can I participate in the NAVYA pre-sale?
              </div>
              <div className="acc_body">
                <div className="content">
                  <p>To participate, you will need to:
                  </p>
                  <ul>
                    <li>Visit the Coindox DApp [insert your DApp link here]. 
                    </li>
                    <li>Connect your compatible cryptocurrency wallet ( MetaMask). 
                    </li>
                    <li>Follow the instructions on the DApp to contribute your chosen cryptocurrency (e.g., ETH, USDT, BNB) in exchange for NAVYA tokens. 
                    </li>

                  </ul>
                </div>
              </div>
            </li>
            <li className="accordion block">
              <div className="acc-btn">
                <span>QA: 05</span>What is a presale ICO?
              </div>
              <div className="acc_body">
                <div className="content">
                  <p>A presale ICO (or pre-ICO) is a fundraising event that precedes an official Initial Coin Offering (ICO) or Initial Exchange Offering (IEO). It allows early supporters to purchase tokens or coins at a potentially discounted rate or with exclusive bonuses, before they become available to the general public on major exchanges. Essentially, it's a way for a project to raise funds and gain early adoption before its official launch. 
                  </p>
                  <p>
                    The main purpose is : <br />Presales serve as a crowdfunding mechanism for developers, providing them with the necessary funds to launch and develop their project. It also allows early supporters to test and evaluate the project before it hits the market.
                  </p>
                </div>
              </div>
            </li>
            <li className="accordion block">
              <div className="acc-btn">
                <span>QA: 06</span>What is your benifit?
              </div>
              <div className="acc_body">
                <div className="content">
                  <ul>
                    <li>Lower Prices: Tokens are often priced lower in the presale than in the main ICO. 
                    </li>
                    <li>Early Access: Investors get the chance to participate in a project's development before it becomes widely known. 
                    </li>
                    <li>Potential for Appreciation: Tokens can appreciate in value once the project gains traction and becomes available to the general public 
                    </li>

                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="faq__sec-shape">
        <div className="shape shape-1">
          <img src="assets/img/shape/s_shape1.png"
            alt="" />
        </div>
          <div className="shape shape-2">
            <img src="assets/img/shape/s_shape2.png"
              alt="" />
          </div>
        </div>


    </section>
  );
};

export default Faq;