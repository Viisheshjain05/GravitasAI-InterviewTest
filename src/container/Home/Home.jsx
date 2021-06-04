import React from "react";
// import BlockCharts from "../../component/charts/blockCharts.jsx";
import Layout from "../../component/layout/layout.jsx";
import "./style/home.scss";

// import img from "../../assets/Dashboard-1-TopHalf.png";

const Home = (props) => {
  return (
    <>
      <Layout>
        {/* Filter Section Start */}
        <div className="filter">
          <div className="filter--heading">
            <i className="bx bx-user"></i>
            Filter
          </div>
          <div className="filter--date">
            <div className="filter--date-range__start">
              <i className="bx bx-user"></i>
              2021-04-28
            </div>
            <div className="filter--date-range__end">
              <i className="bx bx-user"></i>
              2021-05-28
            </div>
          </div>
          <div className="filter--custom-range">
            Custom Range
            <i className="bx bx-user"></i>
          </div>
          <div className="filter--export">
            Export To Pdf
            <i className="bx bx-user"></i>
          </div>
        </div>
        {/* Filter Section END */}
        <div className="box-graph">
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--unit">5.2K</div>
            <div className="box-graph__sub-box--map"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--unit">3.6K</div>
            <div
              style={{
                clipPath:
                  " polygon(54% 49%, 90% 43%, 100% 100%, 75% 100%, 25% 100%, 0 100%, 28% 65%)",
              }}
              className="box-graph__sub-box--map"
            ></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--unit">3.6K</div>
            <div
              style={{
                clipPath:
                  " polygon(54% 49%, 90% 43%, 100% 100%, 75% 100%, 25% 100%, 0 100%, 28% 65%)",
              }}
              className="box-graph__sub-box--map"
            ></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--unit">3.6K</div>
            <div
              style={{
                clipPath:
                  " polygon(54% 49%, 90% 43%, 100% 100%, 75% 100%, 25% 100%, 0 100%, 28% 65%)",
              }}
              className="box-graph__sub-box--map"
            ></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--unit">3.6K</div>
            <div
              style={{
                clipPath:
                  " polygon(54% 49%, 90% 43%, 100% 100%, 75% 100%, 25% 100%, 0 100%, 28% 65%)",
              }}
              className="box-graph__sub-box--map"
            ></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--unit">3.6K</div>
            <div
              style={{
                clipPath:
                  " polygon(54% 49%, 90% 43%, 100% 100%, 75% 100%, 25% 100%, 0 100%, 28% 65%)",
              }}
              className="box-graph__sub-box--map"
            ></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--unit">3.6K</div>
            <div
              style={{
                clipPath:
                  " polygon(54% 49%, 90% 43%, 100% 100%, 75% 100%, 25% 100%, 0 100%, 28% 65%)",
              }}
              className="box-graph__sub-box--map"
            ></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--unit">3.6K</div>
            <div className="box-graph__sub-box--map"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--unit">3.6K</div>
            <div className="box-graph__sub-box--map"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--unit">3.6K</div>
            <div className="box-graph__sub-box--map"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--unit">3.6K</div>
            <div className="box-graph__sub-box--map"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--unit">3.6K</div>
            <div className="box-graph__sub-box--map"></div>
          </div>
        </div>

        {/* Last Section In Home page Analysis */}

        <div className="analysis">
          <div style={{ marginRight: "1em" }} className="analysis__head">
            <h3>
              <i className="bx bx-user"></i>
              Most common intents
            </h3>
            <div className="analysis__head-sub">
              <div className="analysis__head-sub--text">payment</div>
              <div className="analysis__head-sub--unit">58.4</div>
            </div>
            <div className="analysis__head-sub">
              <div className="analysis__head-sub--text">get_a_loan</div>
              <div className="analysis__head-sub--unit">15%</div>
            </div>
            <div className="analysis__head-sub">
              <div className="analysis__head-sub--text">consumer_loans</div>
              <div className="analysis__head-sub--unit">5%</div>
            </div>
            <div className="analysis__head-sub">
              <div className="analysis__head-sub--text">mortage</div>
              <div className="analysis__head-sub--unit">5%</div>
            </div>
            <div className="analysis__head-sub">
              <div className="analysis__head-sub--text">help</div>
              <div className="analysis__head-sub--unit">4.5%</div>
            </div>
            <div className="analysis__head-sub">
              <div className="analysis__head-sub--text">support</div>
              <div className="analysis__head-sub--unit">4%</div>
            </div>
          </div>
          <div style={{ marginLeft: "1em" }} className="analysis__head">
            <h3>
              <i className="bx bx-user"></i>
              Most active hours
            </h3>
            <div className="analysis__head-sub">
              <div className="analysis__head-sub--text">12:00pm-14:30pm</div>
              <div className="analysis__head-sub--unit">3923 messages</div>
            </div>
            <div className="analysis__head-sub">
              <div className="analysis__head-sub--text">18:00pm-19:10pm</div>
              <div className="analysis__head-sub--unit">1142 messages</div>
            </div>
            <div className="analysis__head-sub">
              <div className="analysis__head-sub--text">10:00pm-11:10pm</div>
              <div className="analysis__head-sub--unit">392 messages</div>
            </div>
            <div className="analysis__head-sub">
              <div className="analysis__head-sub--text">10:00pm-14:30pm</div>
              <div className="analysis__head-sub--unit">323 messages</div>
            </div>
            <div className="analysis__head-sub">
              <div className="analysis__head-sub--text">12:00pm-14:30pm</div>
              <div className="analysis__head-sub--unit">223 messages</div>
            </div>
            <div className="analysis__head-sub">
              <div className="analysis__head-sub--text">12:00pm-14:30pm</div>
              <div className="analysis__head-sub--unit">2 messages</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
