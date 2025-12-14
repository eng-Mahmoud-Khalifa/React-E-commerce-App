import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center bg-light">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <div>
            <p className="text-sm opacity-80">📧 info@react-e-commerce.com</p>
            <p className="text-sm opacity-80">📞 +1 (555) 123-4567</p>
            <p className="text-sm opacity-80">📍 Cairo, Egypt</p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 . All rights reserved.</p>
        </div>
          </div>
      </footer>
    </>
  );
};

export default Footer;
