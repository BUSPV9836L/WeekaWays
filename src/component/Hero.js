import React from "react";

export const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        className="w-full h-full object-cover "
        src="https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="/"
      ></img>
      <div className="max-w-[1140px] m-auto">
      <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex-col text-white p-4" >
        <h1 className="font-bold text-4xl">Find your Special Trip</h1>
        <h2 className="text-4xl py-4 italic">With Weekaway</h2>
        <p>
          Weekaway looks forward to welcoming you. Find all that you’ll need to
          know about visiting the State of Weekaway, including the country’s
          latest travel policies, visa requirements and more for incoming
          travellers.
        </p>
      </div>
      </div>
    </div>
  );
};
