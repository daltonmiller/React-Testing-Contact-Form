import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  const { getByLabelText } = render(<App />);

  getByLabelText(/first name*/i);
  getByLabelText(/last name*/i)


});
