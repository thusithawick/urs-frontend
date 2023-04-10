import React, { useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileAction } from "../../../modules/actions/userActions";

/**
 * Update Profile component
 * @returns JSX
 */
const UpdateProfile = () => {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken == null) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, accessToken]);

  const userData = useSelector((state) => state.userReducer);

  // form validations
  const formik = useFormik({
    initialValues: {
      id: userData?.user?.id,
      first_name: userData?.user?.first_name,
      last_name: userData?.user?.last_name,
      email: userData?.user?.email,
      avatar: "",
      mobile: userData?.user?.mobile || "",
      date_of_birth: userData?.user?.date_of_birth || "",
      gender: userData?.user?.gender || "male",
    },
    validationSchema: Yup.object().shape({
      id: Yup.string().required("Id is required"),
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      avatar: Yup.mixed(),
      mobile: Yup.string(),
      date_of_birth: Yup.date(),
      gender: Yup.string(),
    }),
    onSubmit: (values) => {
      dispatch(updateProfileAction(values));
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light hero-image">
      <div className="p-5 rounded bg-white">
        <h1 className="text-center mb-4 h4">Update Profile</h1>
        <Form onSubmit={formik.handleSubmit}>
          <Container>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label className="text-left">First Name *</Form.Label>
                  <Form.Control
                    name="first_name"
                    type="text"
                    placeholder="Enter First Name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.errors.first_name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.first_name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control
                    name="last_name"
                    type="text"
                    placeholder="Enter last name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.errors.last_name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.last_name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.errors.email}
                    disabled
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicAvatar">
                  <Form.Label className="text-left">Avatar *</Form.Label>
                  <Form.Control
                    name="avatar"
                    type="file"
                    onChange={(event) => {
                      formik.setFieldValue(
                        "avatar",
                        event.currentTarget.files[0]
                      );
                    }}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.errors.avatar}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.avatar}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMobile">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    name="mobile"
                    type="text"
                    placeholder="Enter Mobile Number"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.errors.mobile}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.mobile}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    name="date_of_birth"
                    type="date"
                    placeholder="Enter date of birth"
                    value={formik.values.date_of_birth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.errors.date_of_birth}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.date_of_birth}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    name="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.errors.gender}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.gender}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <div className="text-center mt-3">
            <Form.Control
              name="id"
              type="hidden"
              value={formik.values.id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.errors.id}
            ></Form.Control>
            <Button
              variant="primary"
              type="submit"
              disabled={userData.updatingProfile}
            >
              Update Profile
            </Button>
            <Link to="/view-profile" className="mx-2">
              Go back
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProfile;
