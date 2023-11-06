import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import HomeCarousel from "../components/HomeCarousel";
import ActivityCard from "../components/ActivityCard";
import { Row, Col } from "react-bootstrap";
import testpic from "../assets/BU-Diamond-F.jpg";
import { pages, pagesTitle } from "../constants";
import { getAllActivity } from "../services/activityService";
import "../assets/styles/home.css";

function Home() {
  const [dataLength, setDataLength] = useState(0);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 4;
  let minIndex = 0;
  let maxIndex = 4;

  const renderActivityCards = () => {
    return data.map((activity) => (
      <Col key={activity.id} xs={12} md={3}>
        <ActivityCard
          activity={activity}
          activityImage={testpic}
          page={pages.activity}
        />
      </Col>
    ));
  };

  useEffect(() => {
    minIndex = currentPage === 1 ? 0 : currentPage * itemPerPage - itemPerPage;
    maxIndex = currentPage * itemPerPage;
    getAllActivity(minIndex, maxIndex).then((res) => {
      if (res) {
        setDataLength(res.count);
        setData(res.response_data);
      }
    });
  }, [currentPage]);

  return (
    <Layout>
      <div className="section-home">
        <Row>
          <Col className="news-home" lg={10} md={10}>
            {pagesTitle.news}
          </Col>
          <Col>
            <a href="/news" className="view-all-new">
              View All
            </a>
          </Col>
          <HomeCarousel />
        </Row>
        <Row>
          <Col className="activities-calendar">
            {pagesTitle.activities_calendar}
          </Col>
          <Col>
            <a href="/activity" className="view-all-activity">
              View All
            </a>
          </Col>
          <Row>{renderActivityCards()}</Row>
        </Row>
      </div>
    </Layout>
  );
}

export default Home;
