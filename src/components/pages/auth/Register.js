import { useFormik } from "formik";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { registerAction } from "../../../modules/actions/userActions";
import { AutoHideToast } from "../../organisms/AutoHideToast";

const Register = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  // Form validation
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      avatar: null,
      password: "",
      password_confirm: "",
    },
    validationSchema: Yup.object().shape({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      avatar: Yup.mixed().required("Avatar is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
      password_confirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: (values) => {
      dispatch(registerAction(values));
    },
  });

  return (
    <div>
      {userData?.alertSuccess?.message ? (
        <>
          <AutoHideToast
            visible={true}
            message={userData?.alertSuccess?.message}
            type="success"
          />
          <div className="d-flex justify-content-center align-items-center vh-100 bg-light hero-image">
            <div className="p-5 rounded bg-white">
              <div className="container-fluid p-5 text-center">
                <div className="container p-5">
                  <h1 className="text-success">Congratulations</h1>
                  <p>Your account has been created successfully</p>
                  <Link to="/login">
                    <Button className="primary">Go to Login</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light hero-image">
          <div className="p-5 rounded bg-white">
            <h1 className="text-center mb-4 h4">Register</h1>
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
                        isInvalid={
                          formik.touched.first_name && formik.errors.first_name
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.first_name}
                      </Form.Control.Feedback>
                    </Form.Group>
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
                        isInvalid={
                          formik.touched.avatar && formik.errors.avatar
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.avatar}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password *</Form.Label>
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="Your password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched.password && formik.errors.password
                        }
                      />
                    </Form.Group>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.password}
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                      <Form.Label className="text-left">Last Name *</Form.Label>
                      <Form.Control
                        name="last_name"
                        type="text"
                        placeholder="Enter Last Name"
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched.last_name && formik.errors.last_name
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.last_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-left">
                        Email address *
                      </Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.email && formik.errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicConfirmPassword"
                    >
                      <Form.Label>Password Confirm *</Form.Label>
                      <Form.Control
                        name="password_confirm"
                        type="password"
                        placeholder="Confirm Password"
                        value={formik.values.password_confirm}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched.password_confirm &&
                          formik.errors.password_confirm
                        }
                      />
                    </Form.Group>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.password_confirm}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <Row>
                  {userData?.alertDanger?.message && (
                    <AutoHideToast
                      visible={true}
                      message={userData?.alertDanger?.message}
                      type="danger"
                    />
                  )}
                </Row>
              </Container>

              <div className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  className="me-3"
                  disabled={userData.registering}
                >
                  Register
                </Button>
                <Link to="/login">Have an Account? Login</Link>
              </div>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
