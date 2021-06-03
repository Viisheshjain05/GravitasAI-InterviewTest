import React from "react";
import Layout from "../../component/layout/layout.jsx";
import "./style/home.scss";

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
            <div className="box-graph__sub-box--map">3.6K</div>
            <div className="box-graph__sub-box--unit"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--map">3.6K</div>
            <div className="box-graph__sub-box--unit"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--map">3.6K</div>
            <div className="box-graph__sub-box--unit"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--map">3.6K</div>
            <div className="box-graph__sub-box--unit"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--map">3.6K</div>
            <div className="box-graph__sub-box--unit"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--map">3.6K</div>
            <div className="box-graph__sub-box--unit"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--map">3.6K</div>
            <div className="box-graph__sub-box--unit"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--map">3.6K</div>
            <div className="box-graph__sub-box--unit"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--map">3.6K</div>
            <div className="box-graph__sub-box--unit"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--map">3.6K</div>
            <div className="box-graph__sub-box--unit"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--map">3.6K</div>
            <div className="box-graph__sub-box--unit"></div>
          </div>
          <div className="box-graph__sub-box">
            <div className="box-graph__sub-box--text">
              {" "}
              Live Conversion Count{" "}
            </div>
            <div className="box-graph__sub-box--map">3.6K</div>
            <div className="box-graph__sub-box--unit"></div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
