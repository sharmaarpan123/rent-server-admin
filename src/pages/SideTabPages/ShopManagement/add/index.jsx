import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

//img
import { useNavigate } from "react-router-dom";

// css

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import AsyncSelect from "react-select/async";
import { z } from "zod";
import ReactSelectNoOptionMessage from "../../../../components/Common/ReactSelectNoOptionMessage";
import Toggle from "../../../../components/Common/Toggle";
import {
  SHOP_ADD,
  SHOP_EDIT,
  SHOP_VIEW,
  USER_LIST,
} from "../../../../services/ApiCalls";
import {
  catchAsync,
  checkResponse,
  errorToast,
} from "../../../../utilities/utilities";
const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  status: z.string().min(1, { message: "Name is required" }),
});

const AddEditShops = () => {
  const navigate = useNavigate();
  // const [image, setImage] = useState("");
  const [detailsCategory, setDealCategoryList] = useState();
  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const [defaultUsers, setDefaultUsers] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    values: {
      name: detailsCategory?.name || "",
      status: detailsCategory?.status || "non-rented",
    },
    resolver: zodResolver(schema),
  });

  const submitHandler = catchAsync(async (data) => {
    let res;
    setLoader(true);

    if (data?.status === "rented" && !selectedUser?.value) {
      return errorToast({ message: "Please select the user" });
    }

    console.log(data, selectedUser, "Selecteduser");

    if (id) {
      res = await SHOP_EDIT({
        ...data,
        id,
        ...(data?.status === "rented" && { user: selectedUser?.value }),
      });
    } else {
      res = await SHOP_ADD({
        ...data,
        ...(data?.status === "rented" && { user: selectedUser?.value }),
      });
    }
    checkResponse({
      res,
      showSuccess: true,
      navigate: navigate,
      navigateUrl: "/manage-shops",
      setLoader,
    });
  });

  const getData = catchAsync(async () => {
    const res = await SHOP_VIEW({ id });
    const success = checkResponse({ res, setData: setDealCategoryList });

    if (success) {
      const user = res?.data?.data?.rentUser;
      if (user?._id) {
        setSelectedUser((p) => ({ label: user?.userName, value: user?._id }));
      }
    }
  });

  useEffect(() => {
    if (id) getData();
  }, [id]);

  const loadShopsOptions = async (inputValue, callback) => {
    const response = await USER_LIST({
      search: inputValue?.trim(),
    });
    if (checkResponse({ res: response })) {
      const options = response?.data?.data?.userList?.map((item) => ({
        value: item._id,
        label: item?.userName,
      }));
      callback(options);
      if (!!!options.length) {
        setSelectedUser([]);
      }
    } else {
      callback([]);
      setSelectedUser([]);
    }
  };

  const getDefaultUsers = async () => {
    const response = await USER_LIST({
      limit: 50,
      page: 1,
    });
    if (checkResponse({ res: response })) {
      const options = response?.data?.data?.userList?.map((item) => ({
        value: item._id,
        label: item?.userName,
      }));
      setDefaultUsers((p) => options);
    }
  };

  useEffect(() => {
    getDefaultUsers();
  }, [id]);
  return (
    <>
      <section className="subadmin position-relative py-3">
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-10">
                <Link
                  to="/category"
                  className="border d-flex align-items-center p-2 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 10 16"
                    fill="none"
                  >
                    <path
                      d="M8.64707 0.473344C8.55514 0.381188 8.44594 0.308072 8.32572 0.258184C8.20549 0.208296 8.07661 0.182617 7.94644 0.182617C7.81628 0.182617 7.68739 0.208296 7.56717 0.258184C7.44694 0.308072 7.33774 0.381188 7.24582 0.473344L0.667065 7.05209C0.593675 7.12533 0.53545 7.21233 0.495723 7.3081C0.455996 7.40387 0.435547 7.50654 0.435547 7.61022C0.435547 7.7139 0.455996 7.81657 0.495723 7.91234C0.53545 8.00811 0.593675 8.0951 0.667065 8.16834L7.24582 14.7471C7.63373 15.135 8.25915 15.135 8.64707 14.7471C9.03498 14.3592 9.03498 13.7338 8.64707 13.3458L2.9154 7.60626L8.65498 1.86668C9.03498 1.48668 9.03498 0.853344 8.64707 0.473344Z"
                      fill="#1E232C"
                      stroke="#1E232C"
                      stroke-width="0.2"
                    />
                  </svg>
                </Link>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div
                className="formWrpper px-lg-5 p-md-4 p-3 rounded"
                style={{ background: "#EEEEEE" }}
              >
                <Form onSubmit={handleSubmit(submitHandler)}>
                  <Row className="d-flex justify-content-center">
                    <Col lg="8" md="6" className="my-2">
                      <div className="py-2">
                        <label
                          htmlFor=""
                          className="form-label fw-sbold text-muted ps-0 m-0"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Shop Name"
                          className="form-control"
                          {...register("name")}
                        />
                        {errors?.name && (
                          <p className="text-danger m-0">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                    </Col>
                    <Col lg="8" md="6" className="my-2">
                      <div className="py-2">
                        <label
                          htmlFor=""
                          className="form-label fw-sbold text-muted ps-0 m-0"
                        >
                          Is Rented ?
                        </label>
                        <Controller
                          control={control}
                          name="status"
                          render={({ field }) => {
                            return (
                              <Toggle
                                isChecked={watch("status") === "rented"}
                                onChange={(e) => {
                                  field.onChange(
                                    e?.target?.checked ? "rented" : "non-rented"
                                  );
                                }}
                              />
                            );
                          }}
                        />
                        {errors?.isExchangeDeal && (
                          <p className="text-danger m-0">
                            {errors.isExchangeDeal.message}
                          </p>
                        )}
                      </div>
                    </Col>

                    {watch("status") === "rented" && (
                      <Col lg="8" md="6" className="my-2">
                        <div className="py-2">
                          <label
                            htmlFor=""
                            className="form-label fw-sbold text-muted ps-0 m-0"
                          >
                            Select User
                          </label>
                          <AsyncSelect
                            components={{
                              DropdownIndicator: () => null,
                              IndicatorSeparator: () => null,
                              NoOptionsMessage: (props) => (
                                <ReactSelectNoOptionMessage
                                  message="Search Users"
                                  {...props}
                                />
                              ),
                            }}
                            defaultOptions={defaultUsers}
                            loadOptions={loadShopsOptions}
                            value={selectedUser}
                            isClearable
                            placeholder="Search User"
                            onChange={(value) => {
                              setSelectedUser(value);
                            }}
                          />
                        </div>
                      </Col>
                    )}

                    <Col lg="12" className="my-2">
                      <div className="d-flex align-items-center justify-content-center gap-10">
                        <Button
                          className="d-flex align-items-center justify-content-center commonBtn GreyBtn"
                          onClick={() => navigate(-1)}
                        >
                          Cancel
                        </Button>
                        <Button
                          className="d-flex align-items-center justify-content-center commonBtn"
                          type="submit"
                          disabled={loader}
                        >
                          {loader ? "loading..." : "Submit"}
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AddEditShops;
