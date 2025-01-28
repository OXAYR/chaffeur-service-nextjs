/** @format */

import React from "react";
import Button from "./Button";

function RidePricing() {
  return (
    <div className="my-24 px-6 md:px-16 lg:px-32">
      {/* Heading Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl text-center font-bold">
          Our Ride Pricing
        </h1>
        <hr className="w-20 border-2 mt-2 border-primary-default" />
      </div>

      {/* Content Section */}
      <div className="text-center text-silver-default mt-10 flex flex-col items-center gap-16">
        {/* Description */}
        <div className="text-balance text-center w-full lg:w-1/2 text-sm md:text-lg font-extralight tracking-wider">
          Our department is here to ensure personalized guidance. Our smart team
          takes care of everything. The entire team has been great to work with
          from start to finish.
        </div>

        {/* Image Navigation Section */}
        <div className="flex flex-row justify-center items-center gap-4 w-full">
          <div className="w-1/6 flex justify-center">
            <img
              src="/left-arrow.svg"
              alt="Left Arrow"
              className="w-8 md:w-auto"
            />
          </div>
          <div className="w-4/6 flex justify-center items-center">
            <img
              src="/mercedes-s-class.svg"
              alt="Mercedes S-Class"
              className=" h-auto"
            />
          </div>
          <div className="w-1/6 flex justify-center">
            <img
              src="/right-arrow.svg"
              alt="Right Arrow"
              className="w-8 md:w-auto"
            />
          </div>
        </div>

        {/* Pricing Section */}
        <div className="w-full lg:w-1/3">
          <div className="text-2xl md:text-3xl text-left font-bold">
            Mercedes S-Class
          </div>
          <div className="my-3 flex flex-col gap-2">
            {/* Hourly Rate */}
            <div className="flex justify-between items-center">
              <div className="text-silver-default">
                Hourly rate (minimum 3hrs)
              </div>
              <div className="text-black font-extrabold">$65</div>
            </div>
            <hr />
            {/* Day Rate */}
            <div className="flex justify-between items-center">
              <div className="text-silver-default">Day rate (8hrs)</div>
              <div className="text-black font-extrabold">$2760</div>
            </div>
            <hr />
            {/* Heathrow to Central London */}
            <div className="flex justify-between items-center">
              <div className="text-silver-default">
                Heathrow to Central London
              </div>
              <div className="text-black font-extrabold">$160</div>
            </div>
            <hr />
          </div>
          <Button
            buttonColor="bg-black"
            buttonWidth="w-full md:w-1/2"
            textColor="text-white"
            shadowColor="shadow-black"
            shadowSpread="shadow-md"
            buttonText="Book This Ride"
          />
        </div>
      </div>
    </div>
  );
}

export default RidePricing;
