import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * Auto hidable Toast
 * @param {*} props 
 * @returns JSX
 */
export const AutoHideToast = (props) => {
  const [show, setShow] = useState(props.visible);
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast
        bg={props.type}
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
      >
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

AutoHideToast.propTypes = {
  visible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(
    ["primary", "secondary", "success", "danger", "info", "dark", "waring"]
      .isRequired
  ),
};
