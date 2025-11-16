import { Icon } from '@iconify/react';
import image1 from '/images/image1.jpg';
import image2 from '/images/image2.jpg';
import image3 from '/images/image3.jpg';
import image4 from '/images/image4.jpg';
import image5 from '/images/image5.jpg';
import image6 from '/images/image6.jpg';
import './billing.css'

export function Billing() {

  const images = [
    {id: 'id1', image: image1},
    {id: 'id2', image: image2},
    {id: 'id3', image: image3},
    {id: 'id4', image: image4},
    {id: 'id5', image: image5},
    {id: 'id6', image: image6}
  ]
  return (
    <>
      <div className="profile-search">
        <p className="profile-overview">Account/Billing</p>
        <div className="search-bar-icon">
          <input type="text" placeholder="Search anything here"
            className="search-bar" />
          <Icon className="search-icon"
            icon="mdi:search" />
        </div>
      </div>
      <div className="plan-manage">
        <p className="plan-billing">Plans and billing</p>
      <p className="manage-billing">Manage your plan billing details</p>
      </div>

        <div className="first-divs-container">
          <div className="basic-plan">
            <div className="plan-price">
               <p className="plan-basic">Basic plan</p>
              
              <div>
               <div className="price-monthly">
                <p className="dollar">$20</p>
                <p className="per-month">per month</p>
               </div>
               </div>
            </div>
            <p className="popular-plan">Our most popular plan for small teams</p>
            <div  className="billing-images-container">
              {images.map((image) => {
                return (
                <img key={image.id}className="billing-images"
                
                src={image.image} />
                );
               })}
            </div>
           <div className="upgrade-chevron">
                <p className="upgrade">Upgrade plan</p>
                <Icon icon="mdi:chevron-down" />
               </div>
          </div>
          <div className="payment-method-container">
            <p className="payment-method">Payment method</p>
            <p className="change-plan">Change how you pay for your plan.</p>
              <div className="visa-container">
              <Icon className="visa-icon"
                  icon="logos:visa" />
              <div className="visa-ending-container">
                <p className="visa-ending">Visa ending in 6789</p>
                <p className="visa-expiry">Expiry 01/2023</p>
              </div>
              <button className="button-edit3">Edit</button>
              </div>
          </div>
        </div>      

        <div className="billing-history-container">
          <div className="billing-history">
            <p className="billing-history2">Billing history</p>
            <p className="download-previous-plan">Download your previous plan receipts and usage details.</p>
          </div>

          <div className="billing-header-container">
            <p className="bill-ing">Billing</p>
            <div className="billing-header">
              <p className="headers">Billing Date</p>
              <p className="headers">Amount</p>
              <p className="headers">Plan</p>
              <p className="headers">Users</p>
            </div>
          </div>

          <div className="billing-summary">
            <div className="pdf-details">
              <input type="checkbox" id="pdf-checkbox" />
              <label htmlFor="pdf-checkbox">
                <Icon icon="mdi:file-pdf" />
              </label>
              <p className="bill">Billing #780-Dec 2022</p>
              <p className="paid">Paid</p>
            </div>
            <div className="billing-details">
              <p className="details">Dec 23,2022</p>
              <p className="details">USD $12.00</p>
              <p className="details">Basic plan</p>
              <p className="details">15 Users</p>
            </div>
            <div className="download-dot">
              <button className="download-button">Download</button>
              <div>
                 &#8942;
              </div>
            </div>
          </div>

          <div className="billing-summary">
            <div className="pdf-details">
              <input type="checkbox" id="pdf-checkbox" />
              <label htmlFor="pdf-checkbox">
                <Icon icon="mdi:file-pdf" />
              </label>
              <p className="bill">Billing #780-Dec 2022</p>
              <p className="paid">Paid</p>
            </div>
            <div className="billing-details">
              <p className="details">Dec 23,2022</p>
              <p className="details">USD $12.00</p>
              <p className="details">Basic plan</p>
              <p className="details">15 Users</p>
            </div>
            <div className="download-dot">
              <button className="download-button">Download</button>
              <div>
                 &#8942;
              </div>
            </div>
          </div>
          <div className="billing-summary">
            <div className="pdf-details">
              <input type="checkbox" id="pdf-checkbox" />
              <label htmlFor="pdf-checkbox">
                <Icon icon="mdi:file-pdf" />
              </label>
              <p className="bill">Billing #780-Dec 2022</p>
              <p className="paid">Paid</p>
            </div>
            <div className="billing-details">
              <p className="details">Dec 23,2022</p>
              <p className="details">USD $12.00</p>
              <p className="details">Basic plan</p>
              <p className="details">15 Users</p>
            </div>
            <div className="download-dot">
              <button className="download-button">Download</button>
              <div>
                 &#8942;
              </div>
            </div>
          </div>
          <div className="billing-summary">
            <div className="pdf-details">
              <input type="checkbox" id="pdf-checkbox" />
              <label htmlFor="pdf-checkbox">
                <Icon icon="mdi:file-pdf" />
              </label>
              <p className="bill">Billing #780-Dec 2022</p>
              <p className="paid">Paid</p>
            </div>
            <div className="billing-details">
              <p className="details">Dec 23,2022</p>
              <p className="details">USD $12.00</p>
              <p className="details">Basic plan</p>
              <p className="details">15 Users</p>
            </div>
            <div className="download-dot">
              <button className="download-button">Download</button>
              <div>
                 &#8942;
              </div>
            </div>
          </div>
          <div className="billing-summary">
            <div className="pdf-details">
              <input type="checkbox" id="pdf-checkbox" />
              <label htmlFor="pdf-checkbox">
                <Icon icon="mdi:file-pdf" />
              </label>
              <p className="bill">Billing #780-Dec 2022</p>
              <p className="paid">Paid</p>
            </div>
            <div className="billing-details">
              <p className="details">Dec 23,2022</p>
              <p className="details">USD $12.00</p>
              <p className="details">Basic plan</p>
              <p className="details">15 Users</p>
            </div>
            <div className="download-dot">
              <button className="download-button">Download</button>
              <div>
                 &#8942;
              </div>
            </div>
          </div>
      
        </div>
    </>
  );
}