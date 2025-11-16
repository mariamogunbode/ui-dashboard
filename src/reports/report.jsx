import { Icon } from "@iconify/react";
import { Chart, registerables } from 'chart.js';
import { Bar } from "react-chartjs-2";
import { SalesChartData, loanBarData, paymentBarData } from "../data/staisticData";
import './report.css'

export function Reports() {
   Chart.register(...registerables);

  const { data, options, purplePointPlugin,imagePlugin } = SalesChartData();
  const { data2, options2 } = paymentBarData();
  const { data3, options3 } = loanBarData();

   const avatars = [
    { letter: 'K', color: '#66D9EF' },
    { letter: 'T', color: '#FC6231' },
    { letter: 'J', color: '#A7D93D' },
    { letter: 'S', color: '#9068BE' },
    { letter: 'B', color: '#4CA4D6' },
    { letter: 'D', color: '#FFD700' },
    { letter: 'C', color: '#FF6384' },
    { letter: 'M', color: '#36A2EB' },
    { letter: 'H', color: '#FFCE56' },
    { letter: 'L', color: '#4BC0C0' },
    { letter: 'O', color: '#9966FF' },
    { letter: 'W', color: '#FF9F40' },
    { letter: 'P', color: '#FF9F40' },
    { letter: 'R', color: '#945c24ff' },
  ];

  const images = {
    image1: 'images/image1.jpg',
    image2: 'images/image2.jpg',
    image3: 'images/image3.jpg',
    image4: 'images/image4.jpg',
    image5: 'images/image5.jpg',
    image6: 'images/image1.jpg',
    image7: 'images/image2.jpg',
    image8: 'images/image3.jpg',
    image9: 'images/image4.jpg',
    image10: 'images/image5.jpg'
  };


  return (
    <>
      <div className="profile-search">
              <p className="profile-overview">Users/Reports</p>
              <div className="search-bar-icon">
                <input type="text" placeholder="Search anything here"
                  className="search-bar" />
                <Icon className="search-icon"
                  icon="mdi:search" />
              </div>
            </div>

        <div className="the-3-charts-container">
          <div className="dollars-divs-container">
            <div>
              <p className="dollars">$8,098.32</p>
              <p className="usage">Payment</p>
            </div>
            <div className="empty-dollar-div"></div>
            <div>
              <p className="dollars">$901,256.01</p>
              <p className="usage">Loan income</p>
            </div>
             <div className="empty-dollar-div"></div>
             <div>
              <p className="dollars">$987,256.98</p>
              <p className="usage">Gross amount</p>
             </div>
              <div className="empty-dollar-div"></div>
              <div>
                <p className="dollars">$564,164.57</p>
                <p className="usage">Jobs create</p>
              </div>
          </div>
        <div className="sales-chart-container">
          <div className="chart-header">
              <div className="chart-title">
                <h3>Statistics</h3>
                <h2>Sales Closed</h2>
              </div>
              <div className="chart-month-selector">
                <span>Month</span>
                <select>
                  <option value="month">Month</option>
                </select>
                <span className="arrow-down">&#9660;</span>
              </div>
            </div>
         
          <div className="chart-wrapper">
              <Bar data={data}
              options={options}
              plugins={[purplePointPlugin, imagePlugin]} />
            </div>
   

<div className="avatar-row">
              {data.labels.map((label, index) => {
                if (label.startsWith('image')) {
                  return (
                    <div key={index}
                    className="avatar"
                    style={{backgroundColor: 'transparent'}}>
                      <img src={images[label]}
                      alt="avatar" />
                    </div>
                  );
                } else {
                  const avatar = avatars.find((avatar) => avatar.letter === label);
                  return (
                    <div key={index} 
                    className="avatar"
                    style={{backgroundColor: avatar?.color}}>
                      {label}
                    </div>
                  )
                }
              })}
            </div>
            </div>
            <div className="payment-loan-income-container">
              <div className="payment-chart">
                <div className="dollar-payment-container">
                  <div>
                    <p className="pay-ments">Payments</p>
                    <p className="payment-dollar">$7,124.80</p>
                  </div>
                  <div className="month-dropdown">
                    <p>Month</p>
                    <Icon icon="mdi:chevron-down" />
                  </div>
                </div>
                <div className="payment-bar">
                <Bar data={data2} options={options2} />
                </div>
              </div>
              <div className="loan-chart">
                <div className="loan-dollar-container">
                  <p className="loan-income">Loan Income</p>
                  <p className="loan-dollar">$860,472.29</p>
                </div>
                <Bar data={data3} options={options3} />
              </div>
            </div>

          </div>
    </>
  );
} 
