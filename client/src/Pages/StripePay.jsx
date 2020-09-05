import React from 'react';
import NavigationBar from '../components/NavigationBar';
import StripeCheckoutButton from '../components/StripeCheckout';
import './Pay.css';

const Stripe = () => {
  const pricePerNight = 76;
  const numberOfNights = 3;
  const price = pricePerNight * numberOfNights;
  const taxes = 40;
  const totalPrice = price + taxes;

  return (
    <div id="paypage">
      <NavigationBar />
      <div className="stripe">
        <header className="App-header">
          <h2>Review Your Trip</h2>
          <div id="parkDetails">
            <img
              src="/images/Yellowstone.jpg"
              alt="Yellowstone"
              height="134px"
              width="150px"
            ></img>
            <div id="parknamespace">
              <h5>Yellowstone National Park</h5>

              <h6>${pricePerNight}/night</h6>
            </div>
          </div>
          <div></div>
          <div className="borders right">
            <h4>Check in</h4>
            <p>Sept 21, 2020</p>
          </div>
          <div className="borders">
            <h4>Check out</h4>
            <p>Sept 24, 2020</p>
          </div>
          <h4>Contact Info</h4>
          <p>Stefani Kahle</p>
          <p>stefanikahle@gmail.com</p>

          <h4>Payment details</h4>

          <div id="fees" className="pt-2">
            <span>
              ${pricePerNight} x {numberOfNights} nights
            </span>
            <span>${price}</span>
          </div>
          <div id="feesborder">
            <span>Taxes</span>
            <span>${taxes}</span>
          </div>
          <div id="fees">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
          <StripeCheckoutButton price={totalPrice} />
        </header>
      </div>
    </div>
  );
};

export default Stripe;
