import { render, screen, cleanup } from "@testing-library/react";
import AutoHideToast from "../../components/organisms/AutoHideToast";

test("testing", () => {
  expect(true).toBe(true);
});

test("Should render AutoHideToast component", () => {
  render(<AutoHideToast visible={true} message="test" type="primary" />);
  const autoHideToast = screen.getAllByTestId("autohidetoast-1");
  expect(autoHideToast).toBeInTheDocument();
  expect(autoHideToast).toBeVisible();
});
