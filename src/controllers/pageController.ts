import type { Request, Response } from "express";

const renderPage = (
  res: Response,
  title: string,
  background: string
) => {
  res.render("pages/page", {
    banner: {
      title,
      background,
    },
  });
};

export const home = (_: Request, res: Response) =>
  renderPage(res, "Todos os animais", "allanimals.jpg");

export const dogs = (_: Request, res: Response) =>
  renderPage(res, "Cachorros", "banner_dog.jpg");

export const cats = (_: Request, res: Response) =>
  renderPage(res, "Gatos", "banner_cat.jpg");

export const fishes = (_: Request, res: Response) =>
  renderPage(res, "Peixes", "banner_fish.jpg");