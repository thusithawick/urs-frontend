import { useFormik } from "formik";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { loginAction } from "../../../modules/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const accessToken = localStorage.getItem("access_token");
  const navigate = useNavigate();

  // Redirect to view profile after user logged in
  useEffect(() => {
    if (accessToken) {
      navigate("/view-profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  // Form validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(loginAction(values));
    },
  });

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light hero-image">
        <div className="p-5 rounded bg-white col-4">
          <h1 className="text-center mb-4 h4">Login</h1>
          <Form className="register-form" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-left">Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Group>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                className="me-3"
                disabled={userData.loging}
              >
                Login
              </Button>
              <Link to="/register">New User? Register</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
