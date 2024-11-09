"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-dark">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Ronald Arifin
          </div>
          
          <div className="flex gap-6">
            <Link
              href="mailto:your-email@example.com"
              className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              Email
            </Link>
            <Link
              href="https://github.com/ronaldarifin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/ronaldarifin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              LinkedIn
            </Link>
            <Link
              href="https://leetcode.com/u/ronaldarifin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              LeetCode
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
