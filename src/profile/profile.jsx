import { Icon } from '@iconify/react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { PurplelineData, GreenlineData, BluelineData } from '../data/ProfilePreview/profileLineCharts';
import { FollowerChart, ActionsList } from '../data/ProfilePreview/profileSecondLineChart';
import { DashedLineChart, PurpleBarChart } from '../data/ProfilePreview/profileThirdLineChart';
import { pieChartData } from "../data/lineCharts";
import { MyProfileData } from '../data/ProfilePreview/myProfile';
import { DoubleDataBar } from '../data/ProfilePreview/doubleDataBar';
import './profile.css'

export function ProfileOverview() {
  Chart.register(...registerables,
    annotationPlugin);
  const { chartData, pieChartOption, centralIndicatorPlugin } = pieChartData[0];
  Chart.register(centralIndicatorPlugin);
  const { data, options } = PurplelineData();
  const { data2, options2 } = GreenlineData(); const { data3, options3 } = BluelineData();
  const { data4, options4 } = FollowerChart();
  const { data5, options5 } = DashedLineChart();
  const { data6, options6 } = PurpleBarChart();
  const { data7, option7 } = DoubleDataBar();

  return (
    <>
      <div className="profile-search">
        <p className="profile-overview">Profile/Profile overview</p>
        <div className="search-bar-icon">
          <input type="text" placeholder="Search anything here"
            className="search-bar" />
          <Icon className="search-icon"
            icon="mdi:search" />
        </div>
      </div>

      <div className="profile-all-divs-container">
        <div className="profile-all-chart-divs">
          <div className="first-charts-container">
            <div className="colored-line-chart-container">
              <div className="purple-chart">
                <Line data={data} options={options} />
              </div>
              <div>
                <div className="number-percentage-div">
                  <p className="numbers">635</p>
                  <p className="numbers-percentage">+21.01%</p>
                </div>
                <p className="number-sentence">Average Likes</p>
              </div>
            </div>
            <div className="colored-line-chart-container">
              <div className="purple-chart">
                <Line data={data2} options={options2} />
              </div>
              <div>
                <div className="number-percentage-div">
                  <p className="numbers">123</p>
                  <p className="numbers-percentage">+4.399%</p>
                </div>
                <p className="number-sentence">Comments received</p>
              </div>
            </div>
            <div className="colored-line-chart-container">
              <div className="purple-chart">
                <Line data={data3} options={options3} />
              </div>
              <div>
                <div className="number-percentage-div">
                  <p className="numbers">23%</p>
                  <p className="numbers-percentage">+7.9%</p>
                </div>
                <p className="number-sentence">Av. Engagement rate</p>
              </div>
            </div>
          </div>
          <div className="second-charts-container">
            <div className="line4-charts-container">
              <div className="line4-chart-container">
                <div className="followers-come-container">
                  <p className="follo-wers">Followers</p>
                  <div className="red-purple-come-container">
                    <div className="come-empty-container">
                      <div className="come-empty-div1"></div>
                      <p className="income">Income</p>
                    </div>
                    <div className="come-empty-container">
                      <div className="come-empty-div2"></div>
                      <p className="outcome">Outcome</p>
                    </div>
                  </div>
                </div>
                <Line data={data4} options={options4} />
              </div>
            </div>
            <div className="actions-divs-container">
              <div className="action-list">
                <p className="action">Actions</p>
                <div className="question-button">?</div>
              </div>
              {ActionsList.map((list) => {
                return (
                  <div className="action-list">
                    <p className="list-action">{list.action}</p>
                    <p className="list-number">{list.number}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="third-charts-container">
            <div className="third-chart-container">
              <div className="interaction-question">
                <p className="interaction">Interaction</p>
                <div className="question">?</div>
              </div>
              <div className="dashed-line-chart">
                <Line data={data5} options={options5} />
              </div>
            </div>
            <div className="purple-barchart-container">
              <div className="best-time-container">
                <p>Best time</p>
                <div className="days-hours-container">
                  <p>Days</p>
                  <p>Hours</p>
                  <div>?</div>
                </div>
              </div>
              <div className="purple-barchart">
                <Bar data={data6} options={options6} />
              </div>
            </div>
          </div>
          <div className="fourth-charts-container">
            <div className="pie-chart2">
              <div className="gender-question-container">
                <p className="gender">Gender</p>
                <div className="gender-question">?</div>
              </div>
              <Doughnut
                data={
                  {
                    labels: chartData.labels,
                    datasets: [
                      {
                        label: 'Pie Chart',
                        data: chartData.data,
                        backgroundColor: pieChartOption.datasets[0].backgroundColor,
                        borderWidth: pieChartOption.datasets[0].borderWidth,
                        borderRadius: pieChartOption.datasets[0].borderRadius,
                      },
                    ],
                  }}
                options={
                  {
                    responsive: pieChartOption.responsive,
                    maintainAspectRatio: pieChartOption.maintainAspectRatio,
                    plugins: {
                      ...pieChartOption.plugins,
                      indicator: {},
                      datalabels: {
                        ...pieChartOption.plugins.datalabels,
                        formatter: (value, context) => {
                          return chartData.labelData[context.dataIndex].value;
                        },
                      },
                    },
                    rotation: pieChartOption.datasets[0].rotation,
                    circumference: pieChartOption.datasets[0].circumference,
                    cutout: pieChartOption.datasets[0].cutout,
                  }}
                plugins={[centralIndicatorPlugin]}
              />
              <div className="men-women-div-container2">
                <div className="men-container2">
                  <div className="men-empty-div2"></div>
                  <div>
                    <p className="thirty-five2">35%</p>
                    <p className="men2">Men</p>
                  </div>
                </div>
                <div className="women-container2">
                  <div className="women-empty-div2"></div>
                  <div>
                    <p className="fourty-five2">45%</p>
                    <p className="women2">Women</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="double-data-barchart">
              <div className="age-range-container">
                <p className="age-range">Age range</p>
                <div className="gender-range-container">
                  <p className="all">All</p>
                  <p className="men-div">Men</p>
                  <p className="women-div">Women</p>
                  <div className="gender-question">?</div>
                </div>
              </div>
              <div  className="doubledata-chart">
              <Bar data={data7} options={option7} />
              </div>
            </div>
          </div>
        </div>
        <div className="my-profile-div">
          <div>
            <div className="profile-setting-container">
              <p className="my-profile">My profile</p>
              <div className="people-setting-icon-container">
                <Icon icon="mdi:account-multiple" />
                <Icon icon="mdi:settings" />
              </div>
            </div>
            <div className="alice-image-container">
              <img className="myProfile-image"
                src="images/image4.jpg" />
              <p className="alice-turner">Alice_turner</p>
            </div>
            <div className="training-container">
              <p className="vip-training">VIP Training Course</p>
              <div className="percent-emptydiv-container">
                <p className="ten-percent">10%</p>
                <div className="purple-empty-div"></div>
                <div className="lilac-empty-div"></div>
              </div>
              <div className="hashtag-setting-container">
                <p className="hashtag-set">Hashtags sets</p>
                <div className="setting-icon-container">
                  <Icon icon="mdi:settings" />
                </div>
              </div>
              {MyProfileData.map((hashtags) => {
                return (
                  <div className="hash-tags-container"
                    key={hashtags.id}>

                    <div>
                      <p className="hashtag-headline">{hashtags.headline}</p>
                      <div className="hashtags-tags">
                        <p className="hashtag-tags">#{hashtags.tag1}</p>
                        <p className="hashtag-tags">#{hashtags.tag2}</p>
                        <p className="hashtag-tags">#{hashtags.tag3}</p>
                      </div>
                    </div>
                    <Icon icon="mdi:chevron-down" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}