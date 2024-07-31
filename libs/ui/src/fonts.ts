import { Nunito, Gorditas } from "next/font/google";

export const titleFont = Gorditas({
  weight: "700",
  preload: true,
  display: "auto",
  subsets: ["latin"],
  variable: "--font-title",
});

export const subtitleFont = Nunito({
  weight: "700",
  preload: true,
  display: "swap",
  subsets: ["latin"],
  variable: "--font-subtitle",
});

export const bodyFont = Nunito({
  weight: ["400", "700"],
  preload: true,
  display: "swap",
  subsets: ["latin"],
  variable: "--font-body",
});
