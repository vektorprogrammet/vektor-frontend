import React from "react";
import { Link, useLocation } from "react-router-dom";
function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const Breadcrumbs = (): JSX.Element => {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter((path) => path !== "");
  return (
    <div className="flex gap-2 breadcrumbs">
      <ul>
        <li>
          <Link
            to="/"
            className="text-vektor-blue hover:text-vektor-blue-hover"
          >
            Forsiden
          </Link>
        </li>
        {paths.map((path, index) => {
          if (index === paths.length - 1) {
            return (
              <li>
                <span>{capitalizeFirstLetter(path)}</span>
              </li>
            );
          }
          return (
            <li>
              <Link
                to={path}
                key={index}
                className="text-vektor-blue hover:text-vektor-blue-hover"
              >
                {capitalizeFirstLetter(path)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const NavHeader = (): JSX.Element => {
  return (
    <div className="flex gap-2">
      <Breadcrumbs />
    </div>
  );
};

export default NavHeader;
