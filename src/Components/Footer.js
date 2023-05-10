import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-textbox via-first to-second mt-auto w-full bottom-0 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center text-white font-medium text-lg mb-4 lg:mb-0">
            <p>Please contact us for your Appraisal or Market Study needs:</p>
            <p>
              Michael L. Cooper, MAI:
              <span className="hover:font-bold">
                <a
                  href="mailto:mcooper@coopervaluationgroup.com"
                  className="text-white hover:text-green-400 transition-colors"
                >
                  {" "}
                  mcooper@coopervaluationgroup.com{" "}
                </a>
              </span>
            </p>
          </div>
          <div className="text-white text-center font-medium">
            <p>Cooper Valuation Group</p>
            <p>427 Fuller Road, Hinsdale, IL 60521</p>
            <p>Phone: 773-406-5140</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
