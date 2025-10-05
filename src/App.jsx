import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Assets/css/responsive.css";
import "./Assets/css/style.css";
import requestNotificationPermission from "./firebase";
import AuthLayout from "./layout/Auth/authLayout";
import MainLayout from "./layout/MainLayout/MainLayout";
import ShopOwnerLayout from "./layout/ShopOwnerLayout/ShopOwnerLayout";
import { privateRoutes, routes } from "./pages/index";
import { shopOwnerRoutes } from "./pages/ShopOwnerPages";
import { updateLang } from "./store/actions";

function App() {
  const isAuthenticated = useSelector((s) => s.login.token);
  const loginUserRole = useSelector((s) => s.login.loginUserRole);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      requestNotificationPermission();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!localStorage.getItem("lang")) {
      dispatch(updateLang("en"));
    }
  }, []);

  return (
    <>
      <Routes>
        {isAuthenticated && ["Admin", "User"].includes(loginUserRole) ? (
          <>
            {loginUserRole === "Admin" ? (
              <>
                <Route
                  path="*"
                  element={<Navigate replace to="/dashboard" />}
                />
                {privateRoutes.map((data, index) => (
                  <Route element={<MainLayout title={data?.title} />}>
                    <Route
                      onUpdate={() => window.scrollTo(0, 0)}
                      exact={true}
                      path={data.path}
                      element={data.component}
                      key={index}
                      title={data?.title}
                    />
                  </Route>
                ))}
              </>
            ) : (
              <>
                <Route
                  path="*"
                  element={<Navigate replace to="/shop-owner/dashboard" />}
                />
                {shopOwnerRoutes.map((data, index) => (
                  <Route element={<ShopOwnerLayout title={data?.title} />}>
                    <Route
                      onUpdate={() => window.scrollTo(0, 0)}
                      exact={true}
                      path={data.path}
                      element={data.component}
                      key={index}
                      title={data?.title}
                    />
                  </Route>
                ))}
              </>
            )}
          </>
        ) : (
          <Route element={<AuthLayout />}>
            <Route path="*" element={<Navigate to="/login" />} />
            {routes.map((data, index) => (
              <Route
                onUpdate={() => window.scrollTo(0, 0)}
                exact={true}
                path={data.path}
                element={data.component}
                key={index}
              />
            ))}
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
