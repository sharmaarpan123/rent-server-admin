import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

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
import { useTranslation } from "react-i18next";

// img

const Dashboard = () => {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);
  const [startDate, setStartDate] = useState(
    new Date(Date.now() - 150 * 24 * 60 * 60 * 1000)
  ); // 7 days ago
  const [endDate, setEndDate] = useState(new Date()); // today
  const [dateError, setDateError] = useState("");
  const { t } = useTranslation();

  const getDashBoardData = catchAsync(async () => {
    setLoader(true);
    setDateError("");

    // Validate dates
    if (startDate >= endDate) {
      setDateError("Start date must be less than end date");
      setLoader(false);
      return;
    }

    const params = {
      startDate: startDate.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
    };

    const res = await DASHBOARD(params);

    checkResponse({ res, setData, setLoader });
  }, setLoader);

  useEffect(() => {
    getDashBoardData();
  }, []);

  const handleDateChange = (type, date) => {
    if (type === "start") {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const handleFilter = () => {
    getDashBoardData();
  };

  return (
    <section className="dashboard-container py-4">
      <Container fluid>
        {/* Date Filter Section */}

        {/* Feature Cards */}
        <Row className="mb-4">
          <Col xs={12}>
            <FeatureCard
              data={{
                totalUsers: data?.totalUsers || 1002,
                totalShops: data?.totalShops || 20000,
                unRegisteredUser: data?.unRegisteredUser || 30000,
                queries: data?.queries || 20000000,
              }}
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12}>
            <div className="dashboard-card">
              <div className="card-header">
                <h5 className="mb-0">Date Filter</h5>
              </div>
              <div className="card-body">
                <Row className="align-items-end">
                  <Col md={3}>
                    <div className="d-flex flex-column">
                      <label className="">Start Date</label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => handleDateChange("start", date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        maxDate={endDate}
                        className="form-control"
                        dateFormat="yyyy-MM-dd"
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="d-flex flex-column">
                      <label className="">End Date</label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => handleDateChange("end", date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        maxDate={new Date()}
                        className="form-control"
                        dateFormat="yyyy-MM-dd"
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <Button
                      className="commonBtn"
                      variant="primary"
                      onClick={handleFilter}
                      disabled={loader}
                    >
                      {loader ? "Loading..." : "Apply Filter"}
                    </Button>
                  </Col>
                  {dateError && (
                    <Col md={12} className="mt-2">
                      <div className="text-danger">{dateError}</div>
                    </Col>
                  )}
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        {/* Charts Section */}
        <Row className="g-4">
          <Col lg={12}>
            <div className="dashboard-card h-100">
              <div className="card-header">
                <h5 className="mb-0">{t("userSignupsOverTime")}</h5>
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
