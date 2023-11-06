import { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { DateRangePicker } from "@react-spectrum/datepicker";
import "../assets/styles/activity.css";

const initialSearch = {
  search: "",
};

function ActivityFilter({ activity = {}, page = "" }) {
  const [searchData, setSearchData] = useState(initialSearch);
  let [date, setDate] = useState({});

  const handleSearchChange = (e) => {
    const { name, value } = e?.target;
    setSearchData({ [name]: value });
  };

  return (
    <>
      <Row className="activity-header">
        <Col md={3}>
          <h4>{page}</h4>
        </Col>
        <Col md={1}>
          <span className="normal-text">Date</span>
        </Col>
        <Col md={4}>
          <DateRangePicker value={date} onChange={setDate} />
        </Col>
        <Col md={4}>
          <Row className="search-row">
            <Col md={8}>
              <Form.Control
                type="text"
                value={searchData.search}
                placeholder="Search"
                onChange={(e) => handleSearchChange(e)}
                className="search-input"
                name="search"
              />
            </Col>
            <Col md={4}>
              <Button variant="warning" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default ActivityFilter;
