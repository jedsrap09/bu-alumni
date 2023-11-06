import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Img } from "react-bootstrap";
import { pagesTitle } from "../constants";
import "../assets/styles/detailActivity.css";

function ActivityDetail({ activity = {}, page = "activity" }) {
  const { activity_name, activity_start_date, activity_end_date, location } =
    activity?.attributes;
  const img_url =
    activity?.attributes.picture.data.attributes.formats.large.url;

  return (
    <Container key={activity?.id} fluid>
      <div className="section-detail">
        <Row>
          <Col>
            <h4>{pagesTitle.activity_detail}</h4>
          </Col>
        </Row>
        {page === pages.activity && (
        <Row>
          <Img className="image" src={"http://localhost:1337" + img_url} />
          <Col xs={12}>{activity_start_date} - {activity_end_date}</Col>
          <Col xs={12}>
            <h5>{activity_name}</h5>
          </Col>
          <Col xs={12}>{location}</Col>
          <Col xs={12}>รายละเอียด</Col>
        </Row>
          )}
        <Row>
          <Col>
            <Button
              className="join-button"
              variant="outline-warning"
              onClick={handleSubmit}
            >
              Join Activity
            </Button>
          </Col>
        </Row>
      </div>
      {/* </div> */}
    </Container>
  );
}

export default ActivityDetail;
