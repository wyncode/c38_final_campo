import React from 'react';
import NavigationBar from '../components/NavigationBar';
import StripeCheckoutButton from '../components/StripeCheckout';
import './Pay.css';

const Stripe = () => {
  const pricePerNight = 90;
  const numberOfNights = 3;
  const totalPrice = 58;

  return (
    <div id="paypage">
      <NavigationBar />
      <div className="stripe">
        <header className="App-header">
          <h2>Review Your Trip</h2>
          <div id="parkDetails">
            <img
              src="/images/Yellowstone.jpg"
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
            <p>Jan 1, 2021</p>
          </div>
          <div className="borders">
            <h4>Check out</h4>
            <p>Jan 4, 2021</p>
          </div>
          <h4>Contact Info</h4>
          <p>Stefani Kahle</p>
          <p>stefanikahle@gmail.com</p>
          <p>555-435-3295</p>

          <h4>Payment details</h4>
          <h6>
            ${pricePerNight} x {numberOfNights} nights
          </h6>

          <div id="fees" className="pt-2">
            <span>Park Fees</span>
            <span>$200.00</span>
          </div>
          <div id="feesborder">
            <span>Taxes</span>
            <span>$40.00</span>
          </div>
          <div id="fees">
            <span>Total</span>
            <span>$240.00</span>
          </div>
          <StripeCheckoutButton price={totalPrice} />
        </header>
      </div>
    </div>
  );
};

export default Stripe;
