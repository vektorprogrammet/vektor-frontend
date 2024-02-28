import React from "react";
import { useLocation, Link } from "react-router-dom";
import { capitalizeFirstLetter } from "lib/utils";

interface BreadcrumbsProps {
  className?: string;
}

const Breadcrumbs = ({ className }: BreadcrumbsProps): JSX.Element => {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter((path) => path !== "");
  return (
    <div className={`flex gap-2 breadcrumbs ${className}`}>
      <ul>
        <li>
          <Link
            to="/"
            className="text-vektor-blue hover:text-vektor-blue-hover"
          >
            Forsiden
          </Link>
        </li>
        {paths.map((path, index) => (
          <li key={crypto.randomUUID()}>
            {index === paths.length - 1 ? (
              <span>{capitalizeFirstLetter(path)}</span>
            ) : (
              <Link
                to={path}
                className="text-vektor-blue hover:text-vektor-blue-hover"
              >
                {capitalizeFirstLetter(path)}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
