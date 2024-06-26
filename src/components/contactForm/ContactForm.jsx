import useScreenSize from "../useScreenSize";
import React from "react";
import MainForm from "./MainForm";

const ContactForm = () => {
  const { isMobile, isTablet, isDesktop} = useScreenSize();

  return (
    <div
      className={`w-full p-4 md:p-20 bg-light dark:bg-black ${
        isMobile || isTablet ? "flex flex-col" : "flex justify-between"
      }`}
    >
      <div className="flex flex-col gap-6 dark:text-light">
        <h2 className="text-4xl font-semibold dark:text-light">Get in touch</h2>
        <p className="text-grey">
          Hi there, We are available 24/7 on social media, e-mail {isDesktop && <br />} or phone. Drop
          a message so we can talk more.
        </p>
        <div>
          <p className="text-[1rem] font-semibold">Email</p>
          <p className="text-grey text-sm">spacetouchtravel@gmail.com</p>
        </div>
        <div>
          <p className="text-[1rem] font-semibold">Visit Us</p>
          <p className="text-grey text-sm">
            Shop 1 Rufus Laniyan Estate, Idera Bus Stop, <br /> Ikorodu road,
            Lagos, Nigeria.
          </p>
        </div>
        <div>
          <p className="text-[1rem] font-semibold">Contact</p>
          <p className="text-grey text-sm">+2347060531170</p>
        </div>
      </div>
      <MainForm />
    </div>
  );
};

export default ContactForm;


