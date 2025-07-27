import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

// css
import styles from "./Auth.module.scss";

// img
import logo from "../../Assets/images/logo.png";

const AuthLayout = () => {
  return (
    <>
      <section
        className={`${styles.authLayout} authLayout position-relative py-3 d-flex align-items-center justify-content-center flex-column`}
        style={{}}
      >
        <Container className="">
          <Row className="justify-content-center">
            <Col lg="5" md="6" sm="8" className="my-2 py-4 h-100">
              <div
                className={`${styles.formWrpper} formWrpper position-relative  px-3 py-4`}
                style={{ height: "85vh" }}
              >
                <div className="logo text-center">
                  <img
                    src={logo}
                    alt=""
                    className="img-fluid object-fit-contain"
                    style={{ height: 100 }}
                  />
                </div>
                <Outlet />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AuthLayout;
