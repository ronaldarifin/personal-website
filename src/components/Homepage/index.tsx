import React from "react";
import Link from "next/link";
import Experience from "../Experience";

const Homepage = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "HrHouz",
      companyUrl: "https://www.hrhouz.com/",
      description:
        "Created a service to search for resumes using vector search",
      linkTo: "/",
    },
    {
      role: "Software Engineer",
      company: "Sayurbox",
      companyUrl: "https://www.sayurbox.com/",
      description:
        "Integrated APIs and built UI to help track warehouse inventory",
      linkTo: "/",
    },
  ];

  const projects = [
    {
      role: "StudySuite",
      company: "Stanford",
      companyUrl:
        "https://devpost.com/ronaldarifin?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
      description: "Created a platform to help students study for exams",
      linkTo: "/",
    },
    {
      role: "Recruiting Automator",
      company: "Personal",
      companyUrl: "https://github.com/ronaldarifin",
      description:
        "Cover letter, email blast, and resume builder built with LLMs",
      linkTo: "/sayurbox",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-dark">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col space-y-6">
          <div className="text-left text-lg text-gray-500 dark:text-gray-300">
            Hi! I'm Ronald.
          </div>
          <div className="flex flex-col space-y-5">
            <div className="text-lg text-gray-500 dark:text-gray-300">
              <div>🏫 Computer Science, B.S. UC Berkeley</div>
              <div>💻 Loves databases and security</div>
              <div>🧠 Skilled in Backend development and DevOps</div>
            </div>
            <div className="flex max-w-2xl flex-col space-y-12 text-lg text-gray-500 dark:text-gray-300">
              <div>
                Experiences
                <span className="mt-1 block text-gray-400 dark:text-gray-500">
                  ----
                </span>
                <div className="flex flex-col space-y-2">
                  {experiences.map((exp, index) => (
                    <Experience key={index} {...exp} />
                  ))}
                </div>
              </div>
              <div>
                Projects
                <span className="mt-1 block text-gray-400 dark:text-gray-500">
                  ----
                </span>
                <div className="flex flex-col space-y-2">
                  {projects.map((project, index) => (
                    <Experience key={index} {...project} />
                  ))}
                </div>
              </div>
              <div>
                What's going on?
                <span className="mt-1 block text-gray-400 dark:text-gray-500">
                  ----
                </span>
                <div className="flex flex-col space-y-4">
                    <div>
                    I'm currently working on my recruiting automator that tries to
                    make a cover letter in pdf using latex. I'm currently figuring
                    out how to make the results more human-like.
                    </div>
                    <div>
                    I'm also currently reading DDIA summary from{" "}
                    <a href="https://github.com/keyvanakbary/learning-notes/blob/master/books/designing-data-intensive-applications.md" className="text-blue-400 hover:text-blue-300 hover:underline">
                        keyvanakbary
                    </a>
                    . So far it's been interesting! Here is a post to what I've
                    recently learned. <Link href="/ddia" className="text-blue-400 hover:text-blue-300 hover:underline">DDIA</Link>
                    </div>
                    <div>
                    I'm also looking for full-time opportunities! If you know
                    anyone or have an opportunity, feel free to say hi at{" "}
                    <a href="mailto:ronaldarifin@berkeley.edu" className="text-blue-400 hover:text-blue-300 hover:underline">
                        ronaldarifin@berkeley.edu
                    </a>
                    </div>
                </div>
              </div>
              <div>
                About Me!
                <span className="mt-1 block text-gray-400 dark:text-gray-500">
                  ----
                </span>
                <div className="flex flex-col space-y-4">
                    <div>
                    I believe in writing useful software that helps our lives be easier. Isn't this is why we code? As a person, I'm all about productivity. I try and explore the latest AI tools: Codeium, Cursor, Copilot, the best terminal: tmux or warp, the best workflow utility: Raycast, Alfred, Finder?
                    I'm learning VIM...
                    </div>
                    <div>
                    Okay, to the other side of me!
                    </div>
                    <div>
                    In my free time, I enjoy pushing my body to the limit. I plan to do an Ironman on my 24th birthday. ;D
                    I also enjoy watching comedy, but so far my favorite is "Gabriel Iglesias". 
                    </div>
                    <div>
                    Thanks for reading until here! I appreciate your time. 😘
                    </div>
                </div>
              </div>
              <div>
                Connect with me!
                <span className="mt-1 block text-gray-400 dark:text-gray-500">
                  ----
                </span>
                <div className="flex flex-row space-x-4">
                  <a 
                    href="https://github.com/ronaldarifin" 
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ronaldarifin/" 
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://leetcode.com/ronaldarifin_/" 
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.981 2.312 1.494 3.81 1.494 1.497 0 2.827-.513 3.809-1.494l2.697-2.607c.515-.515.498-1.366-.037-1.901-.534-.535-1.388-.552-1.902-.038z"/>
                    </svg>
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
