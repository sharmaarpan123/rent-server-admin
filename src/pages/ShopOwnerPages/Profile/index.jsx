import { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { successToast, errorToast } from "../../../utilities/utilities";
import { useSelector } from "react-redux";

// Static profile data
const staticProfileData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1234567890",
  address: "123 Main Street, City, State 12345",
  businessName: "Doe's Shop Management",
  businessType: "Retail",
};

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(1, "Address is required"),
  businessName: z.string().min(1, "Business name is required"),
  businessType: z.string().min(1, "Business type is required"),
});

const ShopOwnerProfile = () => {
  const { t } = useTranslation();
  const [loader, setLoader] = useState(false);
  const [profileData, setProfileData] = useState(staticProfileData);
  const user = useSelector((state) => state?.login?.admin);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: profileData,
    values: {
      userName: user?.userName || "",
      firstName: user?.firstName || "",
      email: user?.email || "",
    },
  });

  console.log(user, "user");

  const onSubmit = async (data) => {
    setLoader(true);

    // Simulate API call
    setTimeout(() => {
      setProfileData(data);
      setLoader(false);
      successToast({ message: "Profile updated successfully!" });
    }, 1000);
  };

  return (
    <section className="shop-owner-profile py-4">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card>
              <Card.Header>
                <h4 className="mb-0">Shop Owner Profile</h4>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>User Name *</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("userName")}
                          isInvalid={!!errors.lastName}
                          readOnly
                        />
                        {errors.lastName && (
                          <Form.Control.Feedback type="invalid">
                            {errors.lastName.message}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          {...register("email")}
                          isInvalid={!!errors.email}
                          readOnly
                        />
                        {errors.email && (
                          <Form.Control.Feedback type="invalid">
                            {errors.email.message}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShopOwnerProfile;
