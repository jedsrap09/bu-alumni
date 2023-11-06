import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import ActivityCard from "../components/ActivityCard";
import { Row, Col } from "react-bootstrap";
import "../assets/styles/activity.css";
import CustomPagination from "../components/CustomPagination";
import testpic from "../assets/BU-Diamond-F.jpg";
import ActivityFilter from "../components/ActivityFilter";
import { pages, pagesTitle } from "../constants";
import { getAllActivities, getUsersActivityByUserId } from "../services/activityService";

function PersonalActivity() {
  const [dataLength, setDataLength] = useState(0);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 8;
  let minIndex = 0;
  let maxIndex = 8;

  const renderActivityCards = () => {
    return data.map((activity) => (
      <Col key={activity.id} xs={12} md={3}>
        <ActivityCard
          activity={activity}
          activityImage={testpic}
          page={pages.personal_activity}
        />
      </Col>
    ));
  };

  useEffect(() => {
    minIndex = currentPage === 1 ? 0 : currentPage * itemPerPage - itemPerPage;
    maxIndex = currentPage * itemPerPage;
    getUsersActivityByUserId(minIndex, maxIndex).then((res) => {
      if (res) {
        setDataLength(res.count);
        setData(res.response_data);
      }
    });
  }, [currentPage]);

  return (
    <Layout>
      <div className="section-home">
        <ActivityFilter page={pagesTitle.personal_activity} />
        <Row>{renderActivityCards()}</Row>
        <Row className="pagination-section">
        <Col sm={3} md={12} lg={12}>
            <CustomPagination
              dataLength={dataLength}
              pagePath={"/activity/"}
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

export default PersonalActivity;
