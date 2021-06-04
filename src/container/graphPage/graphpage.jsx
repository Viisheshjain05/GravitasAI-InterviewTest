import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../component/layout/layout.jsx";
import "./graphPage.scss";
import BlockCharts from "../../component/charts/blockCharts.jsx";

const Graphpage = (props) => {
  return (
    <Layout>
      <div className="back-page">
        <Link to="/">
          <div className="back-page--return-btn">{"<"}</div>
        </Link>
        <div className="back-page--return-text">Total Messages</div>
      </div>
      <div className="graph-page">

      <BlockCharts />
      </div>
    </Layout>
  );
};

export default Graphpage;
