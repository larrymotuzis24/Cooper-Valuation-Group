import React from "react";

const Footer = () => {
    return (
        <footer className="bg-footerBG mt-auto w-full absolute bottom-0">
             <div className="">
                 <div className="flex flex-col justify-center py-4">
                <p className="text-center text-footerTxt"> Please contact us for your Appraisal or Market Study needs: Michael L. Cooper, MAI:<span className="hover:font-bold"><a href='mailto:mcooper@coopervaluationgroup.com'> mcooper@coopervaluationgroup.com </a> </span></p>
                <p className="text-footerTxt text-center"> Cooper Valuation Group 427 Fuller Road, Hinsdale, IL 60521 Phone: 773-406-5140 </p>
    </div>
  </div>
</footer>
    )
};

export default Footer;