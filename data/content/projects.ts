import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Trading Bot",
    desc: "A crypto trading Bot on the Alpaca trading platform and applied algorithms to predict market trends.",
    img: "/static/projects/trading-bot.png",
    link: "https://paper-trading-bot.vercel.app/",
    github: "",
    tags: ["Python", "NextJS", "Plotly", "Amazon EC2", "Vercel"],
  },
  {
    id: 1,
    title: "C-Store",
    desc: "A real-world eCommerce website to distribute clothing and accessories.",
    img: "/static/projects/c-store.png",
    link: "https://c-store.world",
    github: "",
    tags: ["Angular", "TypeScript", "Bootstrap", "Redis", "Docker", "PostgreSQL", "Digital Ocean"],
  },
  {
    id: 2,
    title: "Instant Order",
    desc: "A web application to reserve online orders at dine-in places to help restaurant or coffee shop owners to cut down counter workers’ costs and save diners’ waiting time.",
    img: "/static/projects/instant-order.png",
    link: "",
    github: "",
    tags: ["React", "Express.js", "NodeJS", "MongoDB"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects