import React from "react";

const Footer = () => {
  return (
    <div className="bg-black p-8 ">
      <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
        <div className="w-72">
          <h3 className="font-bold text-3xl text-white ">Career Point</h3>
          <p className="text-white mb-8 ">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <img src="/assets/Icons/groupIcon.png" alt="" />
        </div>
        <div>
          <h3 className="text-white text-xl mb-4">Product</h3>
          <a className="text-white block " href="">
            Prototype
          </a>
          <a className="text-white block " href="">
            Plans & Pricing
          </a>
          <a className="text-white block " href="">
            Customers
          </a>
          <a className="text-white block " href="">
            Integrations
          </a>
        </div>
        <div>
          <h3 className="text-white text-xl mb-4">Company</h3>
          <a className="text-white block " href="">
            About Us
          </a>
          <a className="text-white block " href="">
            Work
          </a>
          <a className="text-white block " href="">
            Latest News
          </a>
          <a className="text-white block " href="">
            Careers
          </a>
        </div>
        <div>
          <h3 className="text-white text-xl mb-4">Support</h3>
          <a className="text-white block " href="">
            Help Desk
          </a>
          <a className="text-white block " href="">
            Sales
          </a>
          <a className="text-white block " href="">
            Becomes a Partner
          </a>
          <a className="text-white block " href="">
            Developers
          </a>
        </div>
        <div>
          <h3 className="text-white text-xl mb-4">Contact</h3>
          <p className="text-white">524 Broadway , NYC</p>
          <p className="text-white">+1 777 - 978 - 5570</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
