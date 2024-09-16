import { Facebook, Twitter } from "lucide-react";

const FooterComponent = () => {
  return (
    <div
      className="
        flex flex-col md:flex-row w-full   
        md:justify-between md:gap-5
      bg-gray-100
        px-20 py-16 lg:px-32 xl:px-56
     "
    >
      <div className="flex items-center justify-center">
        <img src="/images/logo.svg" className="h-16 w-16 mb-4 " />
      </div>

      <div className="flex flex-col">
        <a href="#" className="FooterLink">
          FAQs
        </a>
        <a href="#" className="FooterLink">
          Contact Us
        </a>
      </div>

      <div className="flex flex-col justify-center">
        <a href="#" className="FooterLink">
          Privacy Policy
        </a>
        <a href="#" className="FooterLink">
          Press Kit
        </a>
      </div>

      <div className="flex flex-col">
        <a href="#" className="FooterLink">
          Install Guide
        </a>
      </div>

      <div className="flex flex-row gap-6 items-center justify-center mt-4 md:items-start">
        <a href="#" className="FooterLink">
          <Facebook className="w-6 h-6" />
        </a>
        <a href="#" className="FooterLink">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="#" className="FooterLink">
          <Facebook className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default FooterComponent;
