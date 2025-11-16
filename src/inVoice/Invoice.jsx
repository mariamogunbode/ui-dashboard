import { Icon } from "@iconify/react";
import './Invoice.css'

export function Invoice() {
  return (
    <>
      <div className="profile-search">
        <p className="profile-overview">Account/Invoice</p>
        <div className="search-bar-icon">
          <input type="text" placeholder="Search anything here"
            className="search-bar" />
          <Icon className="search-icon"
            icon="mdi:search" />
        </div>
      </div>
      <p className="payment-details">Payment Details</p>
      <div className="contact-payment-container">
        <div className="contact-container">
          <p className="contact-para">Contact</p>
          <Icon className="para-dropdown"
          icon="mdi:chevron-down" />
        </div>
        <div className="payment-input-details-container">
          <div className=" payment-dropdown-container">
          <p className="payment">Payment</p>
          <Icon className="para-dropdown"
          icon="mdi:chevron-up" />
          </div>
          <div>
            <p className="payment-method2">Payment method</p>
            <div className="checkbox-para-icon-container">
              <div>
                <div className="checkbox-button-icon1">
                  <input className="checkbox"
                  type="checkbox" />
                  <div>
                    <p className="number-para">347809</p>
                    <button className="icon-text-button">Visa</button>
                    <button className="edit2-button">Edit</button>
                  </div>
                  <Icon className="visa-icon"
                  icon="logos:visa" />
                </div>
                
              </div>
              
              <div>
                <div className="checkbox-button-icon">
                  <input className="checkbox2"
                  type="checkbox" />
                  <div>
                    <p className="number-para">347809</p>
                    <button className="icon-text-button">Paypal</button>
                    <button className="edit2-button">Edit</button>
                  </div>
                  <Icon className="paypal-icon"
                  icon="logos:paypal" />
                </div>
              </div>
              <div className="checkbox-button-icon2">
                <div className="button-plus">+</div>
                <p className="new-users-para">New users</p>
             </div>
            </div>
          </div>
          <div className="payment-inputs-container">
            <div className="payment-input-container">
              <p className="payment-para">Card holder name</p>
              <input className="payment-input" type="text" placeholder="John Walden" />
            </div>
            <div className="payment-input-container3">
              <div className="payment-input-container">
              <p className="payment-para">Billing address</p>
              <input className="payment-input" type="text" placeholder="Germany" />
              </div>
              <Icon className="para-dropdown"
          icon="mdi:chevron-down" />
            </div>
            <div className="payment-input-container2">
            <div className="payment-input-container">
              <p className="payment-para">Zip code</p>
              <input className="payment-input" type="text" placeholder="6789123" />
            </div>
            <div className="payment-input-container">
              <p className="payment-para">City</p>
              <input className="payment-input" type="text" placeholder="Berlain" />
            </div>
            </div>
          </div>
          <div className="invoice-input">
        <input className="check-box"
        type="checkbox"  />
        <p className="invoice-address">Invoice Address</p>
        </div>
        <div className="pay-div">Pay $67.00</div>
        </div>
      </div>
    </>
  );
}