import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

function Pricing() {
  const { pricing } = useContext(PortfolioContext);
  const { cards } = pricing;

  return (
    <section id="pricing">
      <Title title="Pricing" />
      <div className="cards-wrapper">
        {cards
          ? cards.map((card) => (
              <Card key={card.id} class="card">
                <div className="pricing-banner">
                  <h3>One Page Site</h3>
                </div>
                <ul>
                  <li>1 Page Site</li>
                  <li>Food menu</li>
                  <li>Personal info and images</li>
                </ul>
                <hr />
                <p>£150</p>
              </Card>
            ))
          : ''}
      </div>
    </section>
  );
}

export default Pricing;
