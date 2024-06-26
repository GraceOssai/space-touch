import React from "react";
import Btn from "../btn/Btn";
import useScreenSize from "../useScreenSize"; 

const WhyChooseUs = () => {
  const { isMobile, isTablet, isDesktop } = useScreenSize(); 

  return (
    <div
      className={`flex ${
        isMobile || isTablet
          ? "flex-col items-center"
          : "justify-between items-start"
      } w-full p-8 md:p-20 dark:bg-[#111]`}
    >
      <div
        className={`font-semibold ${
          isMobile || isTablet ? "text-center mb-8" : ""
        }`}
      >
        <h3 className="text-red text-sm">WHY CHOOSE US</h3>
        <h2
          className={`dark:text-light ${
            isMobile ? "text-2xl" : isTablet ? "text-3xl" : "text-4xl"
          }`}
        >
          Travel Is The Only Thing You {isDesktop && <br />} Buy, Makes You
          Richer.
        </h2>
      </div>
      <div
        className={`flex flex-col gap-8 ${
          isMobile || isTablet ? "text-center" : ""
        }`}
      >
        <p className="text-grey">
          Our Services includes but not limited to flight ticket (local and
          {isDesktop ? <br /> : " "}international), Hotel Resevations,
          Educational tours/excursion, Visa
          {isDesktop ? <br /> : " "}consultancy, Corporate Travels/Tours,
          Honeymoon/Vacation, Study {isDesktop ? <br /> : " "}
          abroad assistance etc.
        </p>
        <p className="text-grey">
          We are connected to over 1500 Universities worldwide with our{" "}
          {isDesktop ? <br /> : " "}
          Education Consult department.
        </p>
        <Btn path="/destination" text="Destinations" />
      </div>
    </div>
  );
};

export default WhyChooseUs;

