import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "../assets/styles/carousel.css";
import Figure from "react-bootstrap/Figure";
// import NewsFilter from "../components/ActivityFilter";

function HomeCarousel() {
  // const [data, setData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);

  // const itemPerPage = 4;
  // let minIndex = 0;
  // let maxIndex = 4;

  // const renderNewsCards = () => {
  //   return data.map((activity) => (
  //     <Col key={activity.id} xs={12} md={3}>
  //       <ActivityCard
  //         activity={activity}
  //         activityImage={testpic}
  //         page={pages.activity}
  //       />
  //     </Col>
  //   ));
  // };

  // useEffect(() => {
  //   minIndex = currentPage === 1 ? 0 : currentPage * itemPerPage - itemPerPage;
  //   maxIndex = currentPage * itemPerPage;
  //   getAllNews(minIndex, maxIndex).then((res) => {
  //     if (res) {
  //       setDataLength(res.count);
  //       setData(res.response_data);
  //     }
  //   });
  // }, [currentPage]);
  
  return (
    <Container className="carousel-container" fluid>
      <Row>
        <Col xs={12} md={9}>
          <Carousel>
            <Carousel.Item>
              <img
                className="carousel-img"
                src="/src/assets/BU-Diamond.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-img"
                src="/src/assets/BU-Diamond.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-img"
                src="/src/assets/BU-Diamond.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-img"
                src="/src/assets/BU-Diamond.jpg"
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="news-form" xs={12} md={3}>
          <Figure>
            <Figure.Image
              width={150}
              height={170}
              src="/src/assets/BU-Diamond.jpg"
            />
            <Figure.Caption>
            รวมกำหนดการรับปริญญา...
            </Figure.Caption>
          </Figure>
          {/* <Row>{renderNewsCards()}</Row> */}
          <Figure>
            <Figure.Image
              width={150}
              height={170}
              src="/src/assets/BU-Diamond.jpg"
            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeCarousel;
