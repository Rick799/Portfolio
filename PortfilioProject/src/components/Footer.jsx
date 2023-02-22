import React from "react";

const Footer = () => {
  let date = new Date();
  let copyrightDate = date.getFullYear();
  return (
    <div className="bg-black py-6 border-t border-slate-900 tracking-widest ">
      <div className="text-center text-white flex justify-around">
              <h2>Copyright &copy; {copyrightDate}</h2>
              <h2>Rajarshi Sarkar</h2>
              <h2>All Rights Reserved</h2>
      </div>
    </div>
  );
};

export default Footer;