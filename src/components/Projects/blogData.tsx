import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "project 1",
    paragraph:
      "......",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Teaching"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "project 2",
    paragraph:
      ".....",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Personal Health"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "project 3",
    paragraph:
      ".....",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Productivity", "Technical"],
    publishDate: "2025",
  },
];
export default blogData;
