import React, { useContext } from 'react';
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
    </section>
  );
}

export default Pricing;
