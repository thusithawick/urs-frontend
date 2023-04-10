import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction, profileAction } from "../../modules/actions/userActions";
import { useEffect } from "react";
import { AutoHideToast } from "./AutoHideToast";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    if (accessToken) {
      dispatch(profileAction(accessToken));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const userData = useSelector((state) => state.userReducer);

  /**
   * Get name of the user
   * @returns string
   */
  const getUserName = () => {
    if (accessToken) {
      return `Hello, ${userData.user.first_name}`;
    }
    return "Hello, Guest";
  };

  const logout = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link className="navbar-brand" to="/">
            ABC | URS
          </Link>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {accessToken ? (
                <NavDropdown
                  className="text-capitalize"
                  title={getUserName()}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item onClick={() => navigate("/view-profile")}>
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/update-profile")}>
                    Update Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown title="Hello, Guest" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => navigate("/login")}>
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/register")}>
                    Register
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {userData?.alertSuccess?.message && (
        <>
          <AutoHideToast
            visible={true}
            message={userData?.alertSuccess?.message}
            type="success"
          />
        </>
      )}
      {userData?.alertDanger?.message && (
        <>
          <AutoHideToast
            visible={true}
            message={userData?.alertDanger?.message}
            type="danger"
          />
        </>
      )}
    </>
  );
};

export default Header;
