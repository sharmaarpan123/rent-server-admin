import { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { successToast, errorToast } from "../../../utilities/utilities";

// Static profile data
const staticProfileData = {
  firstName: "John",
  lastName: "Doe", 
  email: "john.doe@example.com",
  phone: "+1234567890",
  address: "123 Main Street, City, State 12345",
  businessName: "Doe's Shop Management",
  businessType: "Retail"
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: profileData,
  });

  useEffect(() => {
    // Load profile data
    setProfileData(staticProfileData);
    reset(staticProfileData);
  }, [reset]);

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
                        <Form.Label>First Name *</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("firstName")}
                          isInvalid={!!errors.firstName}
                        />
                        {errors.firstName && (
                          <Form.Control.Feedback type="invalid">
                            {errors.firstName.message}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name *</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("lastName")}
                          isInvalid={!!errors.lastName}
                        />
                        {errors.lastName && (
                          <Form.Control.Feedback type="invalid">
                            {errors.lastName.message}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          {...register("email")}
                          isInvalid={!!errors.email}
                        />
                        {errors.email && (
                          <Form.Control.Feedback type="invalid">
                            {errors.email.message}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone *</Form.Label>
                        <Form.Control
                          type="tel"
                          {...register("phone")}
                          isInvalid={!!errors.phone}
                        />
                        {errors.phone && (
                          <Form.Control.Feedback type="invalid">
                            {errors.phone.message}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Address *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      {...register("address")}
                      isInvalid={!!errors.address}
                    />
                    {errors.address && (
                      <Form.Control.Feedback type="invalid">
                        {errors.address.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Business Name *</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("businessName")}
                          isInvalid={!!errors.businessName}
                        />
                        {errors.businessName && (
                          <Form.Control.Feedback type="invalid">
                            {errors.businessName.message}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Business Type *</Form.Label>
                        <Form.Select
                          {...register("businessType")}
                          isInvalid={!!errors.businessType}
                        >
                          <option value="">Select Business Type</option>
                          <option value="Retail">Retail</option>
                          <option value="Restaurant">Restaurant</option>
                          <option value="Office">Office</option>
                          <option value="Warehouse">Warehouse</option>
                          <option value="Other">Other</option>
                        </Form.Select>
                        {errors.businessType && (
                          <Form.Control.Feedback type="invalid">
                            {errors.businessType.message}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="d-flex justify-content-end gap-2">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => reset(profileData)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={loader}
                    >
                      {loader ? "Updating..." : "Update Profile"}
                    </Button>
                  </div>
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
