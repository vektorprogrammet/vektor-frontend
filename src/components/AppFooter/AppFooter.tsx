import React from "react";
import FooterSponsors from "./FooterSponsors";

const AppFooter = (): JSX.Element => {
  return (
    <footer className="Footer">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-gray-600">
          Footer
        </h1>
        <p>Sponsorer og samarbeidspartnere:</p>
        <FooterSponsors />
      </div>
    </footer>
  );
};

export default AppFooter;
