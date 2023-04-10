import React, { useEffect } from "react";
import {
  Button,
  Card,
  Figure
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

/**
 * View profile component
 * @returns JSX
 */
const ViewProfile = () => {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("access_token");
  const navigate = useNavigate();

  // Redirect to home if user not logged in
  useEffect(() => {
    if (accessToken == null) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, accessToken]);

  const userData = useSelector((state) => state.userReducer);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light hero-image">
      <Card className="col-4">
        <Card.Body>
          <Figure className="text-center w-100">
            <Figure.Image
              variant="top"
              rounded
              src={`http://localhost:8000/storage/avatars/${userData?.user?.avatar}`}
              className="profileImage"
            />
          </Figure>
          <Card.Title className="pb-2 text-capitalize">
            {userData?.user?.first_name} {userData?.user?.last_name}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Email: {userData?.user?.email}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Mobile: {userData?.user?.mobile}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Date of Birth: {userData?.user?.date_of_birth}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Gender: {userData?.user?.gender}
          </Card.Subtitle>

          <div className="text-center pt-2">
            <Link to="/update-profile">
              <Button variant="primary">Edit Profile</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewProfile;
