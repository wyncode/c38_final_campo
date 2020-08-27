import React from 'react';


import StripeCheckoutButton from '../components/stripe.checkout';

const Stripe = () => {

  const totalPrice = 58;

  return (
    <div className="stripe">
      <header className="App-header">
        <h1>Make Stripe Payment to Campo</h1>
        <p>
          Pay Total of $ {totalPrice}
        </p>
        <p>
          <StripeCheckoutButton price={totalPrice} />
        </p>
      </header>
    </div>
  );
}

export default Stripe;