import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Circle from "../anasayfa/circle";
import Detay from "../story/story";
import '@testing-library/jest-dom'
it("story circle in page", async () => {
  render(
    <div>
      <MemoryRouter initialEntries={["/"]}>
        <Circle />
      </MemoryRouter>
    </div>
  );
  const btn = screen.getByRole("link", { name: "" });
  expect(btn).toBeInTheDocument();
});
it("story details in page", async () => {
  render(
    <div>
      <MemoryRouter initialEntries={["/"]}>
        <Detay />
      </MemoryRouter>
    </div>
  );
  const btn = screen.getByTestId('detay');
  expect(btn).toBeInTheDocument();
});


