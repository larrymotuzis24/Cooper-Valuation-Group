import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-blue-700 mt-auto w-full bottom-0 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center">
          <p className="text-center text-white font-medium text-lg mb-2">
            Please contact us for your Appraisal or Market Study needs:
            <br />
            Michael L. Cooper, MAI:
            <span className="hover:font-bold">
              <a
                href="mailto:mcooper@coopervaluationgroup.com"
                className="text-white hover:text-blue-400 transition-colors"
              >
                {" "}
                mcooper@coopervaluationgroup.com{" "}
              </a>
            </span>
          </p>
          <p className="text-white text-center font-medium">
            Cooper Valuation Group 427 Fuller Road, Hinsdale, IL 60521
            <br />
            Phone: 773-406-5140
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
