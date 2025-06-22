import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

// css
import styles from "../../../layout/Auth/Auth.module.scss";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import CloseEye from "../../../components/Common/icon/svg/CloseEye";
import OpenEye from "../../../components/Common/icon/svg/OpenEye";
import { loginAdmin } from "../../../store/actions";

const schema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "invalid Email" }),
  password: z
    .string()
    .min(1, {
      message:
        "Password must include a lowercase letter, an uppercase letter, a number, and a special character or symbol",
    })
    .regex(/[a-z]/, { message: "Password must include a lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must include an uppercase letter" })
    .regex(/[0-9]/, { message: "Password must include a number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must include a special character or symbol",
    }),
});

const Login = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useState();
  const handlePass = () => {
    setPass(!pass);
  };
  const dispatch = useDispatch();
  const { loading } = useSelector((s) => s.login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitHandler = async (data) => {
    const callBack = (status) => {
      navigate("/dashboard");
    };
    dispatch(loginAdmin({ ...data, userType: "agency" }, callBack));
  };

  return (
    <>
      <div className="formInner position-relative px-lg-3">
        <div className="w-100 inner">
          <div className="top py-2">
            <h4 className="m-0 fw-sbold themeClr">Log In</h4>
          </div>

          <Form
            className={`${styles.form} pt-lg-4 pt-2`}
            onSubmit={handleSubmit(submitHandler)}
          >
            <Row className="justify-content-center">
              <Col lg="12" className="my-2">
                <label
                  htmlFor="Email ID / Phone number"
                  className="form-label m-0 pb-1 themeClr fw-sbold"
                >
                  Email
                </label>
                <input
                  type="tel"
                  className={`${styles.formControl} form-control`}
                  placeholder="example@gmail.com"
              
                  {...register("email")}
                />
                {errors?.email && (
                  <p className="text-danger m-0">{errors.email.message}</p>
                )}
              </Col>
              <Col lg="12" className="my-2">
                <label
                  htmlFor=""
                  className="form-label m-0 pb-1 themeClr fw-sbold"
                >
                  Password
                </label>
                <div className="position-relative iconWithText">
                  <input
                    type={pass ? "text" : "password"}
                    className={`${styles.formControl} form-control pe-5`}
                    placeholder="*************"
                    {...register("password")}
                  />

                  <Button
                    onClick={handlePass}
                    className="border-0 p-0 position-absolute icn"
                    variant="transparent"
                    style={{ right: 10 }}
                  >
                    {!pass ? <OpenEye /> : <CloseEye />}
                  </Button>
                </div>
                {errors?.password && (
                  <p className="text-danger m-0">{errors.password.message}</p>
                )}
              </Col>
              <Col lg="12" className="my-2">
                <div className="text-end">
                  <Link to="/forgot-password" className={`themeClr`}>
                    Forgot Password?
                  </Link>
                </div>
              </Col>
              <Col lg="12" className="my-2">
                <div className={`${styles.btnWrpper} pt-3 btnWrpper `}>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="d-flex align-items-center justify-content-center w-100 commonBtn"
                  >
                    {loading ? "Loading..." : "Login"}
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
