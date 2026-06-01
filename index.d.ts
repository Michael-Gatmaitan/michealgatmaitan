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

export interface Project {
  id: string;
  userId: string;
  title: string;
  description: string;
  thumbnail: string | undefined;
  url: string;
  github: string;
  dateRange: string;
  sortOrder: string;
}

export interface Skill {
  id: string;
  userId: string;
  title: string;
  tags: string[];
  sortOrder: string;
}

export interface Award {
  id: string;
  userId: string;
  title: string;
  thumbnail: string | undefined;
  shortDescription: string;
  longDescription: string;
  year: string;
  tags: string[];
  sortOrder: string;
}
