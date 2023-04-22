import IndexPage from "../pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Pagina Principal", () => {
    it("renderiza os textos e imagens", () => {
      render(<IndexPage />);
      // check if all components are rendered
      expect(screen.getByTestId("fotos")).toBeInTheDocument();
      expect(screen.getByTestId("botao-festas")).toBeInTheDocument();
    });
  });