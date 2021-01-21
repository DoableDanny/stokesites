import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

function Pricing() {
  const { pricing } = useContext(PortfolioContext);
  const { cards } = pricing;

  const addBannerColor = (bannerIndex) => {
    let bannerColor;

    switch (bannerIndex) {
      case 0:
        bannerColor = 'banner banner--gray';
        break;
      case 1:
        bannerColor = 'banner banner--green';
        break;
      case 2:
        bannerColor = 'banner banner--gold';
        break;
      default:
        bannerColor = 'banner banner--gray';
    }

    return bannerColor;
  };

  return (
    <section id="pricing">
      <Title title="Pricing" />
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className="cards-wrapper">
          {cards
            ? cards.map((card, index) => (
                <div key={card.id} className="card">
                  <div className={addBannerColor(index)}>
                    <h3>{card.title}</h3>
                  </div>
                  <div className="pricing-points">
                    <p>{card.bullet1}</p>
                    <p>{card.bullet2}</p>
                    <p>{card.bullet3}</p>
                  </div>
                  <div className="price">
                    <hr />
                    <p>£{card.price}</p>
                  </div>
                </div>
              ))
            : ''}
        </div>
      </Fade>
    </section>
  );
}

export default Pricing;
