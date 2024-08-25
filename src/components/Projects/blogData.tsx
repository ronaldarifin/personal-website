import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Class Projects",
    paragraph:
      "Some of my class projects about databases, internet protocol, and computer security.",
    image: "/images/projects/berkeley.png",
    // author: {
    //   name: "Samuyl Joshi",
    //   image: "/images/blog/author-01.png",
    //   designation: "Graphic Designer",
    // },
    tags: ["Teaching"],
    publishDate: "2025",
    blog_detail_endpoint: "blog/class_projects",
  },
  {
    id: 2,
    title: "HrHouz",
    paragraph:
      "As a backend engineer, I worked on HRHouz's vector searches for resumes.",
    image: "/images/projects/hrhouz.png",
    // author: {
    //   name: "Musharof Chy",
    //   image: "/images/blog/author-02.png",
    //   designation: "Content Writer",
    // },
    tags: ["Internship"],
    publishDate: "2025",
    blog_detail_endpoint: "blog/hrhouz",
  },
  {
    id: 3,
    title: "Sayurbox",
    paragraph:
      "As a frontend engineer, I created UIs for Sayurbox's WMS Team.",
    image: "/images/projects/sayurbox.png",
    // author: {
    //   name: "Lethium Deo",
    //   image: "/images/blog/author-03.png",
    //   designation: "Graphic Designer",
    // },
    tags: ["Internship"],
    publishDate: "2025",
    blog_detail_endpoint: "blog/sayurbox",
  },
  {
    id: 4,
    title: "Hackathons",
    paragraph:
      "I joined multiple hackathons at college learning to create projects and work as a team.",
    image: "/images/projects/mlh.png",
    // author: {
    //   name: "Lethium Deo",
    //   image: "/images/blog/author-03.png",
    //   designation: "Graphic Designer",
    // },
    tags: ["Berkeley"],
    publishDate: "2025",
    blog_detail_endpoint: "blog/hackathons",
  },
];
export default blogData;
