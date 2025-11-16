import { useState } from 'react';
import { Icon } from '@iconify/react';
import { checkboxData } from '../data/checkbox-data.js';
import { checkboxData2 } from '../data/checkbox2-data.js';
import { checkboxData3 } from '../data/checkbox3-data.js';
import './PricingPage.css'

export function PricingPage() {
  const [checked, setChecked] = useState(checkboxData.map((item) => ({ ...item }))
  );

  const [checked2, setChecked2] = useState(checkboxData2.map((item) => ({ ...item }))
  );

  const [checked3, setChecked3] = useState(checkboxData3.map((item) => ({ ...item }))
  );
  const handleChange = (itemId) => {
    setChecked((prevChecked) =>
      prevChecked.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  }

  const handleChange2 = (itemId) => {
    setChecked2((prevChecked2) =>
      prevChecked2.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  }

  const handleChange3 = (itemId) => {
    setChecked3((prevChecked2) =>
      prevChecked2.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  }
  return (
    <>
      <div className="profile-search">
        <p className="profile-overview">Pricing page</p>
        <div className="search-bar-icon">
          <input type="text" placeholder="Search anything here"
            className="search-bar" />
          <Icon className="search-icon"
            icon="mdi:search" />
        </div>
      </div>
      <div className="pricing-container">
        <p className="pricing">Pricing</p>
        <p className="simple-pricing">Simple Pricing. No Hidden Fees. Advance Features for your bussiness.</p>
      </div>
      <div className="free-price-custom-container">
        <div className="free-div">
          <p className="free-personal">Free/Personal</p>
          <p className="lifetime">For a Lifetime</p>
          <button className="current-button">Current Plan</button>

          {checked.map((item) => (
            <div className="input-checks-container"
              key={item.id}>
              <input
                type="checkbox"
                id={`checked-${item.id}`}
                checked={item.checked}
                onChange={() => handleChange(item.id)}
              />
              <label className="html-label" htmlFor={`checkbox-${item.id}`}>{item.label}</label>
            </div>
          ))}
        </div>

        <div className="free-div">
          <p className="free-personal">$89/Professional</p>
          <p className="lifetime">/year</p>
          <button className="try-button">Try for Free</button>

          {checked2.map((item) => (
            <div className="input-checks-container"
              key={item.id}>
              <input
                type="checkbox"
                id={`checked-${item.id}`}
                checked={item.checked}
                onChange={() => handleChange2(item.id)}
              />
              <label className="html-label2" htmlFor={`checkbox-${item.id}`}>{item.label}</label>
            </div>
          ))}
        </div>

        <div className="free-div">
          <p className="free-personal">Custom/Enterprise</p>
          <p className="lifetime">Reach out for a quote</p>
          <button className="contact-button">Contact Us</button>

          {checked3.map((item) => (
            <div className="input-checks-container"
              key={item.id}>
              <input
                type="checkbox"
                id={`checked-${item.id}`}
                checked={item.checked}
                onChange={() => handleChange3(item.id)}
              />
              <label className="html-label3" htmlFor={`checkbox-${item.id}`}>{item.label}</label>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}