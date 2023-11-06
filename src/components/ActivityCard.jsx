import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { pages } from "../constants";
import "../assets/styles/activity.css";

function ActivityCard({ activity = {}, page = "activity" }) {
  const { activity_name, activity_start_date, activity_end_date, location } =
    activity?.attributes;
  const img_url =
    activity?.attributes.picture.data.attributes.formats.large.url;

  return (
    <>
      <Card key={activity?.id}>
        <Card.Img variant="top" src={"http://localhost:1337" + img_url} />
        <Card.Body>
          <Card.Title>{activity_name}</Card.Title>
          {page === pages.activity && (
            <Card.Text>
              {activity_start_date} - {activity_end_date}
              <br />
              {location}
            </Card.Text>
          )}
          {page === pages.personal_activity && (
            <Card.Text>
              <Button variant="warning" type="submit">
                Assessment
              </Button>
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default ActivityCard;
