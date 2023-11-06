import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/layout.css";
import Sidebar from "../components/Sidebar";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <Container fluid className="font-container">
      <Row>
        <Col xs={12} md={2} className="pr-none">
          <Sidebar />
        </Col>
        <Col xs={12} md={10} className="pl-none">
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
