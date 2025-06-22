import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

// css
import "react-datepicker/dist/react-datepicker.css";
import { DASHBOARD } from "../../../services/ApiCalls";
import { dashboardReportTypeArr } from "../../../utilities/const";
import {
  catchAsync,
  checkResponse,
  removeUnderScoreAndCapitalizeFirstLetter,
} from "../../../utilities/utilities";
import FeatureCard from "./components/FeatureCard";
import Loading from "../../../components/Common/Loading";
import styles from "./Dashboard.module.scss";
import AreaChart from "../../../components/Graph/AreaChart";
import PieChart from "../../../components/Graph/PieChart";

// img

const Dashboard = () => {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);

  const getDashBoardData = catchAsync(async () => {
    setLoader(true);

    // const res = await DASHBOARD();

    // checkResponse({ res, setData, setLoader });
  }, setLoader);

  useEffect(() => {
    getDashBoardData();
  }, []);

  return (
    <section className="dashboard-container py-4">
      <Container fluid>
        {/* Feature Cards */}
        <Row className="mb-4">
          <Col xs={12}>
            <FeatureCard
              data={{
                totalUsers: 1002,
                totalShops: 20000,
                unRegisteredUser: 30000,
                queries: 20000000,
              }}
            />
          </Col>
        </Row>

        {/* Charts Section */}
        <Row className="g-4">
          <Col lg={12}>
            <div className="dashboard-card h-100">
              <div className="card-header">
                <h5 className="mb-0">Users signup's over time</h5>
              </div>
              <div className="card-body">
                <AreaChart data={data} />
              </div>
            </div>
          </Col>
          {/* <Col lg={5}>
            <div className="dashboard-card h-100">
              <div className="card-header">
                <h5 className="mb-0">Booking Status</h5>
              </div>
              <div className="card-body">
                <PieChart data={data} />
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Dashboard;
