import { ComponentProps, ReactNode } from "react";

type HeaderProps = { children: ReactNode } & ComponentProps<"div">;

interface ProjectT {
  id: number;
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  link: string;
  gallery: string[];
}

interface AwardT {
  id: number;
  title: string;
  shortDescription: string;
  year: string;
  description: string;
  imageUrl: string;
}
