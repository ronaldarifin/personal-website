import Link from "next/link";

interface ExperienceProps {
  role: string;
  company: string;
  companyUrl: string;
  description: string;
  linkTo: string;
}

const Experience = ({ role, company, companyUrl, description, linkTo }: ExperienceProps) => {
  return (
    <div>
      <p>
        {linkTo ? (
          <Link href={linkTo} className="text-blue-400 hover:text-blue-300 hover:underline">
            {role}
          </Link>
        ) : (
          <span className="text-blue-400">{role}</span>
        )}{" "}
        @{" "}
        <a
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 hover:underline"
        >
          {company}
        </a>
      </p>
      <p className="text-gray-500 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Experience; 