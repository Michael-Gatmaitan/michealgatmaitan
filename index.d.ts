import { ComponentProps, ReactNode } from "react";

type HeaderProps = { children: ReactNode } & ComponentProps<"div">;

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  link: string;
}
