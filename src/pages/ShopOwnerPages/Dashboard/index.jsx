import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "../../../components/Common/Loading";
import styles from "./Dashboard.module.scss";
import { useTranslation } from "react-i18next";
import { SHOP_OWNER_DASHBOARD } from "../../../services/ApiCalls";
import { catchAsync, checkResponse } from "../../../utilities/utilities";
import {
  FaStore,
  FaQuestionCircle,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import ShopOwnerAreaChart from "./AreaChart";

const ShopOwnerDashboard = () => {
  const [data, setData] = useState({
    storeCount: 0,
    queryCount: 0,
  });
  const [loader, setLoader] = useState(false);
  const { t } = useTranslation();

  const getDashboardData = catchAsync(async () => {
    setLoader(true);
    const res = await SHOP_OWNER_DASHBOARD({});
    checkResponse({
      res,
      setData: (responseData) => setData(responseData),
      setLoader,
    });
  }, setLoader);

  useEffect(() => {
    getDashboardData();
  }, []);

  if (loader) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Loading />
      </div>
    );
  }

  const statsCards = [
    {
      title: t("totalStores"),
      value: data.storeCount,
      subtitle: t("activeStores"),
      icon: <FaStore />,
      color: "#412800",
      bgGradient: "linear-gradient(135deg, #412800 0%, #71501a 100%)",
      iconBg: "rgba(65, 40, 0, 0.1)",
    },
    {
      title: t("totalQueriesShopOwner"),
      value: data.queryCount,
      subtitle: t("customerQueries"),
      icon: <FaQuestionCircle />,
      color: "#3c0760",
      bgGradient: "linear-gradient(135deg, #3c0760 0%, #5a0a8f 100%)",
      iconBg: "rgba(60, 7, 96, 0.1)",
    },
    {
      title: t("visitorCount"),
      value: data.shopVistorCount,
      subtitle: t("totalVisitor"),
      icon: <FaUsers />,
      color: "#3c0760",
      bgGradient: "linear-gradient(135deg, #3c0760 0%, #5a0a8f 100%)",
      iconBg: "rgba(60, 7, 96, 0.1)",
    },
  ];

  return (
    <section className="shop-owner-dashboard py-4">
      <Container fluid>
        <Row className="mb-4">
          <Col xs={12} className="mb-3">
            <h3 className="fw-bold themeClr mb-0">{t("dashboardOverview")}</h3>
            <p className="text-muted mb-0">
              {t("welcomeBackMessage")}
            </p>
          </Col>
        </Row>

        {/* Stats Cards */}
        <Row className="g-4 mb-4">
          {statsCards.map((card, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <div
                className="box p-4 h-100"
                style={{
                  background: "#fff",
                  borderRadius: "15px",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(65, 40, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "1px 1px 3.8px 2px rgba(0, 0, 0, 0.15)";
                }}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div className="flex-grow-1">
                    <p
                      className="text-muted mb-2 fw-sbold"
                      style={{ fontSize: "14px" }}
                    >
                      {card.title}
                    </p>
                    <h2
                      className="mb-1 fw-bold"
                      style={{
                        color: card.color,
                        fontSize: "2.5rem",
                      }}
                    >
                      {card.value}
                    </h2>
                    <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                      {card.subtitle}
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: card.iconBg,
                      color: card.color,
                      fontSize: "2rem",
                    }}
                  >
                    {card.icon}
                  </div>
                </div>
                <div
                  className="mt-3 rounded"
                  style={{
                    height: "4px",
                    background: card.bgGradient,
                    borderRadius: "2px",
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
        <Row className="g-4">
          <Col lg={12}>
            <div className="box h-100" style={{
              background: "#fff",
              borderRadius: "15px",
              border: "1px solid #f0f0f0",
              padding: "20px",
            }}>
              <div className="mb-3">
                <h5 className="mb-0 fw-bold themeClr">{t("shopVisitorsOverTime")}</h5>
              </div>
              <div>
                <ShopOwnerAreaChart />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShopOwnerDashboard;
