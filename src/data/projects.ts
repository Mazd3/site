import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    title: "ShikiFlow",
    image: "/avatar.jpg",
    github_link: "https://github.com/Mazd3/ShikiFlow",
    description:
      "Project for learn Nuxt and Vue. It is works with Shikimori API. I think it have a good design. I developed this project in my free time.",
    stack: "Nuxt, Vue, TypeScript, GraphQL",
  },
  {
    title: "Nest Trello",
    image: "/avatar.jpg",
    github_link: "https://github.com/Mazd3/nest-trello",
    description: "Simple kanban api with nest and prisma.",
    stack: "Node, Nest, Prisma, PostgreSQL",
  },
  {
    title: "Microservices",
    image: "/avatar.jpg",
    github_link: "https://github.com/Mazd3/nest-express-test",
    description: "Microservices with NestJS and Express.",
    stack: "Node, Nest, Express, Prisma",
  },
];
