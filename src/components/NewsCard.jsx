import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { pages } from "../constants";
import "../assets/styles/news.css";

function NewsCard({ news = {}, page = "news" }) {
  const { news_name, news_start_date, news_end_date } = news?.attributes;
  const img_url = news?.attributes.news_picture.data.attributes.formats.large.url;

  return (
    <>
        <Card key={news?.id}>
          <Card.Img variant="top" src={"http://localhost:1337"+img_url} />
        <Card.Body>
          <Card.Title>{news_name}</Card.Title>
          {page === pages.news && (
            <Card.Text>
              {news_start_date} - {news_end_date}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default NewsCard;
