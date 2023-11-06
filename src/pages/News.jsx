import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import NewsCard from "../components/NewsCard";
import { Row, Col } from "react-bootstrap";
import "../assets/styles/activity.css";
import CustomPagination from "../components/CustomPagination";
import testpic from "../assets/BU-Diamond-F.jpg";
import ActivityFilter from "../components/ActivityFilter";
import { pages, pagesTitle } from "../constants";
import { getAllInfo, getAllNews } from "../services/newsService";

function News() {
  const [dataLength, setDataLength] = useState(0);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 8;
  let minIndex = 0;
  let maxIndex = 8;

  const renderNewsCards = () => {
    return data.map((news) => (
      <Col key={news.id} xs={12} md={3}>
        <NewsCard
          news={news}
          newsImage={testpic}
          page={pages.news}
        />
      </Col>
    ));
  };

  useEffect(() => {
    getAllNews().then((res) => {
      setData(res.response_data.data);
    });
  }, []);

  return (
    <Layout>
      <div className="section-home">
        <ActivityFilter page={pagesTitle.news} />
        <Row>{renderNewsCards()}</Row>
        <Row className="pagination-section">
          <Col sm={3} md={12} lg={12}>
            <CustomPagination
              dataLength={dataLength}
              pagePath={"/news/"}
              itemPerPage={itemPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default News;
